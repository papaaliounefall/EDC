# EDC — Entreprise Dia Construction

Site vitrine one-page pour **EDC (Entreprise Dia Construction)** — construction, génie civil et travaux publics au Sénégal.

**Stack :** React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · lucide-react

## Lancer en local

Prérequis : Node.js 20+

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Commande         | Rôle                              |
| ---------------- | --------------------------------- |
| `npm run dev`    | Serveur de développement (port 3000) |
| `npm run build`  | Build de production dans `dist/`  |
| `npm run preview`| Prévisualise le build             |
| `npm run lint`   | Vérification des types TypeScript |

## Configurer l'envoi des formulaires (Formspree)

Les deux formulaires (section Contact + modale « Projet ») transmettent les demandes via [Formspree](https://formspree.io) :

1. Créer un compte et un formulaire sur https://formspree.io → récupérer l'URL `https://formspree.io/f/xxxxxxx`.
2. Copier `.env.local.example` (ou `.env.example`) vers `.env.local` et renseigner :
   ```
   VITE_FORMSPREE_URL="https://formspree.io/f/xxxxxxx"
   ```
3. Redémarrer `npm run dev`.

Sans cette variable : en dev l'envoi est simulé (avec un avertissement en console), en production le formulaire affiche une erreur au lieu de faux-succès.

## Configurer le domaine (SEO)

L'URL publique du site est pilotée par `VITE_SITE_URL` (origine, sans slash final) :

```
VITE_SITE_URL="https://www.edc-construction.sn"
```

Elle est utilisée au build pour :
- les balises `canonical`, `og:url`, `og:image` et `twitter:image` **absolues** dans `index.html` ;
- la génération de `dist/sitemap.xml` (routes `/`, `/realisations`, `/equipe`) et `dist/robots.txt`.

Sans valeur, le placeholder `https://VOTRE-DOMAINE.sn` est utilisé. Sur Vercel, définir
`VITE_SITE_URL` dans les variables d'environnement du projet.

## Déploiement (Vercel)

`vercel.json` configure : rewrites SPA (routes inconnues → `index.html`), `cleanUrls`, le cache
des assets et des en-têtes de sécurité. Dossier de sortie : `dist/`.

Le build (`npm run build`) génère en plus, via `scripts/prerender.mjs`, une page **statique
pré-rendue** par route (`dist/index.html`, `dist/equipe.html`, `dist/realisations.html`) avec les
métadonnées SEO propres à chacune ; l'app s'hydrate ensuite côté client.

Les métadonnées SEO (`title`, `description`, `canonical`, `og:*`, `twitter:*`) sont centralisées
dans `src/seo.ts` (`ROUTES_SEO`) et consommées par `useSeo` (client), le prerender et le sitemap.

## Contenu à compléter avant mise en ligne

Coordonnées dans `src/data/edcData.ts` (`COMPANY_INFO`) : téléphone, email, adresse, WhatsApp — actuellement `[à compléter]`.

## Structure

```
src/
├── components/   # 12 composants (Header, Hero, Services, Projects, Contact…)
├── data/         # Contenu éditorial centralisé (edcData.ts)
├── lib/          # Helper d'envoi Formspree
├── types/        # Types TypeScript partagés
├── assets/images# Visuels des chantiers
└── App.tsx       # Assemblage de la page
```
