import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Included from '@/components/Included';
import Pricing from '@/components/Pricing';
import Rules from '@/components/Rules';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

/**
 * Landing Page - Grêmio do Café
 * 
 * Design Philosophy: Minimalismo Corporativo Quente
 * - Paleta: Marrom profundo (#5C4033), Creme (#F5E6D3), Branco puro
 * - Tipografia: Segoe UI para legibilidade corporativa
 * - Espaçamento generoso com alinhamentos assimétricos
 * - Ícones minimalistas em linha única
 * 
 * Seções:
 * 1. Hero - Apresentação principal com CTA
 * 2. Como funciona - 3 cards explicativos
 * 3. O que incluso - Lista de itens
 * 4. Valor - Detalhes de preço
 * 5. Regras - Princípios de transparência
 * 6. FAQ - Perguntas frequentes em acordeão
 * 7. CTA Final - Chamada para ação
 * 8. Footer - Rodapé com contato
 */

export default function Home() {
  // Links de pagamento (Mercado Pago)
  // Assinatura (cartão - recorrência)
  const mpSubscriptionLink =
    'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=1947e1fe39494aa6acc3099bac829e27';

  // Pix (pagamento manual) - alternativa
  const mpPixLink = 'https://mpago.la/18DC4WZ';

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCTAClick = () => openInNewTab(mpSubscriptionLink);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Navigation */}
      <Header onCTAClick={handleCTAClick} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onCTAClick={handleCTAClick} />

        {/* How It Works */}
        <HowItWorks />

        {/* What's Included */}
        <Included />

        {/* Pricing */}
        <Pricing onCTAClick={handleCTAClick} pixLink={mpPixLink} />

        {/* Rules & Transparency */}
        <Rules />

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <FinalCTA onCTAClick={handleCTAClick} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
