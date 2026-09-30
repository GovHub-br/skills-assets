# post-templates-sobrio: posts 1080×1350 do Gov Hub, modo sóbrio

Templates de post e carrossel (Instagram e LinkedIn, feed retrato) na
paleta da marca (modo sóbrio, desde 2026-09-30). Cada arquivo
é um HTML autocontido: CSS, marcação, logos e ícones embutidos como data
URI. Abre sozinho no navegador e vira PNG com Chrome headless. Os textos
e números são de exemplo.

```
NN-<tipo>-<nome>-<fundo>.html
```

| Parte | Valores |
|---|---|
| tipo | `capa`, `conteudo`, `dados`, `enfase`, `convite` |
| fundo | `navy`, `roxo`, `claro` |

- `manifest.json`: número, arquivo, nome, tipo, fundo, versão de origem
  e descrição de cada post.
- `index.html`: galeria com filtro por fundo e por tipo. Lê o
  `manifest.json`, então abra por um servidor (`python3 -m http.server`)
  ou pelo CDN:
  <https://cdn.jsdelivr.net/gh/GovHub-br/skills-assets@main/gov-hub/post-templates-sobrio/index.html>.
- `fonte/fonte-completa-v3-a-v22.html`: galeria de trabalho com todas as
  versões intermediárias e o código que gera cada uma. Use-a para derivar
  uma versão nova, sem editar os templates à mão.

Paleta: roxo `#613EFF`, navy `#0A005A`, `#F2F1F6` (no lugar do pêssego),
`#BE006E` (no lugar do rosa, só em detalhe) e branco. Sem magenta, sem
Oswald e sem caixa alta.

Um carrossel usa **um fundo só**. A ordem é: capa, conteúdo, dados ou
ênfase, convite. Não há template de fechamento: quando for preciso, a
equipe de design cria a partir destes modelos.

Exportar um quadro:

```bash
chrome --headless=new --window-size=1080,1350 --screenshot=01.png 01-capa-capa-chamada-gigante-navy.html
```

As regras de uso (o que vai sobre cada fundo, contraste, limites de
texto) estão na skill `govhub-visual-identity`, em
`references/social-posts.md`. Os templates coloridos anteriores foram
descontinuados e removidos.
