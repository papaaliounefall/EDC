import { ApproachStep, ProjectItem, ServiceItem } from '../types';
import buildingImg from '../assets/images/edc_project_building_1791383501224.webp';
import civilImg from '../assets/images/edc_project_civil_1791383512872.webp';
import amenagementImg from '../assets/images/edc_project_amenagement_1791383524028.webp';

export const COMPANY_INFO = {
  name: 'EDC — Entreprise Dia Construction',
  shortName: 'EDC',
  tagline: 'Construire avec précision. Bâtir pour durer.',
  subtitle:
    'EDC accompagne vos projets de construction et de travaux publics avec une approche fondée sur la qualité, la rigueur et la maîtrise de l’exécution.',
  domains: 'Bâtiment • Génie civil • Travaux publics',
  phone: '[à compléter]',
  phoneRaw: '+221000000000',
  email: '[à compléter]',
  emailPlaceholder: 'contact@edc-construction.sn',
  address: '[à compléter], Dakar',
  country: 'Sénégal',
  whatsapp: '[à compléter]',
  whatsappRaw: '221000000000',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'CONSTRUCTION DE BÂTIMENTS',
    shortDesc: 'Construction et réalisation de bâtiments adaptés aux exigences du projet.',
    fullDesc:
      'Prise en charge intégrale des ouvrages résidentiels, tertiaires et commerciaux. De l’élévation du gros œuvre jusqu’au clos-couvert et finitions techniques, chaque phase fait l’objet d’un contrôle rigoureux de mise en œuvre.',
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
    shortDesc: 'Travaux et ouvrages nécessitant précision technique et maîtrise de l’exécution.',
    fullDesc:
      'Réalisation d’infrastructures techniques, d’ouvrages d’art, de fondations spéciales et de structures porteuses exigeant une rigueur absolue dans les calculs de charge et le respect des normes d’ingénierie.',
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
    shortDesc: 'Interventions liées aux infrastructures et aux aménagements.',
    fullDesc:
      'Exécution de chantiers d’infrastructures d’intérêt public et privé. Coordination des moyens matériels lourds pour répondre aux contraintes du terrain et aux exigences des donneurs d’ordre.',
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
      'Travaux préalables de nivellement, décapage et viabilisation des parcelles. Pose des réseaux d’assainissement, d’eau potable, d’électricité et de télécommunication selon les normes en vigueur.',
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
    shortDesc: 'Transformation, modernisation et remise en état des ouvrages existants.',
    fullDesc:
      'Diagnostic structurel, confortement de bâtis existants et remise aux normes architecturales et thermiques. Restructuration complète des espaces pour prolonger la pérennité du patrimoine bâti.',
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
    shortDesc: "Solutions d'aménagement adaptées aux besoins du site et du projet.",
    fullDesc:
      'Aménagement architectural d’espaces extérieurs, cours pavées, esplanades de bureaux et clôtures techniques. Intégration paysagère et minérale soignée respectant le contexte climatique local.',
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
    scope: 'Gros œuvre en béton armé, élévation structurelle et brise-soleil architecturaux intégrés.',
    executionNote: 'Typologie de référence pour programme résidentiel et tertiaire EDC.',
    specs: {
      programme: 'Bâtiment collectif R+5 & espaces tertiaires',
      structure: 'Béton armé précontraint et maçonnerie pleine',
      phasage: 'Étude d’exécution, terrassement, gros œuvre & finitions',
    },
  },
  {
    id: 'proj-02',
    title: 'Ouvrage de Génie Civil & Plateforme VRD',
    category: 'Génie Civil',
    location: 'Sénégal',
    image: civilImg,
    alt: 'Chantier de génie civil et fondations d’infrastructure au Sénégal',
    scope: 'Fondations spéciales, terrassements massifs et réseaux hydrauliques de drainage.',
    executionNote: 'Ouvrage technique soumis aux exigences de capacité portante et de durabilité.',
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
    scope: 'Esplanade pavée, voiries légères, caniveaux techniques et auvent d’accès contemporain.',
    executionNote: 'Exécution des abords et finitions extérieures de haute tenue.',
    specs: {
      programme: 'Esplanade d’accueil & voirie d’accès tertiaire',
      structure: 'Pavés autobloquants haute résistance & caniveau fente',
      phasage: 'Décapage, empierrement, pose mécanique & raccordements',
    },
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'ÉCOUTER',
    description: 'Comprendre les besoins, les contraintes et les objectifs du projet.',
    deliverable: 'Cahier des charges & revue des attentes initiales',
  },
  {
    number: '02',
    title: 'PLANIFIER',
    description: 'Structurer les différentes phases et anticiper les contraintes techniques.',
    deliverable: 'Planning prévisionnel & étude d’exécution',
  },
  {
    number: '03',
    title: 'CONSTRUIRE',
    description: 'Assurer une exécution rigoureuse conformément aux exigences du projet.',
    deliverable: 'Chantier piloté par un encadrement permanent',
  },
  {
    number: '04',
    title: 'CONTRÔLER',
    description: 'Suivre la qualité, les délais et l’avancement des travaux.',
    deliverable: 'Points d’arrêt qualité & rapports réguliers',
  },
  {
    number: '05',
    title: 'LIVRER',
    description: 'Finaliser le projet avec attention portée aux détails.',
    deliverable: 'Réception soignée & levée des réserves',
  },
];

export const STATS_LIST = [
  { value: 'XX+', label: "Années d'expérience" },
  { value: 'XX', label: 'Chantiers livrés' },
  { value: 'XX X00', label: 'm² construits' },
  { value: 'XX', label: 'Clients & partenaires' },
];

export const VALUES_LIST = [
  {
    label: 'RIGUEUR',
    description: 'Une attention portée aux détails et à la qualité d’exécution.',
    metric: 'Exécution',
    sub: 'Tolérances millimétriques et conformité aux plans d’architecte.',
  },
  {
    label: 'FIABILITÉ',
    description: 'Une organisation pensée pour respecter les engagements du projet.',
    metric: 'Méthode',
    sub: 'Respect scrupuleux du cahier des charges et des plannings arrêtés.',
  },
  {
    label: 'QUALITÉ',
    description: 'Des exigences élevées à chaque étape de réalisation.',
    metric: 'Matériaux',
    sub: 'Sélection intransigeante des approvisionnements (acier, granulats, ciment certifié).',
  },
  {
    label: 'PROXIMITÉ',
    description: 'Une relation directe et transparente avec les clients et partenaires.',
    metric: 'Dialogue',
    sub: 'Interlocuteur unique dédié, reporting clair et réactivité sur le terrain.',
  },
];
