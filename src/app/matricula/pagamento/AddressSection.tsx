'use client';
import { useEffect, useState } from 'react';
import Checkbox from '@/components/ui/Checkbox';
import { MaskedField } from '@/components/ui/MaskedField';
import { useViaCep } from '@/hooks/useViaCep';
import { BillingAddress } from '@/services/paymentService';

interface Props {
  onAddressChange: (address: BillingAddress | undefined) => void;
  onUseRegisteredChange: (useRegistered: boolean) => void;
}

function buildAddress(
  cep: string,
  street: string,
  number: string,
  neighborhood: string,
  complement: string,
  city: string,
  state: string,
): BillingAddress | undefined {
  const zipCode = cep.replace(/\D/g, '');
  if (!zipCode || zipCode.length !== 8 || !street || !number || !neighborhood || !city || !state) {
    return undefined;
  }
  return { zipCode, street, number, neighborhood, complement: complement || undefined, city, state };
}

export function AddressSection({ onAddressChange, onUseRegisteredChange }: Props) {
  const [useRegistered, setUseRegistered] = useState(true);

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const { fetchCep, loading: cepLoading, error: cepError } = useViaCep();

  useEffect(() => {
    onUseRegisteredChange(useRegistered);
  }, [useRegistered, onUseRegisteredChange]);

  useEffect(() => {
    if (!useRegistered) {
      onAddressChange(buildAddress(cep, street, number, neighborhood, complement, city, state));
    }
  }, [useRegistered, cep, street, number, neighborhood, complement, city, state, onAddressChange]);

  async function handleCepChange(value: string) {
    setCep(value);
    const digits = value.replace(/\D/g, '');
    if (digits.length === 8) {
      const result = await fetchCep(digits);
      if (result) {
        setStreet(result.street);
        setNeighborhood(result.neighborhood);
        setCity(result.city);
        setState(result.state);
      }
    }
  }

  return (
    <section className="sec-card">
      <h3 className="sec-card-title">Endereço de cobrança</h3>

      <Checkbox
        id="use-registered-address"
        label="Usar o mesmo endereço do cadastro"
        checked={useRegistered}
        onChange={setUseRegistered}
        labelStyle={{ fontSize: 14 }}
      />

      {!useRegistered && (
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ maxWidth: 220 }}>
            <MaskedField
              label="CEP"
              mask="00000-000"
              value={cep}
              onChange={handleCepChange}
              placeholder="00000-000"
              required
              error={cepError ?? undefined}
            />
          </div>

          {cepLoading && (
            <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>Buscando endereço...</p>
          )}

          <div className="pub-form-grid" style={{ gap: 12 }}>
            <div className="pub-field">
              <label>
                Rua / Avenida <span className="req">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Nome da rua"
                style={{ fontSize: 14 }}
              />
            </div>
            <div className="pub-field">
              <label>
                Bairro <span className="req">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Bairro"
                style={{ fontSize: 14 }}
              />
            </div>
          </div>

          <div className="pub-form-grid" style={{ gap: 12 }}>
            <div className="pub-field">
              <label>
                Número <span className="req">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Ex: 123"
                style={{ fontSize: 14 }}
              />
            </div>
            <div className="pub-field">
              <label>Complemento</label>
              <input
                type="text"
                className="form-control"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                placeholder="Apto, sala... (opcional)"
                style={{ fontSize: 14 }}
              />
            </div>
          </div>

          <div className="pub-form-grid" style={{ gap: 12 }}>
            <div className="pub-field">
              <label>
                Cidade <span className="req">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cidade"
                style={{ fontSize: 14 }}
              />
            </div>
            <div className="pub-field">
              <label>
                Estado <span className="req">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={state}
                onChange={(e) => setState(e.target.value.toUpperCase().slice(0, 2))}
                placeholder="Ex: SP"
                maxLength={2}
                style={{ fontSize: 14 }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
