import { redirect } from "next/navigation";
import { CheckoutPage } from "./CheckoutPage";

interface Props {
  searchParams: Promise<{ matriculaId?: string; enrollmentId?: string }>;
}

export default async function MatriculaPagamentoPage({ searchParams }: Props) {
  const { matriculaId, enrollmentId: enrollmentIdParam } = await searchParams;
  const enrollmentId = matriculaId ?? enrollmentIdParam;

  if (!enrollmentId) {
    redirect("/matricula/cadastro");
  }

  let studentName = "Aluno";
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/public/enrollments/${enrollmentId}/summary`,
      { cache: "no-store" },
    );
    if (res.ok) {
      const data = await res.json();
      studentName = data.studentName ?? "Aluno";
    }
  } catch {
    // fallback: exibe "Aluno" se a API não responder
  }

  return (
    <CheckoutPage
      enrollmentId={enrollmentId as string}
      studentName={studentName}
    />
  );
}
