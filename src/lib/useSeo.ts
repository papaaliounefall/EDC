import { useEffect } from 'react';

interface SeoOptions {
  /** Titre de la page (balise <title> + og:title). */
  title: string;
  /** Meta description propre à la page. */
  description: string;
  /** Chemin absolu de la route, ex : "/", "/realisations", "/equipe". */
  path: string;
}

const setMeta = (attribute: 'name' | 'property', key: string, content: string): void => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setCanonical = (href: string): void => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

/**
 * Met à jour des métadonnées SEO propres à chaque route côté client
 * (title, description, canonical, Open Graph, Twitter) sans dépendance externe.
 * L'URL absolue est dérivée de l'origine réelle au runtime.
 */
export function useSeo({ title, description, path }: SeoOptions): void {
  useEffect(() => {
    const origin = window.location.origin.replace(/\/+$/, '');
    const url = `${origin}${path}`;

    document.title = title;
    setMeta('name', 'description', description);
    setCanonical(url);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
  }, [title, description, path]);
}
