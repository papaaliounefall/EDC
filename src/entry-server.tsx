import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export { ROUTES_SEO, getSeo } from './seo';

/** Rend le HTML de l'application pour une route donnée (prerender statique). */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
