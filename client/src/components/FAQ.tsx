import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: 'Por que assinatura e não Pix?',
      answer:
        'A assinatura evita esquecimentos e elimina cobranças manuais. Com a recorrência no cartão, o pagamento acontece automaticamente e o café continua abastecido.',
    },
    {
      question: 'Posso pagar por Pix?',
      answer:
        'Sim. O Pix está disponível como alternativa, porém o pagamento não é automático. Para maior comodidade, recomendamos a assinatura no cartão.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer:
        'Sim. Você pode cancelar a qualquer momento pelo próprio link de assinatura, sem multa ou taxa de cancelamento.',
    },
    {
      question: 'E se meu cartão falhar?',
      answer:
        'O Mercado Pago avisa quando há falha no pagamento. Você pode atualizar o cartão e regularizar em seguida — sem penalidades.',
    },
    {
      question: 'Quem compra os itens?',
      answer:
        'Os responsáveis definidos pelo grupo fazem as compras e a reposição, usando o saldo do grêmio para adquirir café, açúcar e filtro de papel conforme necessário.',
    },
    {
      question: 'Como funciona a prestação de contas?',
      answer:
        'Periodicamente, os responsáveis compartilham um resumo com gastos e saldo: quanto entrou no mês, o que foi comprado e o valor que ficou para o próximo mês.',
    },
    {
      question: 'Posso mudar de ideia depois de assinar?',
      answer:
        'Claro. Se você assinar e depois decidir sair, basta cancelar. Não há compromisso de longo prazo.',
    },
  ];

  return (
    <section id="duvidas" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dúvidas frequentes</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Respostas rápidas para as principais perguntas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 bg-secondary/20 border border-accent/20 rounded-lg p-8 text-center">
          <h3 className="text-lg font-bold text-primary mb-2">Ainda tem dúvidas?</h3>
          <p className="text-foreground/70">
            Fale com os responsáveis do grêmio no setor.
          </p>
        </div>
      </div>
    </section>
  );
}
