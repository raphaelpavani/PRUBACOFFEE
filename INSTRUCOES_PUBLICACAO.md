# Instruções de Publicação - Grêmio do Café

## 📋 Sumário Executivo

Você tem duas opções para publicar a landing page do Grêmio do Café:

1. **Opção 1**: Usar o arquivo `index-standalone.html` (single file) - mais simples
2. **Opção 2**: Usar o projeto React completo - mais flexível e profissional

---

## 🚀 Opção 1: Single File HTML (Recomendado para início rápido)

### Passo 1: Configurar o link do Mercado Pago

Abra o arquivo `index-standalone.html` com um editor de texto e localize a linha:

```html
const mpLink = '{{LINK_MERCADO_PAGO_ASSINATURA}}';
```

Substitua `{{LINK_MERCADO_PAGO_ASSINATURA}}` pelo seu link real do Mercado Pago:

```html
const mpLink = 'https://www.mercadopago.com.br/checkout/...';
```

### Passo 2: Publicar em plataformas gratuitas

#### **GitHub Pages** (Recomendado - totalmente gratuito)

1. Crie uma conta em [github.com](https://github.com)
2. Crie um novo repositório chamado `gremio-cafe`
3. Faça upload do arquivo `index-standalone.html`
4. Renomeie o arquivo para `index.html`
5. Vá para Settings → Pages → Source → Branch: main
6. Seu site estará disponível em: `https://seu-usuario.github.io/gremio-cafe`

#### **Netlify** (Alternativa - também gratuito)

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git" ou "Drag and drop"
3. Faça upload do arquivo `index-standalone.html`
4. Renomeie para `index.html`
5. Seu site estará online em minutos com URL automática

#### **Vercel** (Outra alternativa)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Faça upload do arquivo
4. Deploy automático

### Passo 3: Personalizar (Opcional)

Abra o arquivo `index-standalone.html` e procure por:

- **"(preencher com nomes)"** - Adicione os nomes dos responsáveis
- **Cores** - Se quiser mudar, procure por `#5C4033` (marrom) e `#F5E6D3` (creme)
- **Textos** - Todos os textos podem ser editados diretamente no HTML

---

## 🎨 Opção 2: Projeto React Completo (Mais profissional)

### Passo 1: Preparar o projeto

```bash
cd /home/ubuntu/gremio-cafe
pnpm install
```

### Passo 2: Configurar o link do Mercado Pago

Edite o arquivo `client/src/pages/Home.tsx` e localize:

```typescript
const mpLink = '{{LINK_MERCADO_PAGO_ASSINATURA}}';
```

Substitua pelo seu link real do Mercado Pago.

### Passo 3: Testar localmente

```bash
pnpm dev
```

Acesse `http://localhost:3000` para visualizar.

### Passo 4: Fazer build para produção

```bash
pnpm build
```

### Passo 5: Publicar

#### **GitHub Pages**

```bash
# Instale gh-pages
pnpm add -D gh-pages

# Configure package.json
# Adicione em "scripts":
# "deploy": "gh-pages -d dist/public"

# Faça deploy
pnpm deploy
```

#### **Netlify**

```bash
# Instale Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy --prod --dir=dist/public
```

#### **Vercel**

```bash
# Instale Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 🔧 Configurações Importantes

### Link do Mercado Pago

Para obter seu link de assinatura do Mercado Pago:

1. Acesse [mercadopago.com.br](https://mercadopago.com.br)
2. Vá para "Cobros" → "Assinaturas"
3. Crie uma nova assinatura com:
   - **Valor**: R$ 20,00
   - **Frequência**: Mensal
   - **Descrição**: "Assinatura Grêmio do Café"
4. Copie o link de pagamento gerado

### Personalizar Responsáveis

No arquivo HTML ou React, procure por:

```
Responsáveis: (preencher com nomes)
```

Substitua por:

```
Responsáveis: João Silva, Maria Santos
```

### Adicionar Email de Contato

Procure pela seção de contato e adicione:

```html
<a href="mailto:seu-email@empresa.com">seu-email@empresa.com</a>
```

---

## 📊 Recomendações de Domínio

### Opção Gratuita
- GitHub Pages: `seu-usuario.github.io/gremio-cafe`
- Netlify: `seu-site.netlify.app`

### Opção Paga (Recomendado)
- Registre um domínio em [registro.br](https://registro.br) (~R$ 40/ano)
- Aponte para seu GitHub Pages ou Netlify
- Exemplo: `gremio-cafe.com.br`

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Link do Mercado Pago configurado
- [ ] Nomes dos responsáveis preenchidos
- [ ] Email de contato adicionado
- [ ] Todos os textos revisados
- [ ] Site testado em mobile (responsivo)
- [ ] Botões "Assinar agora" funcionando

---

## 🆘 Troubleshooting

### "Link de assinatura não configurado"
- Verifique se você substituiu `{{LINK_MERCADO_PAGO_ASSINATURA}}` pelo link real

### Site não aparece após publicar
- Aguarde 5-10 minutos para propagação DNS
- Limpe o cache do navegador (Ctrl+Shift+Del)

### Botões não funcionam
- Verifique se o link do Mercado Pago está correto
- Teste em uma aba anônima do navegador

---

## 📱 Testar Responsividade

Abra o site em:
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

Use as ferramentas de desenvolvedor (F12) para testar diferentes tamanhos.

---

## 🎯 Próximos Passos

1. **Publicar** a landing page
2. **Compartilhar** o link com os colegas
3. **Monitorar** as assinaturas no Mercado Pago
4. **Atualizar** a página conforme feedback dos usuários

---

## 📞 Suporte

Se tiver dúvidas sobre:
- **HTML/CSS**: Consulte [MDN Web Docs](https://developer.mozilla.org)
- **Mercado Pago**: Acesse [suporte.mercadopago.com.br](https://suporte.mercadopago.com.br)
- **GitHub Pages**: Consulte [docs.github.com](https://docs.github.com)
- **Netlify**: Acesse [docs.netlify.com](https://docs.netlify.com)

---

**Versão**: 1.0  
**Data**: Dezembro 2024  
**Última atualização**: Dezembro 2024
