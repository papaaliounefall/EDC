export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  changefreq: string;
  priority: string;
}

/**
 * Source unique des métadonnées SEO par route.
 * Utilisée par useSeo (client), par le prerender statique (build) et pour
 * la génération du sitemap.
 */
export const ROUTES_SEO: RouteSeo[] = [
  {
    path: '/',
    title: 'EDC — Entreprise Dia Construction | BTP Thiès & Sénégal',
    description:
      'EDC — Entreprise Dia Construction accompagne vos projets de construction, génie civil et travaux publics au Sénégal (Thiès, Mbour, Saly, Dakar).',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/realisations',
    title: 'Réalisations | EDC — Entreprise Dia Construction',
    description:
      "Références d'EDC au Sénégal : construction de bâtiments, génie civil, travaux publics, VRD et aménagements à Thiès, Mbour et Dakar.",
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/equipe',
    title: 'Équipe & encadrement | EDC — Entreprise Dia Construction',
    description:
      "Découvrez l'encadrement d'EDC : direction technique, bureau d'études, conduite de travaux et encadrement de chantier au Sénégal (Thiès, Mbour, Dakar).",
    changefreq: 'yearly',
    priority: '0.5',
  },
];

export function getSeo(path: string): RouteSeo {
  return ROUTES_SEO.find((route) => route.path === path) ?? ROUTES_SEO[0];
}
