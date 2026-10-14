export interface ProjectItem {
  id: string;
  title: string;
  category: 'Bâtiment' | 'Travaux Publics' | 'VRD & Aménagements';
  location: string;
  image: string;
  alt: string;
  scope: string;
  executionNote: string;
  gallery?: string[];
  specs: {
    programme: string;
    structure: string;
    phasage: string;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  interventions: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}
