import { CreditCard, Zap, Package } from 'lucide-react';

export default function HowItWorks() {
  const features = [
    {
      icon: CreditCard,
      title: 'Assinou, pronto',
      description: 'Pagamento recorrente no cartão de crédito. Simples e automático.',
    },
    {
      icon: Zap,
      title: 'Arrecadação automática',
      description: 'Sem precisar cobrar colegas. O sistema cuida de tudo para você.',
    },
    {
      icon: Package,
      title: 'Reposição garantida',
      description: 'Compra e reposição dos itens do grêmio conforme o saldo disponível.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Como funciona</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Três passos simples para manter seu café sempre abastecido.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>

                {/* Step indicator */}
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="inline-block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Passo {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
