# Digital Agency — React + TypeScript

Projeto gerado a partir do design no Figma ("Digital Agency — Web Design UI Template KIT"),
usando **Vite + React + TypeScript + Tailwind CSS**.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  assets/figmaAssets.ts   -> URLs das imagens extraídas do Figma
  components/
    Header.tsx
    Hero.tsx
    AboutBanner.tsx
    Services.tsx
    Team.tsx
    Portfolio.tsx
    CtaAbout.tsx
    Footer.tsx
  App.tsx
  index.css
```

## Importante sobre as imagens

As imagens usadas neste projeto vêm de URLs temporárias do Figma
(`src/assets/figmaAssets.ts`) e expiram em cerca de 7 dias. Antes de colocar
em produção:

1. Baixe cada imagem referenciada em `figmaAssets.ts`.
2. Salve-as em `src/assets/images/`.
3. Troque as URLs remotas pelos imports locais (ex:
   `import heroIllustration from "./images/hero.png"`).

## Sobre a conversão

O layout original do Figma vem com posicionamento absoluto (pixel-perfect
para uma única largura de tela). Neste projeto ele foi reorganizado em
componentes com Flexbox/Grid responsivos (Tailwind), mantendo as cores,
tipografia (Poppins) e proporções do design, mas adaptando para funcionar em
mobile, tablet e desktop.

Os ícones de serviços e redes sociais foram substituídos por ícones
vetoriais (lucide-react e SVGs inline) equivalentes aos do design original,
já que os SVGs do Figma para esses itens eram compostos por várias camadas.
