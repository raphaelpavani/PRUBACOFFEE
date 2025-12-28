# ☕ Grêmio do Café

Landing page responsiva e moderna para assinatura mensal do **Grêmio do Café** no ambiente de trabalho.

---

## 📄 Sobre o Projeto

O **Grêmio do Café** é uma iniciativa interna para manter o café do setor sempre abastecido por meio de uma assinatura mensal simples e organizada.

Esta landing page foi desenvolvida para:
- Informar claramente como funciona o grêmio
- Facilitar a adesão dos participantes
- Centralizar pagamentos via Mercado Pago (cartão e Pix)

---

## 🚀 Características Principais

- ✅ **Responsivo** — Funciona perfeitamente em desktop, tablet e celular  
- 🎨 **Design moderno** — Visual limpo e corporativo com tema café  
- ♿ **Acessível** — Bom contraste, textos claros e navegação intuitiva  
- ⚡ **Rápido** — Carrega em poucos segundos  
- 🔐 **Seguro** — Não coleta dados sensíveis; pagamentos processados pelo Mercado Pago  
- 🧩 **Fácil de personalizar** — Textos e cores simples de alterar  

---

## 🎨 Design

### 🎨 Paleta de Cores
- **Marrom Café (primária):** `#5C4033`
- **Creme (secundária):** `#F5E6D3`
- **Branco Puro:** `#FFFFFF`
- **Cinza Escuro (texto):** `#2C2C2C`

### 🔤 Tipografia
- **Fonte:** Segoe UI (corporativa e legível)
- **Pesos:** 400, 500, 600, 700

---

## 💳 Pagamentos

- **Cartão de crédito:** assinatura mensal automática (**recomendado**)
- **Pix:** alternativa manual

> Pagamentos processados diretamente pelo **Mercado Pago**.

---

## ▶️ Executar localmente

```bash
cd client
npm install
npm run dev
```
---

## 🗂️ Estrutura de Arquivos

```text
gremio-cafe/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx        # Página principal
│   │   ├── components/
│   │   │   ├── Header.tsx      # Cabeçalho
│   │   │   ├── Hero.tsx        # Seção Hero
│   │   │   ├── HowItWorks.tsx  # Como funciona
│   │   │   ├── Included.tsx    # O que inclui
│   │   │   ├── Pricing.tsx     # Valor
│   │   │   ├── Rules.tsx       # Regras
│   │   │   ├── FAQ.tsx         # Dúvidas
│   │   │   ├── FinalCTA.tsx    # CTA final
│   │   │   └── Footer.tsx      # Rodapé
│   │   ├── App.tsx             # Componente raiz
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Estilos globais
│   ├── public/
│   │   └── _redirects          # SPA fallback (Netlify)
│   ├── index.html              # HTML principal
│   └── package.json            # Dependências
├── README.md
```
## 📌 Observação
Este projeto é uma iniciativa interna de rateio e não representa atividade comercial.
