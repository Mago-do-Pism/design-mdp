'use client';
import { useState } from 'react';
import { usePayment } from '@/hooks/usePayment';
import { useStepGuard } from '@/hooks/useStepGuard';
import { useSnackbar } from '@/contexts/SnackbarContext';
import { BillingAddress } from '@/services/paymentService';
import { MatriculaShell } from '../_components/MatriculaShell';
import { MethodSelector } from './MethodSelector';
import { InstallmentSelector } from './InstallmentSelector';
import { PixPanel } from './PixPanel';
import { CardPanel } from './CardPanel';
import { BoletoPanel } from './BoletoPanel';
import { CheckoutSummary } from './CheckoutSummary';
import { AddressSection } from './AddressSection';
import LoadingIndicator from '@/components/ui/LoadingIndicator';

interface Props {
  enrollmentId: string;
  studentName: string;
}

function CheckoutContent({ enrollmentId, studentName }: Props) {
  const {
    selectedMethod, selectMethod,
    selectedInstallments, setSelectedInstallments,
    paymentData, loading, submitWithParams,
    pixExpired, handlePixExpired, regeneratePix,
    cardError, clearCardError,
    summary,
  } = usePayment(enrollmentId);

  const { showSnackbar } = useSnackbar();

  const [useRegisteredAddress, setUseRegisteredAddress] = useState(true);
  const [customAddress, setCustomAddress] = useState<BillingAddress | undefined>(undefined);

  const isAddressReady = useRegisteredAddress || customAddress !== undefined;
  const billingAddress = useRegisteredAddress ? undefined : customAddress;

  const showInstallments = selectedMethod !== null;
  const showPaymentPanel = selectedMethod !== null && selectedInstallments !== null && paymentData !== null;

  return (
    <MatriculaShell currentStep={2}>
      <main className="pub-content">
        <div style={{ width: '100%', maxWidth: 1100 }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: 'var(--neutral-900)', margin: '0 0 4px' }}>
              Última etapa: pagamento da matrícula
            </h1>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
              Sua matrícula é confirmada após o pagamento da 1ª mensalidade.
            </p>
          </div>

          <div className="checkout-shell">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <AddressSection
                onUseRegisteredChange={setUseRegisteredAddress}
                onAddressChange={setCustomAddress}
              />

              <MethodSelector selected={selectedMethod} onSelect={(m) => {
                selectMethod(m);
              }} />

              {showInstallments && (
                <InstallmentSelector
                  method={selectedMethod!}
                  selected={selectedInstallments}
                  onSelect={(n) => {
                    setSelectedInstallments(n);
                    if (selectedMethod !== 'credit_card') {
                      if (!isAddressReady) {
                        showSnackbar('Preencha o endereço de cobrança completo antes de continuar.', 'error');
                        return;
                      }
                      submitWithParams(selectedMethod!, n, undefined, billingAddress);
                    }
                  }}
                />
              )}

              {showPaymentPanel && selectedMethod === 'pix' && paymentData?.pix && (
                <PixPanel
                  pix={paymentData.pix}
                  amountDue={paymentData.amountDue}
                  expired={pixExpired}
                  onExpired={handlePixExpired}
                  onRegenerate={regeneratePix}
                />
              )}

              {showInstallments && selectedInstallments !== null && selectedMethod === 'credit_card' && !paymentData && (
                <CardPanel
                  installments={selectedInstallments}
                  amountDue={summary.amountDueNumeric}
                  loading={loading}
                  apiError={cardError}
                  onClearApiError={clearCardError}
                  onSubmit={(token) => submitWithParams('credit_card', selectedInstallments, token, billingAddress)}
                />
              )}

              {showPaymentPanel && selectedMethod === 'boleto' && paymentData?.boleto && (
                <BoletoPanel boleto={paymentData.boleto} amountDue={paymentData.amountDue} />
              )}

              {loading && !paymentData && (
                <section className="sec-card" style={{ textAlign: 'center', padding: 32 }}>
                  <div className="spinner-border text-primary" role="status" />
                  <p style={{ marginTop: 12, color: 'var(--text-muted)', fontSize: 13 }}>Gerando pagamento...</p>
                </section>
              )}
            </div>

            <CheckoutSummary studentName={studentName} summary={summary} />
          </div>
        </div>
      </main>
    </MatriculaShell>
  );
}

export function CheckoutPage({ enrollmentId, studentName }: Props) {
  const { ready } = useStepGuard('CONTRACT_SIGNED');
  if (!ready) return <LoadingIndicator />;
  return <CheckoutContent enrollmentId={enrollmentId} studentName={studentName} />;
}
