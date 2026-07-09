"use client";
import { useState } from "react";
import { BoletoData } from "@/services/paymentService";
import { formatCurrency } from "@/utils/formatters";

interface Props {
  boleto: BoletoData;
  amountDue: number;
}

export function BoletoPanel({ boleto, amountDue }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyLine() {
    await navigator.clipboard.writeText(boleto.boletoLine);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section className="sec-card">
      <h3 className="sec-card-title">Pagar com Boleto Bancário</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          style={{ fontWeight: 700, fontSize: 14, color: "var(--neutral-900)" }}
        >
          {formatCurrency(amountDue)} — 1ª mensalidade
        </div>
        <div
          style={{
            background: "var(--neutral-100)",
            borderRadius: 8,
            padding: "12px 14px",
            fontFamily: "monospace",
            fontSize: 12,
            wordBreak: "break-all",
            color: "var(--neutral-800)",
          }}
        >
          {boleto.boletoLine}
        </div>
        <button type="button" className="pub-btn outline" onClick={copyLine}>
          {copied ? "✓ Copiado!" : "📋 Copiar linha digitável"}
        </button>
        <a
          href={boleto.boletoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pub-btn outline"
          style={{ textAlign: "center", textDecoration: "none" }}
        >
          📄 Abrir boleto em PDF
        </a>
      </div>
      <div
        style={{
          marginTop: 18,
          padding: "14px 16px",
          background: "rgba(39,133,86,0.06)",
          borderLeft: "3px solid var(--color-success)",
          borderRadius: 6,
          fontSize: 12,
          color: "var(--text-secondary)",
        }}
      >
        <strong style={{ color: "var(--color-success)" }}>
          📄 Vencimento em 3 dias úteis:
        </strong>{" "}
        o pagamento pode levar 1-2 dias úteis para ser confirmado. Assim que o
        boleto for processado, sua matrícula estará confirmada.
      </div>
    </section>
  );
}
