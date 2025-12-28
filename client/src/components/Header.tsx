import { Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCTAClick?: () => void;
}

export default function Header({ onCTAClick }: HeaderProps) {
  const navLinks = [
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'O que inclui', href: '#incluso' },
    { label: 'Valor', href: '#valor' },
    { label: 'Regras', href: '#regras' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={2.5} />
          <span className="text-lg md:text-xl font-bold text-primary">Grêmio do Café</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          onClick={onCTAClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 py-2 md:py-2.5 rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Assinar agora
        </Button>
      </div>

      {/* Mobile Navigation */}
      <nav className="lg:hidden border-t border-border bg-card">
        <div className="container flex flex-wrap gap-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
