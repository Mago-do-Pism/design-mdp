"use client";
import { useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { PixData } from "@/services/paymentService";
import { formatCurrency } from "@/utils/formatters";

interface Props {
  pix: PixData;
  amountDue: number;
  onExpired: () => void;
  onRegenerate: () => void;
  expired: boolean;
}

export function PixPanel({
  pix,
  amountDue,
  onExpired,
  onRegenerate,
  expired,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(() => {
    const ms = new Date(pix.expiresAt).getTime() - Date.now();
    return Math.max(0, Math.floor(ms / 1000));
  });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (expired) return;
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [expired]);

  useEffect(() => {
    if (!expired && secondsLeft === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      onExpired();
    }
  }, [secondsLeft, expired, onExpired]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  async function copyCode() {
    await navigator.clipboard.writeText(pix.qrCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  if (expired) {
    return (
      <section className="sec-card">
        <h3 className="sec-card-title">Pagar com Pix</h3>
        <div className="pix-block" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", marginBottom: 16 }}>
            QR Code expirado.
          </p>
          <button
            type="button"
            className="pub-btn primary"
            onClick={onRegenerate}
          >
            Gerar novo Pix
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="sec-card">
      <h3 className="sec-card-title">Pagar com Pix</h3>
      <div className="pix-block">
        {pix.qrCode && (
          <QRCodeSVG
            value={pix.qrCode}
            size={200}
            bgColor="#ffffff"
            fgColor="#000000"
            style={{ display: "block", margin: "0 auto" }}
          />
        )}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "var(--neutral-900)",
            }}
          >
            {formatCurrency(amountDue)} — 1ª mensalidade
          </div>
          <div
            style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}
          >
            QR Code expira em{" "}
            <strong>
              {mm}:{ss}
            </strong>
          </div>
        </div>
        <code className="pix-code">{pix.qrCode}</code>
        <button
          type="button"
          className="pub-btn outline"
          style={{ width: "100%" }}
          onClick={copyCode}
        >
          {copied ? "✓ Copiado!" : "📋 Copiar código Pix Copia & Cola"}
        </button>
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
          ⚡ Pix instantâneo:
        </strong>{" "}
        assim que o banco confirmar o pagamento, sua matrícula é confirmada.
      </div>
    </section>
  );
}
