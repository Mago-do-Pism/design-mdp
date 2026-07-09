'use client';
import { SummaryValues } from '@/hooks/usePayment';

interface Props {
  studentName: string;
  summary: SummaryValues;
}

export function CheckoutSummary({ studentName, summary }: Props) {
  return (
    <aside className="summary">
      <h3>Resumo da matrícula</h3>

      <div style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--neutral-200)' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 8, background: 'var(--brand-blue)', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0,
        }}>
          {studentName.charAt(0).toUpperCase()}
        </div>
        <div>
          <div style={{ fontWeight: 700, color: 'var(--neutral-900)', fontSize: 13 }}>{studentName}</div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Curso Intensivo 2026</div>
        </div>
      </div>

      <div className="summary-line">
        <span>Curso Intensivo 2026 · 4× R$ 260,00</span>
        <span>R$ 1.040,00</span>
      </div>

      {summary.hasDiscount && (
        <div className="summary-line" style={{ color: 'var(--color-success)' }}>
          <span>{summary.discountLabel}</span>
          <span>−{summary.discount}</span>
        </div>
      )}

      <div className="summary-total">
        <span className="label">A pagar agora</span>
        <span className="value">{summary.amountDue}</span>
      </div>

      {summary.nextCharge && (
        <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '8px 0 0' }}>
          {summary.nextCharge}
        </p>
      )}

      <div style={{
        marginTop: 18, padding: '12px 14px', background: 'var(--neutral-100)',
        borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ fontSize: 18 }}>🔒</span>
        <div style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
          Pagamento processado com segurança via Pagarme.
        </div>
      </div>
    </aside>
  );
}
