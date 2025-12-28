import { Mail, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-primary-foreground/20">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3">Grêmio do Café</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Mantendo o café do setor sempre abastecido, sem cobrança chata e sem esquecimento.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Responsáveis:</p>
                  <p className="text-primary-foreground/80 text-sm">(Raphael, Godinho, Carvalho)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div>
            <h3 className="text-lg font-bold mb-3">Segurança</h3>
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 mt-1 flex-shrink-0" />
              <p className="text-primary-foreground/80 text-sm">
                Este site não coleta dados sensíveis. Pagamentos são processados de forma segura pelo Mercado Pago.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <p>© {currentYear} Grêmio do Café. Todos os direitos reservados.</p>
           <p className="mt-1 text-xs text-primary-foreground/70">
      O Grêmio do Café é uma iniciativa interna de rateio entre colaboradores, destinada exclusivamente ao custeio de itens de uso comum, não representando atividade comercial, prestação de serviços ou venda de produtos.
    </p>
          <div className="flex gap-6">
            <a href="#como-funciona" className="hover:text-primary-foreground transition-colors">
              Como funciona
            </a>
            <a href="#duvidas" className="hover:text-primary-foreground transition-colors">
              Dúvidas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
