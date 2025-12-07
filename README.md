# Tema Hibrido - Magento 2

## Visão Geral

Tema customizado para Magento 2 baseado no tema Luma, desenvolvido para a loja Hibrido. O tema inclui componentes visuais modernos, carrosséis responsivos, grid de banners e customizações específicas para melhorar a experiência do usuário.

## Estrutura do Tema

```
app/design/frontend/Devnicolas/Hibrido/
├── registration.php                    # Registro do tema no Magento
├── theme.xml                          # Configuração do tema (parent: Luma)
├── composer.json                      # Dependências do tema
├── requirejs-config.js                # Configuração RequireJS
├── Magento_Theme/                     # Customizações do tema base
│   ├── layout/
│   │   └── default_head_blocks.xml    # Blocos do head
│   └── web/css/source/
│       ├── _extend.less               # Estilos principais
│       └── components/
│           ├── _slider-home.less      # Slider da home
│           ├── _banner-grid.less      # Grid de banners
│           └── _how-it-works.less    # Seção "Como Funciona"
├── Magento_Catalog/                   # Customizações do módulo Catalog
│   └── web/css/source/
│       ├── _extend.less
│       ├── _widgets.less              # Estilos de widgets
│       ├── components/
│       │   └── _product-showcase.less # Showcase de produtos
│       └── module/
│           └── _listings.less         # Listagens de produtos
├── Magento_CatalogWidget/             # Customizações de widgets
│   └── templates/
│       └── product/widget/content/
│           └── grid.phtml             # Template grid de produtos
├── Magento_Swatches/                  # Customizações de swatches
│   └── web/css/source/
│       └── _module.less               # Estilos de swatches
└── web/                               # Assets do tema
    ├── css/
    │   ├── source/
    │   │   ├── _extend.less          # Estilos base
    │   │   └── lib/variables/
    │   │       ├── _layout.less       # Variáveis de layout
    │   │       └── _colors.less       # Variáveis de cores
    │   ├── slick/
    │   │   ├── slick.css              # Estilos do Slick
    │   │   └── slick-theme.css       # Tema do Slick
    │   └── fontello/
    │       └── fontello.css           # Ícones Fontello
    ├── js/
    │   ├── init-slick.js              # Inicialização do Slick
    │   └── lib/
    │       ├── slick.js               # Biblioteca Slick (dev)
    │       └── slick.min.js           # Biblioteca Slick (min)
    ├── fonts/
    │   └── fontello/                  # Fontes Fontello
    └── images/                        # Imagens do tema
```

## Componentes Principais

### 1. Slider da Home (`_slider-home.less`)

Carrossel principal da página inicial com suporte a:
- Navegação por setas customizadas
- Indicadores de slide (dots)
- Transições suaves
- Responsivo com ajustes para mobile

**Classe CSS:** `.fashion-carousel`

**Configuração JavaScript:**
- Autoplay: desabilitado
- Infinite: habilitado
- Velocidade: 800ms
- Responsivo: setas desabilitadas em mobile, dots habilitados

### 2. Grid de Banners (`_banner-grid.less`)

Grid responsivo de banners com:
- Layout em grid usando Slick Slider
- Aspect ratio 1:1.5 para cada banner
- Overlay com gradiente para legibilidade do texto
- Botões "SHOP NOW" com efeitos hover
- Totalmente responsivo (5 colunas → 1 coluna)

**Classe CSS:** `.banner-grid-wrapper`

**Configuração JavaScript:**
- Autoplay: habilitado (5s)
- Slides por view: 5 (desktop) → 1 (mobile)
- Responsivo com breakpoints em 1024px, 768px, 640px e 480px

### 3. Seção "Como Funciona" (`_how-it-works.less`)

Seção informativa com:
- Background customizado (#fffff5)
- Layout em grid responsivo
- Ícones e textos descritivos
- Espaçamento otimizado

**Classe CSS:** `.how-it-works`

### 4. Showcase de Produtos (`_product-showcase.less`)

Exibição de produtos em destaque com:
- Grid responsivo de produtos
- Integração com Slick Slider
- Estilos customizados para cards de produtos
- Suporte a widgets de produtos

**Classe CSS:** `.block.widget.block-products-list`

### 5. Template Grid de Produtos (`grid.phtml`)

Template customizado para widget de produtos em grid com:
- Layout otimizado para exibição de produtos
- Integração com sistema de widgets do Magento
- Suporte a múltiplos produtos

### 6. Customizações de Swatches (`_module.less`)

Estilos customizados para swatches de produtos com:
- Melhorias visuais nos seletores
- Suporte a diferentes tipos de swatches
- Responsividade aprimorada

## Bibliotecas e Dependências

### Slick Slider

Biblioteca JavaScript para carrosséis e sliders:
- **Versão:** Incluída no tema
- **Localização:** `web/js/lib/slick.min.js`
- **Uso:** Inicializado via `init-slick.js`
- **Configuração:** RequireJS configurado em `requirejs-config.js`

### Fontello

Fonte de ícones customizada:
- **Localização:** `web/fonts/fontello/`
- **Estilos:** `web/css/fontello/fontello.css`
- **Formatos:** EOT, SVG, TTF, WOFF, WOFF2

## Variáveis LESS

### Layout (`_layout.less`)
- Variáveis de espaçamento
- Breakpoints responsivos
- Configurações de grid

### Cores (`_colors.less`)
- Paleta de cores do tema
- Cores de texto e background
- Cores de botões e links

## JavaScript

### Inicialização do Slick (`init-slick.js`)

Script que inicializa os carrosséis do tema:

**Carrossel Principal (`.fashion-carousel`):**
- Configuração para slider da home
- Responsivo com dots em mobile

**Grid de Banners (`.banner-grid-wrapper .banner-grid`):**
- Configuração para grid de banners
- Autoplay habilitado
- Breakpoints responsivos configurados

## RequireJS Configuration

O tema utiliza RequireJS para carregar módulos JavaScript:

```javascript
paths: {
    slick: 'js/lib/slick.min',
    initSlick: 'js/init-slick'
}
```

O módulo `initSlick` é carregado automaticamente em todas as páginas.

## Instalação

1. Copie o tema para:
   ```
   app/design/frontend/Devnicolas/Hibrido/
   ```

2. Execute os comandos do Magento:
   ```bash
   php bin/magento setup:upgrade
   php bin/magento setup:static-content:deploy -f
   php bin/magento cache:flush
   ```

3. Configure o tema no Admin:
   - Stores → Configuration → General → Design
   - Selecione "Devnicolas Hibrido" como tema


## Customizações por Módulo

### Magento_Theme
- Componentes visuais principais
- Slider e grid de banners
- Seção "Como Funciona"

### Magento_Catalog
- Estilos de listagem de produtos
- Widgets de produtos customizados
- Showcase de produtos

### Magento_CatalogWidget
- Template grid para widgets de produtos
- Layout otimizado para exibição

### Magento_Swatches
- Estilos customizados para swatches
- Melhorias visuais nos seletores

## Responsividade

O tema é totalmente responsivo com breakpoints:
- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Mobile Small:** < 480px

Todos os componentes se adaptam automaticamente aos diferentes tamanhos de tela.

## Manutenção

### Compilar LESS

Após alterar arquivos LESS, execute:
```bash
php bin/magento setup:static-content:deploy -f
```

### Limpar Cache

Sempre limpe o cache após alterações:
```bash
php bin/magento cache:flush
```

## Estrutura de Commits

O tema foi desenvolvido seguindo uma ordem lógica de commits:
1. Estrutura base do tema
2. Configurações base
3. Variáveis LESS e estilos base
4. Biblioteca Slick
5. Inicialização JavaScript
6. Estilos CSS do Slick
7. Fonte Fontello
8. Componentes do tema
9. Customizações de módulos

