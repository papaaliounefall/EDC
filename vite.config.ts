import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {mkdirSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import {ROUTES_SEO} from './src/seo.ts';

const DEFAULT_SITE_URL = 'https://edc.sn';

/**
 * Injecte l'URL publique du site dans index.html (%SITE_URL%) et génère
 * sitemap.xml + robots.txt à partir de VITE_SITE_URL au moment du build.
 */
function siteSeoPlugin(siteUrl: string): Plugin {
  return {
    name: 'edc-site-seo',
    transformIndexHtml(html: string) {
      return html.replace(/%SITE_URL%/g, siteUrl);
    },
    // Émule cleanUrls de Vercel en local : /equipe -> /equipe.html.
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const path = (req.url ?? '').split('?')[0].replace(/\/$/, '') || '/';
        const route = ROUTES_SEO.find((item) => item.path === path);
        if (route && route.path !== '/') {
          req.url = `${route.path}.html`;
        }
        next();
      });
    },
    closeBundle() {
      const outDir = fileURLToPath(new URL('./dist', import.meta.url));
      mkdirSync(outDir, {recursive: true});

      const urls = ROUTES_SEO.map(
        (route) =>
          `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`,
      ).join('\n');

      writeFileSync(
        resolve(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      writeFileSync(
        resolve(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      );
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(
    /\/+$/,
    '',
  );

  return {
    plugins: [react(), tailwindcss(), siteSeoPlugin(siteUrl)],
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
