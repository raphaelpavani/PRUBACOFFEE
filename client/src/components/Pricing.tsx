import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingProps {
  onCTAClick?: () => void;
  pixLink?: string;
}

export default function Pricing({ onCTAClick, pixLink }: PricingProps) {
  const benefits = [
    'Cobrança automática no cartão de crédito',
    'Pix disponível como alternativa manual',
    'Sem taxa de adesão',
    'Cancelamento a qualquer momento',
    'Prestação de contas periódica (gastos e saldo)',
  ];

  return (
    <section id="valor" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Valor da assinatura</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Um valor simples para manter o café sempre disponível, com organização e transparência.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-secondary/30 to-secondary/10 border border-accent/20 rounded-lg p-8 md:p-12 mb-8">
            <div className="mb-8">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Assinatura mensal
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-primary">R$ 20,00</span>
                <span className="text-lg text-foreground/60">/mês</span>
              </div>
              <p className="text-foreground/70 mt-4">por pessoa</p>
            </div>

            <div className="border-t border-accent/20 my-8" />

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={onCTAClick}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Assinar agora
            </Button>

            {pixLink && (
              <p className="text-sm text-foreground/70 text-center mt-4">
                Prefere pagar por Pix?{' '}
                <a
                  href={pixLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline font-medium"
                >
                  Clique aqui
                </a>
              </p>
            )}

            <p className="text-sm text-foreground/60 text-center mt-4">
              Cartão é automático. Pix é pagamento manual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
