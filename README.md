# Fabio Costa — Site Institucional (Avante 70)

Site institucional para a pré-candidatura de **Fabio Costa** a Deputado Estadual
pelo Avante, construído com Next.js (App Router), TypeScript, Tailwind CSS v4,
Framer Motion, React Hook Form + Zod e Embla Carousel.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para build de produção:

```bash
npm run build
npm start
```

## Arquitetura

```
src/
  app/            → rotas (App Router), layout raiz, metadata, sitemap, robots
  components/
    ui/           → design system (Button, Card, Accordion, Container, etc.)
    layout/       → Navbar, Footer, loading screen, ações flutuantes
    sections/     → seções da Home (Hero, Propostas, Notícias, Contato...)
  constants/      → dados de conteúdo (propostas, projetos, notícias, agenda...)
  hooks/          → useTheme, useScrollSpy, useScrollProgress
  lib/            → utilitário `cn` (merge de classes Tailwind)
  types/          → tipos compartilhados
```

## Identidade visual

- **Cor primária:** laranja `#F58220` (identidade do Avante), com branco, cinza
  muito claro e preto/quase-preto para contraste e modo escuro.
- **Acento secundário:** verde-azulado `#4E8B8B`, inspirado no traço do
  logotipo do partido, usado com moderação em gradientes e detalhes.
- **Assinatura visual:** o `StrokeMotif` (`src/components/ui/stroke-motif.tsx`)
  é um traço ascendente que ecoa a seta do logotipo AVANTE — aparece no hero,
  no menu e no rodapé como elemento de marca recorrente, sem reproduzir o
  logotipo oficial do partido.
- **Tipografia:** Manrope (display/headlines) + Inter (texto), self-hosted via
  `@fontsource` — não depende de fontes externas do Google em tempo de build.

## Fotos e imagens

Como não há fotos reais do candidato disponíveis, todas as imagens usam o
componente `PlaceholderImage` (gradiente + rótulo). Basta trocar por `next/image`
com os arquivos reais em `public/images` quando as fotos estiverem disponíveis —
os componentes já estão preparados para múltiplos formatos de proporção
(quadrado, retrato, paisagem).

## Recursos implementados

- Menu fixo com scroll-spy, CTA destacado e drawer mobile animado.
- Hero com headline, dupla CTA e composição com formas/gradientes.
- Cards de indicadores com contador animado ao entrar na viewport.
- Sobre: linha do tempo + missão/visão/valores.
- Propostas: grid filtrável por categoria (12 temas).
- Projetos: grid com status (Concluído / Em andamento / Planejado).
- Notícias: carrossel Embla com categoria, tempo de leitura e data.
- Galeria: masonry com lightbox navegável por teclado.
- Agenda: lista de próximos compromissos com CTA de confirmação.
- Depoimentos: carrossel com autoplay (Embla + plugin autoplay).
- Transparência: cards de prestação de contas, documentos, compromissos etc.
- "Sua voz também faz parte da mudança": formulário completo (React Hook Form
  + Zod), com contador de caracteres e categorias de mensagem.
- FAQ em accordion acessível.
- Contato: formulário validado + bloco de localização/mapa.
- Extras: dark mode persistente, barra de progresso de scroll, botão
  voltar ao topo, botão flutuante de WhatsApp, loading screen, toasts de
  feedback (Sonner), `prefers-reduced-motion` respeitado.

## Acessibilidade (WCAG 2.2 AA)

- Skip link, landmarks (`header`, `main`, `footer`, `nav`), hierarquia de
  headings H1–H3 consistente.
- Todos os campos de formulário com `<label>` associado e mensagens de erro
  via `aria-describedby` + `role="alert"`.
- Estados de foco visíveis (`:focus-visible`) em toda a interface.
- Componentes interativos (accordion, drawer, lightbox, carrosséis) navegáveis
  por teclado, com `aria-expanded`/`aria-controls`/`aria-modal` corretos.
- Contraste verificado entre texto e fundo em modo claro e escuro.

## Próximos passos sugeridos

- Substituir os placeholders por fotos reais (usando `next/image` para
  otimização automática).
- Criar páginas de detalhe para notícias e projetos (`/noticias/[slug]`,
  `/projetos/[slug]`) reaproveitando os dados em `src/constants/content.ts`.
- Conectar os formulários a um endpoint real (API Route ou serviço externo).
- Ajustar `metadataBase`/domínio em `src/app/layout.tsx` e `sitemap.ts` para o
  domínio definitivo da campanha.
