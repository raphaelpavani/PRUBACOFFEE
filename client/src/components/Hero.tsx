import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onCTAClick?: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-white via-white to-secondary/20 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
            Grêmio do Café ☕
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl">
            Assinatura mensal para manter o café do setor sempre abastecido — sem cobrança chata e sem esquecimento.
          </p>

          {/* Price Highlight */}
          <div className="inline-block bg-secondary/50 border border-accent/30 rounded-lg px-6 py-3 mb-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Valor</p>
            <p className="text-3xl md:text-4xl font-bold text-primary">R$ 20,00</p>
            <p className="text-sm text-muted-foreground">por pessoa / mês</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={onCTAClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg text-base"
            >
              Assinar agora
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3 rounded-md transition-all duration-200 text-base"
            >
              <a href="#como-funciona">Como funciona</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm animate-bounce">
            <span>Saiba mais</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
