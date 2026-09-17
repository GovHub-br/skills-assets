#!/usr/bin/env node
// Gera os 100 templates de post (estrutura × composição × fundo) a partir da
// spec embutida em index.html (bloco entre "@spec-start" e "@spec-end").
// Uso: node gen.js   (na pasta post-templates)
'use strict';
const fs = require('fs');
const path = require('path');
const here = __dirname;
const html = fs.readFileSync(path.join(here, 'index.html'), 'utf8');

const script = html.match(/<script>([\s\S]*)<\/script>/)[1];
const spec = script.slice(script.indexOf('// @spec-start'), script.indexOf('// @spec-end'));
const api = new Function(spec + '\nreturn { C, NAME, BG, BG_ORDER, COMPS, STRUCTS, postHTML };')();

const style = html.match(/<style>([\s\S]*?)<\/style>/)[1];
const postCss = style.slice(style.indexOf('/* ===== quadro'), style.indexOf('.post .zone'));
const fontsLink = html.match(/<link rel="stylesheet" href="([^"]+)">/)[1];

const gh = s => s
  .replace(/class="post /g, 'class="gh-post ')
  .replace(/class="post__/g, 'class="gh-post__')
  .replace(/(\s)post__/g, '$1gh-post__')
  .replace(/(\s)post--/g, '$1gh-post--')
  .replace(/class="shape"/g, 'class="gh-shape"')
  .replace(/class="chip /g, 'class="gh-chip ')
  .replace(/class="card /g, 'class="gh-card ')
  .replace(/class="card__/g, 'class="gh-card__')
  .replace(/\.post(?=[\s.:_\-{,])/g, '.gh-post')
  .replace(/\.shape(?=__|\b)/g, '.gh-shape')
  .replace(/\.chip(?=__|\b)/g, '.gh-chip')
  .replace(/\.card(?=__|\b)/g, '.gh-card');

const base = `@import url('${fontsLink}');
:root { --purple: #613EFF; --navy: #0A005A; --magenta: #EF41FF; --pink: #F9006F; --peach: #FFE7E1;
  --font-ui: 'Reddit Sans', 'Open Sans', -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  --font-head: 'Oswald', 'Arial Narrow', 'Reddit Sans', sans-serif; }
body { margin: 0; background: #888; }
${gh(postCss)}`;

let n = 0;
for (const s of api.STRUCTS) for (const comp of ['A', 'B', 'C', 'D']) for (const bg of api.BG_ORDER) {
  const name = `${s.id}-${comp}-${bg}`;
  const desc = api.COMPS[s.id][comp].desc;
  const body = gh(api.postHTML(s.id, comp, bg, '', { zone: false }));
  const file = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>${name} · template de post Gov Hub</title>
<!-- Gerado por gen.js a partir de index.html (galeria). Não edite à mão: mude a spec e regere.
     Estrutura: ${s.name} (${s.role}). Composição ${comp}: ${desc}. Fundo: ${api.NAME[bg]} (${api.C[bg]}).
     Exportar PNG: chrome --headless=new --window-size=1080,1350 --screenshot=${name}.png ${name}.html -->
<style>
${base}
</style>
</head>
<body>
${body}
</body>
</html>
`;
  fs.writeFileSync(path.join(here, `${name}.html`), file);
  n++;
}
console.log(`${n} templates gerados em ${here}`);
