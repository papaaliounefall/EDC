import { ApproachStep, ProjectItem, ServiceItem } from '../types';
import buildingImg from '../assets/images/edc_project_building_1791383501224.webp';
import amenagementImg from '../assets/images/edc_project_amenagement_1791383524028.webp';
import autoroutePfo01 from '../assets/images/autoroute-pfo/autoroute-pfo-01.webp';
import autoroutePfo02 from '../assets/images/autoroute-pfo/autoroute-pfo-02.webp';
import autoroutePfo03 from '../assets/images/autoroute-pfo/autoroute-pfo-03.webp';
import autoroutePfo04 from '../assets/images/autoroute-pfo/autoroute-pfo-04.webp';
import autoroutePfo05 from '../assets/images/autoroute-pfo/autoroute-pfo-05.webp';
import autorouteArezki01 from '../assets/images/autoroute-arezki/autoroute-arezki-01.webp';
import autorouteArezki02 from '../assets/images/autoroute-arezki/autoroute-arezki-02.webp';
import autorouteArezki03 from '../assets/images/autoroute-arezki/autoroute-arezki-03.webp';
import autorouteArezki04 from '../assets/images/autoroute-arezki/autoroute-arezki-04.webp';
import autorouteArezki05 from '../assets/images/autoroute-arezki/autoroute-arezki-05.webp';
import autorouteArezki06 from '../assets/images/autoroute-arezki/autoroute-arezki-06.webp';
import autorouteArezki07 from '../assets/images/autoroute-arezki/autoroute-arezki-07.webp';
import autorouteArezki08 from '../assets/images/autoroute-arezki/autoroute-arezki-08.webp';
import autorouteArezki09 from '../assets/images/autoroute-arezki/autoroute-arezki-09.webp';
import autorouteArezki10 from '../assets/images/autoroute-arezki/autoroute-arezki-10.webp';
import autorouteArezki11 from '../assets/images/autoroute-arezki/autoroute-arezki-11.webp';

/** Marqueur des données restant à renseigner avant mise en ligne. */
export const PENDING_VALUE = '[à compléter]';

/** Indique si une donnée a été renseignée (ni vide, ni placeholder). */
export const isProvided = (value: string | null | undefined): boolean => {
  const trimmed = (value ?? '').trim();
  return trimmed.length > 0 && !trimmed.includes(PENDING_VALUE);
};

export const COMPANY_INFO = {
  name: 'EDC — Entreprise Dia Construction',
  legalName: 'Entreprise Dia Construction',
  shortName: 'EDC',
  tagline: 'Construire avec précision. Bâtir pour durer.',
  subtitle:
    'De l’étude à la livraison, EDC construit des bâtiments et des infrastructures durables au Sénégal. Une équipe expérimentée, des délais tenus, un chantier suivi de bout en bout.',
  domains: 'Bâtiment • Génie civil • Travaux publics',
  phone: '+221 77 710 95 05',
  phoneRaw: '+221777109505',
  email: 'contact@edc.sn',
  emailDevis: 'commercial@edc.sn',
  address: 'Mbour, Saly Carrefour, commune de Saly Portudal, Thiès',
  country: 'Sénégal',
  nineA: '010809666',
  rccm: 'SN MBR 2023 A 3538',
  director: 'Serigne Dia',
  host: 'SENE MULTIMEDIA Suarl (dakarweb.net), Ouest Foire Cité Khandar Lot 19, Dakar',
  whatsapp: '+221 77 710 95 05',
  whatsappRaw: '221777109505',
};

export const CONTACT_STATUS = {
  phone: isProvided(COMPANY_INFO.phone),
  email: isProvided(COMPANY_INFO.email),
  emailDevis: isProvided(COMPANY_INFO.emailDevis),
  address: isProvided(COMPANY_INFO.address),
  whatsapp: isProvided(COMPANY_INFO.whatsapp),
} as const;

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'CONSTRUCTION DE BÂTIMENTS',
    shortDesc: 'Des bâtiments solides et conformes, du gros œuvre aux finitions.',
    fullDesc:
      'Nous réalisons vos bâtiments résidentiels, tertiaires et commerciaux, du gros œuvre aux finitions. Chaque étape est contrôlée sur le terrain pour garantir la solidité de l’ouvrage et le respect de vos plans.',
    interventions: [
      'Gros œuvre et maçonnerie générale',
      'Ouvrages en béton armé banché et préfabriqué',
      'Bâtiments résidentiels et immeubles collectifs',
      'Locaux tertiaires et bâtiments commerciaux',
    ],
  },
  {
    number: '02',
    title: 'GÉNIE CIVIL',
    shortDesc: 'Des ouvrages techniques et des fondations réalisés avec précision.',
    fullDesc:
      'Fondations, ouvrages d’art et structures porteuses : nous intervenons sur les ouvrages qui demandent méthode et précision, dans le respect des normes d’ingénierie.',
    interventions: [
      'Fondations profondes, radiers et semelles armées',
      'Ouvrages d’art et structures hydrauliques',
      'Murs de soutènement et stabilisation de terrains',
      'Dallages industriels à forte charge',
    ],
  },
  {
    number: '03',
    title: 'TRAVAUX PUBLICS',
    shortDesc: 'Voiries, réseaux et aménagements d’infrastructures.',
    fullDesc:
      'Nous réalisons des infrastructures publiques et privées : voiries, drainage, plateformes. Nos moyens matériels et notre organisation s’adaptent aux contraintes du terrain et à vos délais.',
    interventions: [
      'Aménagement de voiries urbaines et interurbaines',
      'Infrastructures de drainage et gestion pluviale',
      'Plateformes logistiques et zones d’activités',
      'Travaux de raccordement technique',
    ],
  },
  {
    number: '04',
    title: 'TERRASSEMENT & VRD',
    shortDesc: 'Préparation des terrains, réseaux et aménagements extérieurs.',
    fullDesc:
      'Terrassement, viabilisation et pose des réseaux (assainissement, eau, électricité, télécoms). Nous préparons votre terrain et l’amenons aux normes, prêt à accueillir votre projet.',
    interventions: [
      'Déblais, remblais et nivellement géométrique',
      'Réseaux d’assainissement et évacuation des eaux',
      'Adduction d’eau potable (AEP) et réseaux secs',
      'Voiries et accès lourds de chantier',
    ],
  },
  {
    number: '05',
    title: 'RÉNOVATION & RÉHABILITATION',
    shortDesc: 'Redonner vie à vos bâtiments existants.',
    fullDesc:
      'Diagnostic, confortement et remise aux normes de bâtiments existants. Nous restructurons et modernisons vos espaces pour prolonger la vie de votre patrimoine.',
    interventions: [
      'Renforcement et consolidation structurelle',
      'Reprise en sous-œuvre et réfection des planchers',
      'Réhabilitation de façades et isolation extérieure',
      'Modernisation intérieure et réagencement spatial',
    ],
  },
  {
    number: '06',
    title: 'AMÉNAGEMENT',
    shortDesc: 'Des aménagements extérieurs adaptés à votre site.',
    fullDesc:
      'Aménagement des abords : pavage, clôtures, esplanades et espaces extérieurs. Des finitions soignées, pensées pour votre usage et le climat local.',
    interventions: [
      'Pavage technique et dallage extérieur',
      'Clôtures périphériques et portails sécurisés',
      'Espaces d’accueil et aires de stationnement',
      'Aménagements paysagers et circulations piétonnes',
    ],
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Ensemble Résidentiel & Mixte',
    category: 'Bâtiment',
    location: 'Dakar',
    image: buildingImg,
    alt: 'Projet de construction de bâtiment résidentiel et mixte à Dakar',
    scope: 'Gros œuvre en béton armé, élévation des structures et brise-soleil intégrés.',
    executionNote: 'Un exemple représentatif de nos programmes résidentiels et tertiaires.',
    specs: {
      programme: 'Bâtiment collectif R+5 & espaces tertiaires',
      structure: 'Béton armé précontraint et maçonnerie pleine',
      phasage: 'Étude d’exécution, terrassement, gros œuvre & finitions',
    },
  },
  {
    id: 'proj-02',
    title: 'Ouvrage de Travaux Publics & Plateforme VRD',
    category: 'Travaux Publics',
    location: 'Sénégal',
    image: autoroutePfo03,
    alt: 'Chantier de travaux publics et plateforme VRD sur un axe autoroutier au Sénégal',
    scope: 'Fondations spéciales, terrassements et réseaux de drainage.',
    executionNote: 'Un ouvrage technique conçu pour la résistance et la durabilité.',
    specs: {
      programme: 'Plateforme technique & infrastructure d’accès',
      structure: 'Semelles filantes renforcées, radiers et buses béton',
      phasage: 'Topographie, terrassement lourd, compactage & réseaux',
    },
  },
  {
    id: 'proj-03',
    title: 'Complexe Tertiaire & Aménagements Minéraux',
    category: 'VRD & Aménagements',
    location: 'Dakar',
    image: amenagementImg,
    alt: 'Aménagement extérieur et façade contemporaine pour complexe tertiaire',
    scope: 'Esplanade pavée, voiries légères, caniveaux et auvent d’accès.',
    executionNote: 'Aménagement des abords et finitions extérieures soignées.',
    specs: {
      programme: 'Esplanade d’accueil & voirie d’accès tertiaire',
      structure: 'Pavés autobloquants haute résistance & caniveau fente',
      phasage: 'Décapage, empierrement, pose mécanique & raccordements',
    },
  },
  {
    id: 'proj-04',
    title: 'Autoroute Dakar–Saint-Louis (PFO Sénégal)',
    category: 'Travaux Publics',
    location: 'Dakar – Saint-Louis',
    image: autoroutePfo01,
    alt: 'Chantier de l’autoroute Dakar–Saint-Louis réalisé avec PFO Sénégal',
    scope: 'Terrassements et travaux d’infrastructure sur l’autoroute Dakar–Saint-Louis, en collaboration avec PFO Sénégal.',
    executionNote: 'Une opération d’envergure menée sur l’axe autoroutier Dakar–Saint-Louis.',
    gallery: [autoroutePfo01, autoroutePfo02, autoroutePfo03, autoroutePfo04, autoroutePfo05],
    specs: {
      programme: 'Infrastructure autoroutière — travaux de terrassement et de voirie',
      structure: 'Terrassement massif, couches de chaussée et ouvrages hydrauliques',
      phasage: 'Installation de chantier, terrassement, corps de chaussée & finitions',
    },
  },
  {
    id: 'proj-05',
    title: 'Chantier autoroute Dakar–Saint-Louis (Arezki)',
    category: 'Travaux Publics',
    location: 'Dakar – Saint-Louis',
    image: autorouteArezki05,
    alt: 'Chantier autoroutier Dakar–Saint-Louis mené avec Arezki',
    scope: 'Travaux de terrassement et d’infrastructure menés sur le chantier autoroutier Dakar–Saint-Louis avec Arezki.',
    executionNote: 'Un chantier d’infrastructure suivi de bout en bout, au plus près du terrain.',
    gallery: [
      autorouteArezki01,
      autorouteArezki02,
      autorouteArezki03,
      autorouteArezki04,
      autorouteArezki05,
      autorouteArezki06,
      autorouteArezki07,
      autorouteArezki08,
      autorouteArezki09,
      autorouteArezki10,
      autorouteArezki11,
    ],
    specs: {
      programme: 'Chantier autoroutier — terrassement et infrastructures',
      structure: 'Terrassements, ouvrages en béton et réseaux techniques',
      phasage: 'Préparation, exécution des travaux & contrôle qualité',
    },
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'ÉCOUTER',
    description: 'Nous écoutons vos besoins, vos contraintes et vos objectifs.',
    deliverable: 'Récapitulatif de vos besoins',
  },
  {
    number: '02',
    title: 'PLANIFIER',
    description: 'Nous organisons les étapes et anticipons les contraintes techniques.',
    deliverable: 'Planning et étude d’exécution',
  },
  {
    number: '03',
    title: 'CONSTRUIRE',
    description: 'Nous construisons avec rigueur, selon vos plans et vos exigences.',
    deliverable: 'Chantier piloté par un encadrement dédié',
  },
  {
    number: '04',
    title: 'CONTRÔLER',
    description: 'Nous suivons la qualité, les délais et l’avancement des travaux.',
    deliverable: 'Points de contrôle qualité & comptes-rendus',
  },
  {
    number: '05',
    title: 'LIVRER',
    description: 'Nous finalisons le projet avec attention portée aux détails.',
    deliverable: 'Réception soignée & levée des réserves',
  },
];

export const STATS_LIST = [
  { value: 'Bâtiment & TP', label: 'Savoir-faire' },
  { value: 'Thiès & Dakar', label: "Zones d'intervention" },
  { value: 'Interlocuteur dédié', label: 'Suivi de chantier' },
  { value: 'Sur mesure', label: 'Projets & devis' },
];

export const VALUES_LIST = [
  {
    label: 'RIGUEUR',
    description: 'Une attention portée aux détails et à la qualité d’exécution.',
    metric: 'Exécution',
    sub: 'Des finitions soignées et le respect strict de vos plans.',
  },
  {
    label: 'FIABILITÉ',
    description: 'Une organisation qui tient ses engagements.',
    metric: 'Méthode',
    sub: 'Cahier des charges et plannings respectés.',
  },
  {
    label: 'QUALITÉ',
    description: 'Des exigences élevées à chaque étape de réalisation.',
    metric: 'Matériaux',
    sub: 'Une sélection rigoureuse des matériaux (acier, granulats, ciment certifié).',
  },
  {
    label: 'PROXIMITÉ',
    description: 'Une relation directe et transparente avec les clients et partenaires.',
    metric: 'Dialogue',
    sub: 'Un interlocuteur unique, une information claire et une vraie réactivité.',
  },
];
