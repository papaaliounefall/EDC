import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = resolve(import.meta.dirname, '..');
const clientDir = resolve(root, 'dist');
const ssrDir = resolve(root, '.ssr-build');

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Remplace le contenu d'une balise <meta attr="key" content="...">. */
const replaceMeta = (html, attr, key, content) => {
  const re = new RegExp(`(<meta\\s+${attr}="${escapeRegExp(key)}"\\s+content=")[^"]*(")`);
  return re.test(html) ? html.replace(re, `$1${content}$2`) : html;
};

await build({
  root,
  logLevel: 'warn',
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: ssrDir,
    emptyOutDir: true,
    copyPublicDir: false,
  },
});

const { render, ROUTES_SEO } = await import(
  pathToFileURL(resolve(ssrDir, 'entry-server.js')).href
);

const template = readFileSync(resolve(clientDir, 'index.html'), 'utf8');
const canonicalMatch = template.match(/<link rel="canonical" href="([^"]*)"/);
const origin = canonicalMatch ? canonicalMatch[1].replace(/\/$/, '') : '';

let count = 0;
for (const route of ROUTES_SEO) {
  const url = `${origin}${route.path}`;
  const appHtml = render(route.path);

  let html = template;
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = replaceMeta(html, 'name', 'description', route.description);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = replaceMeta(html, 'property', 'og:title', route.title);
  html = replaceMeta(html, 'property', 'og:description', route.description);
  html = replaceMeta(html, 'property', 'og:url', url);
  html = replaceMeta(html, 'name', 'twitter:title', route.title);
  html = replaceMeta(html, 'name', 'twitter:description', route.description);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outFile =
    route.path === '/'
      ? resolve(clientDir, 'index.html')
      : resolve(clientDir, `${route.path.replace(/^\//, '')}.html`);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  count += 1;
}

rmSync(ssrDir, { recursive: true, force: true });
console.log(`[prerender] ${count} page(s) statique(s) générée(s) — origine : ${origin || 'inconnue'}`);
