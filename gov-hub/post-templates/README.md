# post-templates: quadros 1080×1350 do Gov Hub

100 templates de post/carrossel (Instagram e LinkedIn, feed retrato), um
arquivo HTML por combinação **estrutura × composição × fundo**, com texto
de exemplo no lugar do conteúdo. Cada arquivo abre sozinho no navegador e
vira PNG com Chrome headless.

```
<estrutura>-<composição>-<fundo>.html
```

| Parte | Valores |
|---|---|
| estrutura | `capa`, `conteudo`, `enfase`, `convite`, `fechamento` |
| composição | `A` (a original de `social-posts.md`), `B`, `C`, `D` (novas, 2026-09-17) |
| fundo | `purple`, `navy`, `peach`, `pink`, `magenta` |

- `index.html`: galeria interativa com todos os 100 (filtros, ampliar,
  zonas de texto). Abra local ou em
  <https://cdn.jsdelivr.net/gh/GovHub-br/skills-assets@main/post-templates/index.html>.
- `gen.js`: gera os 100 arquivos a partir da spec embutida em `index.html`
  (bloco `@spec-start`…`@spec-end`). **Não edite os arquivos gerados à
  mão**: altere a spec e rode `node gen.js`.
- `logo/`: logos usadas pelos templates (Gov Hub branca/navy, símbolo
  branco, Lab Livre e UnB), referenciadas por caminho relativo.

Exportar um quadro:

```bash
chrome --headless=new --window-size=1080,1350 --screenshot=capa-B-navy.png capa-B-navy.html
```

As regras de uso (qual estrutura em qual posição do carrossel, cores por
fundo, zonas de texto, limites de linhas) estão na skill
`govhub-visual-identity`, em `references/social-posts.md`.
