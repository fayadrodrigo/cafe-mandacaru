# Café Mandacaru — Design System

**Café Mandacaru** é um café roots, alternativo e natural em **Boipeba, Bahia** — uma ilha cercada de natureza. Clima praiano, mas *praiano alternativo*: pé na areia, cuscuz no café da manhã, leite de coco em vez de leite, PANCs na quiche. Nada de surf havaiano, nada de "beach club". A referência é o **sertão que encontra o mar**: mandacaru, carcará, geometria sagrada dourada, papel kraft, quadro-negro de giz.

## Fontes (sources)
Fornecidas pelo usuário (sem Figma, sem código):
- `uploads/WhatsApp Image … 19.10.29.jpeg` — logo completa (símbolo + wordmark) em fundo preto → `assets/logo-full.png` (fundo removido)
- `uploads/WhatsApp Image … 19.11.15.jpeg` — wordmark → `assets/wordmark.png`
- `uploads/WhatsApp Image … 19.13.20.jpeg` — símbolo (mandacaru + carcará + flor da vida) → `assets/symbol.png`
- `uploads/ChatGPT Image … 19_28_15.png` — flor de hibisco → `assets/hibiscus.png` (xadrez removido)
- `uploads/ChatGPT Image … 19_28_20.png` — folha de bananeira → `assets/banana-leaf.png`
- `uploads/ChatGPT Image … 19_28_26.png` — flor de mandacaru → `assets/mandacaru-flower.png`
- Cardápio completo em texto (ver `ui_kits/cardapio/`).

## Produtos / superfícies
1. **Cardápio** — impresso (A4/A5) e versão digital (QR code na mesa).
2. **Redes sociais** — avatar, post de feed 1:1, story 9:16.
3. **Embalagens** — copo de café, saco kraft, etiqueta/adesivo.
4. **Site** — one-page: hero, cardápio resumido, localização, Instagram.

## CONTENT FUNDAMENTALS
- **Idioma:** português brasileiro, informal, direto. Fala com o cliente em **você** ("você pode ter seu cuscuz com leite de coco"). A marca fala em primeira pessoa do plural quando precisa ("nosso cuscuz"), mas prefere frases sem sujeito.
- **Tom:** acolhedor, sem pressa, um pouco brincalhão. Quadro de giz, não landing page. Nada de superlativos de marketing ("o melhor", "premium", "experiência").
- **Casing:** nomes de pratos em **Title Case** ("Cuscuz com Queijo Coalho"); títulos de seção em **CAIXA ALTA** com a fonte display ("CUSCUZ DO MANDACARU"); descrições em sentence case, curtas, sem ponto final ("Carne seca + queijo coalho").
- **Preços:** `R$ 18` — espaço após R$, sem centavos quando inteiro. Adicionais com "+" ("+ R$ 3").
- **Vocabulário do sertão/Bahia** é bem-vindo e não se explica: cuscuz, carne seca, queijo coalho, melado de cana, PANCs, pingado, caponata.
- **Emoji:** não. Ornamentos tipográficos sim: `···` (pontos triplos do wordmark), `—` para preço, `+` para combinações.
- **Exemplos reais:** "Mais 3 reais e seu cuscuz com leite de coco" · "Bolo do Dia" · "Trio Primavera Sertão" · "Com geleia ou melado de cana".

## VISUAL FOUNDATIONS
- **Metáfora:** cartaz de cordel/xilogravura + caderno de receitas + quadro de giz. Impresso, tátil, um pouco imperfeito.
- **Cores** (`tokens/colors.css`): *Cacau* `#3B1D0E` (tinta, wordmark) · *Ouro* `#B8862B` (mandala, detalhes) · *Cacto* `#4F6B2F` / *Noite* `#1F3A2A` (verdes) · *Hibisco* `#D8262B` (acento quente, usar pouco) · *Areia* `#F3E7CF` (papel/página) · *Flor* `#FBF6EA` (cards). Dois temas: **papel** (padrão) e **noite** (`[data-theme="noite"]` — verde-noite com ouro, para stories, avatar e o menu de bebidas à noite).
- **Regra de proporção:** 60% areia/flor, 25% cacau, 10% verde, 5% hibisco + ouro. Hibisco nunca como fundo de bloco grande; só como acento (preço em destaque, botão principal, flor fotográfica).
- **Tipografia** (`tokens/typography.css`): **Bevan** para títulos (caixa alta, tracking `.02em`, leading `.95`) — substituto Google Fonts para a wordmark xilográfica; **Instrument Sans** para corpo/UI; **Caveat** para notas de giz ("+ R$ 3 leite de coco"). Nunca usar Bevan abaixo de 16px nem em parágrafos.
- **Espaçamento:** escala 4px (`--space-1..24`). Cardápio é denso (8/12px entre itens); site e social respiram (48–96px).
- **Fundos:** areia lisa com **grão de papel** (`.cm-grain`, ruído SVG multiplicado a 8%). Fotos dos ativos botânicos (hibisco, bananeira, flor de mandacaru) entram **recortadas, saindo das bordas** — nunca centralizadas como ícone. Sem gradientes. Sem blur.
- **Bordas:** tinta 2px sólida (`--border-ink`) em cards e botões; ouro 1px para molduras decorativas. Cantos **retos ou 2–4px**; pílula só em tags/chips.
- **Sombras:** *hard shadow* deslocada `4px 4px 0 cacau` (efeito serigrafia/risografia) em cards e botões primários. Sombra suave (`--shadow-soft`) só para elementos flutuantes (toast, dialog).
- **Hover:** botões escurecem um passo (cacau-800→700; hibisco-600→700) e a hard shadow encolhe para 2px com translate(2px,2px) — "afunda no papel". Links: sublinhado ouro → texto hibisco.
- **Press:** translate(4px,4px) e sombra 0 (totalmente afundado). Sem escala.
- **Animação:** poucas, curtas: `220ms cubic-bezier(.2,.8,.2,1)`. Fade + 8px de subida na entrada. Nada de bounce.
- **Layout:** cabeçalho do cardápio centralizado com wordmark; colunas de preço alinhadas à direita com linha pontilhada (`···`) entre nome e preço. Site: max 1200px, header fixo fino com wordmark pequena.
- **Transparência/blur:** não se usa. Sobreposição de texto em foto usa bloco sólido areia/cacau, não gradiente de proteção.
- **Imagem:** quente, saturada, natural (verdes e vermelhos vivos, luz do dia). Recortes PNG dos três ativos. Sem preto-e-branco, sem filtros frios.
- **Ornamentos:** `···` e linha dupla dourada (`.cm-orn`), inspirados nos detalhes do wordmark. Mandala/flor-da-vida só via símbolo oficial — não redesenhar.

## ICONOGRAPHY
- O acervo da marca não tem ícones. O que existe: **símbolo** (mandacaru + carcará + flor da vida), **wordmark**, e três **fotos recortadas** (hibisco, folha de bananeira, flor de mandacaru).
- Para ícones de UI (menu, local, Instagram, WhatsApp, relógio) usar **Lucide** via CDN (`https://unpkg.com/lucide@latest`), stroke 1.75px, cor `currentColor`, tamanho 20/24px. Substituição — a marca não define um set próprio. Ícones sempre acompanhados de texto; nunca ícone sozinho como decoração.
- Sem emoji. Unicode permitido apenas como ornamento tipográfico: `···` `—` `+` `•`.
- Botânicos são **imagem**, nunca ícone: escala grande, cortados pela borda, em uma das quatro pontas.

## Index
- `styles.css` — entrada única; importa `tokens/{fonts,colors,typography,spacing,base}.css`
- `assets/` — `logo-full.png`, `wordmark.png`, `symbol.png`, `hibiscus.png`, `banana-leaf.png`, `mandacaru-flower.png`
- `guidelines/` — cards de fundamentos (Colors, Type, Spacing, Brand)
- `components/core/` — Button, Badge, Tag, Input, Card, Ornament, MenuItem, MenuSection, Tabs, Toast
- `ui_kits/cardapio/` — cardápio impresso A4 (frente/verso)
- `ui_kits/site/` — one-page site
- `ui_kits/social/` — avatar, post 1:1, story 9:16
- `ui_kits/embalagem/` — copo, saco kraft, etiqueta
- `thumbnail.html`, `SKILL.md`

## Intentional additions
- **Ornament** — divisor `···` com linhas douradas; vem direto do wordmark.
- **MenuItem / MenuSection** — o cardápio é o produto central; sem eles cada consumidor reinventaria a linha de preço.

## Caveats
- Fontes são substitutos do Google Fonts; a wordmark original é lettering, não fonte.
- Fundos pretos das logos removidos por segmentação de regiões pretas (externas e internas à mandala/letras). Bordas podem ter leve serrilhado em tamanhos grandes; peça o arquivo vetorial ao designer da logo.
