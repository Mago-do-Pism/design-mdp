'use client';
import { useState } from 'react';
import { formatCurrency } from '@/utils/formatters';

interface Props {
  installments: number;
  amountDue: number;
  loading: boolean;
  apiError?: string | null;
  onClearApiError?: () => void;
  onSubmit: (cardToken: string) => void;
}

function maskCardNumber(value: string) {
  return value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
}

function maskExpiry(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
}

async function tokenizeCard(params: {
  number: string;
  holderName: string;
  expiry: string;
  cvv: string;
}): Promise<string> {
  const [month, rawYear] = params.expiry.split('/');
  const year = rawYear?.length === 2 ? `20${rawYear}` : rawYear;

  const res = await fetch(
    `https://api.pagar.me/core/v5/tokens?appId=${process.env.NEXT_PUBLIC_PAGARME_ENCRYPTION_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'card',
        card: {
          number: params.number.replace(/\D/g, ''),
          holder_name: params.holderName,
          exp_month: month,
          exp_year: year,
          cvv: params.cvv,
        },
      }),
    },
  );

  if (!res.ok) {
    throw new Error('invalid_card');
  }

  const data = await res.json();
  return data.id as string;
}

export function CardPanel({ installments, amountDue, loading, apiError, onClearApiError, onSubmit }: Props) {
  const [number, setNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [tokenizing, setTokenizing] = useState(false);

  function handleChange<T>(setter: (v: T) => void) {
    return (value: T) => {
      if (apiError) onClearApiError?.();
      setter(value);
    };
  }

  async function handlePay() {
    setError('');
    if (!number || !holderName || !expiry || !cvv) {
      setError('Preencha todos os dados do cartão.');
      return;
    }
    const [month, year] = expiry.split('/');
    if (!month || !year || month.length !== 2 || year.length !== 2) {
      setError('Validade inválida. Use o formato MM/AA.');
      return;
    }
    setTokenizing(true);
    try {
      const tokenId = await tokenizeCard({ number, holderName, expiry, cvv });
      onSubmit(tokenId);
    } catch {
      setError('Dados do cartão inválidos. Verifique e tente novamente.');
    } finally {
      setTokenizing(false);
    }
  }

  const label = installments === 1
    ? `Pagar ${formatCurrency(amountDue)} à vista`
    : `Pagar ${formatCurrency(amountDue)} (1ª de ${installments}×)`;

  return (
    <section className="sec-card">
      <h3 className="sec-card-title">Pagar com Cartão de Crédito</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--neutral-700)' }}>
            Número do cartão *
          </label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            value={number}
            onChange={(e) => handleChange(setNumber)(maskCardNumber(e.target.value))}
            inputMode="numeric"
            className="form-control"
            style={{ fontSize: 14 }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--neutral-700)' }}>
            Nome no cartão *
          </label>
          <input
            type="text"
            placeholder="Como aparece no cartão"
            value={holderName}
            onChange={(e) => handleChange(setHolderName)(e.target.value)}
            className="form-control"
            style={{ fontSize: 14 }}
            autoComplete="cc-name"
          />
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--neutral-700)' }}>
              Validade *
            </label>
            <input
              type="text"
              placeholder="MM/AA"
              value={expiry}
              onChange={(e) => handleChange(setExpiry)(maskExpiry(e.target.value))}
              inputMode="numeric"
              className="form-control"
              style={{ fontSize: 14 }}
              autoComplete="cc-exp"
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--neutral-700)' }}>
              CVV *
            </label>
            <input
              type="text"
              placeholder="000"
              value={cvv}
              onChange={(e) => handleChange(setCvv)(e.target.value.replace(/\D/g, '').slice(0, 4))}
              inputMode="numeric"
              className="form-control"
              style={{ fontSize: 14 }}
              autoComplete="cc-csc"
            />
          </div>
        </div>
        {error && (
          <p style={{ color: 'var(--color-error, #dc3545)', fontSize: 12, margin: 0 }}>{error}</p>
        )}
        {apiError && !error && (
          <p
            role="alert"
            style={{
              color: 'var(--color-error, #dc3545)',
              fontSize: 13,
              margin: 0,
              padding: '10px 12px',
              background: 'rgba(220,53,69,0.06)',
              border: '1px solid rgba(220,53,69,0.2)',
              borderRadius: 6,
            }}
          >
            {apiError}
          </p>
        )}
        <button
          type="button"
          className="pub-btn primary"
          onClick={handlePay}
          disabled={loading || tokenizing}
          style={{ marginTop: 8 }}
        >
          {loading || tokenizing ? 'Processando...' : label}
        </button>
      </div>
    </section>
  );
}
