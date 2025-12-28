import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

interface FinalCTAProps {
  onCTAClick?: () => void;
}

export default function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border">
      <div className="container text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Clock className="w-12 h-12 text-accent" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Leva menos de 1 minuto para participar
        </h2>

        {/* Subheading */}
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Clique no botão abaixo e finalize sua assinatura em poucos cliques. Seu café está te esperando!
        </p>

        {/* CTA Button */}
        <Button
          onClick={onCTAClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg text-lg"
        >
          Assinar agora
        </Button>

        {/* Trust message */}
        <p className="text-sm text-foreground/60 mt-6">
          Pagamentos processados de forma segura pelo Mercado Pago
        </p>
      </div>
    </section>
  );
}
