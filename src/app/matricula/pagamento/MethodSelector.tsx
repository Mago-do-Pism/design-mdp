"use client";
import PixSvg from "@/assets/icons/pix.svg";
import { PaymentMethod } from "@/services/paymentService";

interface Props {
  selected: PaymentMethod | null;
  onSelect: (method: PaymentMethod) => void;
}

const METHODS: {
  id: PaymentMethod;
  label: string;
  discount: string;
  sub: string;
}[] = [
  { id: "pix", label: "Pix", discount: "15% off", sub: "Aprovação imediata" },
  {
    id: "credit_card",
    label: "Cartão de crédito",
    discount: "10% off",
    sub: "Visa, Master, Elo e outros",
  },
  {
    id: "boleto",
    label: "Boleto bancário",
    discount: "15% off",
    sub: "1–2 dias úteis para compensar",
  },
];

function CardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      width={22}
      height={22}
    >
      <rect x={2} y={5} width={20} height={14} rx={2} />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </svg>
  );
}

function BoletoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22}>
      <path d="M2 4h1v16H2V4zm2 0h2v16H4V4zm3 0h1v16H7V4zm2 0h3v16H9V4zm4 0h1v16h-1V4zm2 0h2v16h-2V4zm3 0h1v16h-1V4zm2 0h1v16h-1V4z" />
    </svg>
  );
}

const ICONS: Record<PaymentMethod, React.ReactNode> = {
  pix: <PixSvg width={22} height={22} />,
  credit_card: <CardIcon />,
  boleto: <BoletoIcon />,
};

export function MethodSelector({ selected, onSelect }: Props) {
  return (
    <section className="sec-card">
      <h3 className="sec-card-title">Forma de pagamento</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {METHODS.map((m) => {
          const isSelected = selected === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onSelect(m.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 16px",
                border: `2px solid ${isSelected ? "var(--brand-blue)" : "var(--border-default)"}`,
                borderRadius: 10,
                background: isSelected ? "rgba(14,147,242,0.04)" : "white",
                cursor: "pointer",
                textAlign: "left",
                transition: "border-color 0.15s ease, background 0.15s ease",
                width: "100%",
                fontFamily: "inherit",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: isSelected
                    ? "rgba(14,147,242,0.12)"
                    : "var(--neutral-100)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--brand-blue)",
                  flexShrink: 0,
                }}
              >
                {ICONS[m.id]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--neutral-900)",
                    marginBottom: 2,
                  }}
                >
                  {m.label}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  {m.sub}
                </div>
              </div>
              <div
                style={{
                  flexShrink: 0,
                  display: "inline-flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 2,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "2px 8px",
                    borderRadius: 4,
                    background: "rgba(39,133,86,0.1)",
                    color: "var(--color-success)",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  {m.discount} à vista
                </span>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  ou 4× sem juros
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
