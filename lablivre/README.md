# Assets da marca Lab Livre

Versão dos assets do `skills-assets` na paleta do **Lab Livre**
(Laboratório de Software Livre da UnB). Geradas em 2026-09-21 a partir dos
assets do Gov Hub, por recoloração: mesma geometria, mesmas composições,
só os hexadecimais trocados.

| Gov Hub | Lab Livre | Nome no MIV do Lab Livre |
|---|---|---|
| `#0A005A` | `#080056` | azul profundo |
| `#613EFF` | `#7023E8` | roxo (assinatura) |
| `#EF41FF` | `#E52E70` | rosa-choque |
| `#F9006F` | `#F46B2F` | laranja |
| `#FFE7E1` | `#FFE7E1` | rosa claro (igual) |

## Pastas

- `graphic-elements/` — 8 SVGs 1920×1080 (6 templates de slide + folha de
  formas + padrão).
- `icons/` — 332 ícones × 3 variantes (`default`, `purple`, `orange`),
  SVG 62×62.
- `post-templates/` — 100 HTMLs 1080×1350 (5 estruturas × 4 composições ×
  5 fundos) + `index.html` (galeria) + `gen.js` (regera os 100 a partir da
  spec da galeria) + `logo/` (Lab Livre, borboleta, UnB, Gov Hub).

## Diferenças além da cor

Nos templates de post, o fundo **`pink` (laranja `#F46B2F`) usa texto
navy**, não branco: branco sobre o laranja dá ~2,9:1 de contraste, contra
~7,5:1 do azul profundo. No Gov Hub esse fundo era o rosa `#F9006F`, mais
escuro, onde o branco funcionava.

As logos da marca nos templates são `lab-livre-blue` (fundo claro) e
`lab-livre-white` (fundo escuro), os chips levam a borboleta branca e a
linha de parceiros traz UnB + Gov Hub.

## URL (CDN)

```
https://cdn.jsdelivr.net/gh/GovHub-br/skills-assets@main/lablivre/<pasta>/<arquivo>
```

Os assets do Gov Hub continuam nas pastas da raiz (`icons/`,
`graphic-elements/`, `post-templates/`); não misture os dois conjuntos.

Documentação de uso: skill `lablivre-visual-identity` do repo
[GovHub-skills](https://github.com/GovHub-br/GovHub-skills).
