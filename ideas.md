# Brainstorming de Design - Grêmio do Café

## Abordagem 1: Minimalismo Corporativo Quente
**Design Movement**: Modernismo corporativo com toques de warmth
**Probability**: 0.08

### Características Principais
- Paleta restrita: Marrom escuro (#5C4033), creme (#F5E6D3), branco puro
- Tipografia: Serif elegante para títulos (Georgia), sans-serif limpo para corpo (Segoe UI)
- Espaçamento generoso com alinhamentos assimétricos
- Ícones minimalistas em linha única

### Filosofia de Cores
Tons de café natural: marrom profundo para autoridade, creme para acessibilidade, branco para respiro. Transmite confiança e profissionalismo sem frieza.

### Paradigma de Layout
Seções com largura variável, alinhamento à esquerda em alguns blocos, à direita em outros. Hero com imagem de café em grande escala ao fundo com texto sobreposto com fundo semi-transparente.

### Elementos Assinatura
1. Linha divisória em marrom sutil entre seções
2. Ícones de café estilizados (xícara, grão, filtro)
3. Cards com sombra suave e borda esquerda em marrom

### Filosofia de Interação
Hover effects sutis: mudança de cor de texto, elevação leve de cards, transições suaves de 200ms.

### Animação
- Entrada de elementos com fade-in + slide-up ao scroll
- Botões com efeito de preenchimento suave ao hover
- Ícones com rotação leve ao hover

### Sistema Tipográfico
- Display: Georgia Bold 48px para títulos principais
- Heading: Segoe UI SemiBold 24px para seções
- Body: Segoe UI Regular 16px com line-height 1.6
- CTA: Segoe UI Bold 16px

---

## Abordagem 2: Artesanal Acolhedor
**Design Movement**: Aesthetic Cottagecore corporativo com textura
**Probability**: 0.07

### Características Principais
- Paleta: Marrom chocolate (#6F4E37), bege quente (#E8D7C3), tons de ouro (#D4A574)
- Tipografia: Fonte com serifa humanista (Playfair Display) + sans-serif amigável (Poppins)
- Texturas sutis: padrão de grão de café em background
- Ilustrações hand-drawn style

### Filosofia de Cores
Cores que remetem a café artesanal: marrom profundo como café coado, bege como açúcar cristal, ouro como luz natural em café aconchegante.

### Paradigma de Layout
Seções com larguras diferentes, algumas com fundo texturizado, outras com padrões geométricos suaves. Cards com cantos ligeiramente arredondados e bordas sutis.

### Elementos Assinatura
1. Padrão de grão de café repetido em backgrounds
2. Ilustrações de xícara e grãos em estilo hand-drawn
3. Citações em itálico com ícone de aspas estilizado

### Filosofia de Interação
Interações acolhedoras: cards ganham sombra mais pronunciada, textos mudam para tom de ouro, animações mais lentas e fluidas.

### Animação
- Elementos entram com bounce suave
- Botões crescem ligeiramente ao hover com efeito de glow
- Ícones têm movimento de flutuação contínuo

### Sistema Tipográfico
- Display: Playfair Display Bold 52px
- Heading: Playfair Display SemiBold 28px
- Body: Poppins Regular 16px
- CTA: Poppins Bold 18px

---

## Abordagem 3: Moderno Geométrico
**Design Movement**: Design System contemporâneo com geometria
**Probability**: 0.09

### Características Principais
- Paleta: Marrom moderno (#8B6F47), cinza quente (#E9E5E0), accent em terracota (#C85A54)
- Tipografia: Fonte geométrica moderna (Montserrat) + readable body (Open Sans)
- Formas geométricas: linhas diagonais, blocos assimétricos
- Ícones geométricos abstratos

### Filosofia de Cores
Marrom sofisticado com cinza neutro para modernidade, terracota como accent vibrante mas contido. Paleta que evita parecer genérica.

### Paradigma de Layout
Blocos assimétricos com linhas diagonais cortando seções. Algumas seções com clip-path para criar ângulos interessantes. Grid de 12 colunas com quebras criativas.

### Elementos Assinatura
1. Linhas diagonais como divisores entre seções
2. Blocos geométricos com cores sólidas
3. Ícones em estilo outline geométrico

### Filosofia de Interação
Interações dinâmicas: botões com efeito de transformação, cards com movimento de perspectiva, transições de 300ms mais perceptíveis.

### Animação
- Linhas diagonais animam-se ao scroll
- Botões com efeito de ripple ao clique
- Cards com efeito 3D ao hover

### Sistema Tipográfico
- Display: Montserrat Bold 56px
- Heading: Montserrat SemiBold 26px
- Body: Open Sans Regular 16px
- CTA: Montserrat Bold 16px

---

## Decisão: Abordagem 1 - Minimalismo Corporativo Quente

**Rationale**: Combina profissionalismo corporativo com warmth acessível. Perfeito para um grêmio de trabalho que precisa transmitir confiança mas sem ser frio. A paleta de marrom, creme e branco é imediatamente reconhecível com café, e o layout assimétrico evita monotonia.

**Implementação**: Vou usar Segoe UI para tipografia (legível e corporativa), marrom #5C4033 como cor primária, creme #F5E6D3 para backgrounds secundários, e branco puro para respiro. Ícones minimalistas em linha única, cards com sombra suave, e transições suaves.
