import { Shield, Users, Coffee, BarChart3, TrendingUp } from 'lucide-react';

export default function Rules() {
  const rules = [
    {
      icon: Users,
      title: 'Participação opcional',
      description: 'Ninguém é obrigado a participar. A adesão é totalmente voluntária.',
    },
    {
      icon: Coffee,
      title: 'Consumo destinado a participantes',
      description: 'O café, açúcar e filtro são para uso exclusivo dos membros do grêmio.',
    },
    {
      icon: Shield,
      title: 'Uso exclusivo do valor arrecadado',
      description: 'O valor do grêmio é utilizado exclusivamente para café, açúcar e filtro de papel.',
    },
    {
      icon: BarChart3,
      title: 'Prestação de contas',
      description: 'Os responsáveis compartilham relatórios periódicos com gastos e saldo.',
    },
    {
      icon: TrendingUp,
      title: 'Sobra de saldo',
      description: 'Qualquer saldo restante é automaticamente transferido para o mês seguinte.',
    },
  ];

  return (
    <section id="regras" className="py-16 md:py-24 bg-secondary/20">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Regras e transparência</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Veja os princípios que orientam o Grêmio do Café no dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{rule.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{rule.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
