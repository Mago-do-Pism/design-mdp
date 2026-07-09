"use client";
import { PaymentMethod } from "@/services/paymentService";

interface Option {
  n: number;
  label: string;
  sub: string;
}

const OPTIONS: Record<PaymentMethod, Option[]> = {
  pix: [
    { n: 1, label: "1x à vista", sub: "R$ 884,00 · 15% off" },
    { n: 4, label: "4x", sub: "R$ 260,00/mês · sem juros" },
  ],
  boleto: [
    { n: 1, label: "1x à vista", sub: "R$ 884,00 · 15% off" },
    { n: 4, label: "4x", sub: "R$ 260,00/mês · 1-2 dias úteis" },
  ],
  credit_card: [
    { n: 1, label: "1x à vista", sub: "R$ 936,00 · 10% off" },
    { n: 4, label: "4x", sub: "R$ 260,00/mês no cartão" },
  ],
};

interface Props {
  method: PaymentMethod;
  selected: number | null;
  onSelect: (n: number) => void;
}

export function InstallmentSelector({ method, selected, onSelect }: Props) {
  const opts = OPTIONS[method];
  return (
    <section className="sec-card">
      <h3 className="sec-card-title">Forma de parcelamento</h3>
      <div
        className="installments"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        {opts.map((o) => (
          <button
            key={o.n}
            type="button"
            className={`opt${selected === o.n ? " is-selected" : ""}`}
            onClick={() => onSelect(o.n)}
          >
            <strong>{o.label}</strong>
            <span>{o.sub}</span>
          </button>
        ))}
      </div>
      <p
        style={{ fontSize: 11, color: "var(--text-muted)", margin: "12px 0 0" }}
      >
        As parcelas serão cobradas todo dia 15, a partir do mês seguinte à
        matrícula.
      </p>
    </section>
  );
}
