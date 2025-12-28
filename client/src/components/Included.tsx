import { Coffee, Droplet, Filter, CheckCircle2 } from 'lucide-react';

export default function Included() {
  const items = [
    { icon: Coffee, label: 'Café' },
    { icon: Droplet, label: 'Açúcar' },
    { icon: Filter, label: 'Filtro de papel' },
  ];

  return (
    <section id="incluso" className="py-16 md:py-24 bg-secondary/20">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O que está incluso</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Os itens são adquiridos conforme o saldo mensal do grêmio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-primary">{item.label}</h3>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-border rounded-lg p-8 md:p-10">
          <div className="flex gap-4">
            <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h3 className="font-bold text-primary mb-2">Gestão inteligente do saldo</h3>
              <p className="text-foreground/70 leading-relaxed">
                Compramos de forma planejada para aproveitar ao máximo o saldo do mês. Se houver sobra, o valor vira crédito
                para o mês seguinte — sem desperdício.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
