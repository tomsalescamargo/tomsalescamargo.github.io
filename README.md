# tomsalescamargo.github.io

[![CI / Deploy](https://github.com/tomsalescamargo/tomsalescamargo.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/tomsalescamargo/tomsalescamargo.github.io/actions/workflows/ci.yml)
[![Lighthouse](https://github.com/tomsalescamargo/tomsalescamargo.github.io/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/tomsalescamargo/tomsalescamargo.github.io/actions/workflows/lighthouse.yml)

Portfólio pessoal de **Tom Sales Soares de Camargo**, desenvolvedor back-end Java.
🔗 **https://tomsalescamargo.github.io** · [English](https://tomsalescamargo.github.io/en/)

Site estático, bilíngue (PT/EN), sem framework de UI no cliente e com metas de qualidade verificadas no CI.

## Destaques técnicos

| Área               | O que foi feito                                                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Performance**    | Astro gera HTML estático, sem JavaScript de framework no cliente (só ~0,5 kB para o tema). Imagens em AVIF/WebP com `srcset`, fontes self-hosted. Lighthouse 100 em performance, acessibilidade, boas práticas e SEO |
| **Acessibilidade** | HTML semântico (`<ol>` de experiências, `<time>`), skip link, foco visível, contraste AA nos dois temas, `prefers-reduced-motion`, textos alternativos                                                               |
| **SEO**            | `hreflang` PT/EN, canonical, sitemap, Open Graph/Twitter Card com imagem própria, dados estruturados `schema.org/Person` (JSON-LD)                                                                                   |
| **i18n**           | Roteamento nativo do Astro (PT na raiz, EN em `/en/`), datas com `Intl.DateTimeFormat`                                                                                                                               |
| **Tema**           | Claro/escuro seguindo o sistema, com escolha salva e aplicada antes da primeira pintura (sem "piscar")                                                                                                               |
| **Dados**          | Todo o conteúdo em um único arquivo tipado (`src/data/profile.ts`), o mesmo do currículo e do LinkedIn                                                                                                               |
| **Qualidade**      | TypeScript strict + `astro check`, Prettier, 20 testes (Vitest) de integridade dos dados e do HTML gerado, Lighthouse CI com orçamento mínimo, Dependabot                                                            |

## Stack

Astro 7 · TypeScript 6 · CSS puro (custom properties) · Vitest · Lighthouse CI · GitHub Actions · GitHub Pages

## Rodar localmente

```bash
nvm use            # Node 24 (.nvmrc)
npm ci
npm run dev        # http://localhost:4321
```

| Comando                 | O que faz                                            |
| ----------------------- | ---------------------------------------------------- |
| `npm run build`         | Gera o site em `dist/`                               |
| `npm run check`         | Verificação de tipos (`astro check`)                 |
| `npm test`              | Testes de dados + HTML gerado (rode depois do build) |
| `npm run format`        | Formata com Prettier                                 |
| `npx @lhci/cli autorun` | Lighthouse com as metas de `lighthouserc.json`       |

## Estrutura

```
src/
├── data/            # profile.ts (conteúdo PT/EN) e types.ts
├── i18n/ui.ts       # textos de interface, rotas e formatação de datas
├── components/      # Hero, About, Experience, Projects, Skills, Education, Contact, Seo…
├── layouts/Base.astro
├── pages/           # index.astro (PT), en/index.astro (EN), 404.astro
└── styles/global.css  # tokens de design e temas
tests/               # profile.test.ts, html.test.ts
public/              # currículos em PDF, imagem Open Graph, favicon, robots.txt
scripts/og-image.py  # gera public/og-image.png
```

## Editar o conteúdo

Edite `src/data/profile.ts` (PT e EN). Os testes garantem que as duas línguas continuam com a mesma estrutura, datas e links. Os PDFs em `public/cv/` são gerados a partir do currículo (versão pública, sem telefone).

## Decisões

- **Astro em vez de React/Next:** o site é conteúdo, não aplicação. HTML estático entrega o melhor tempo de carregamento e SEO, sem custo de hidratação.
- **Sem framework de CSS:** poucos componentes e tokens bem definidos; CSS com escopo por componente mantém o bundle mínimo.
- **GitHub Pages + Actions oficiais:** deploy a cada push na `main`, sem serviço externo; o mesmo pipeline roda em pull requests.
- **Testes do HTML gerado:** pegam regressões de SEO e acessibilidade (ex.: imagem sem `alt`, âncora quebrada) que o compilador não vê.

## Licença

Código sob [MIT](LICENSE). Textos, fotos e currículos são pessoais e não estão cobertos pela licença.
