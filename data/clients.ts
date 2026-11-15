export interface Client {
  name: string;
  industry: string;
  location?: string;      // shown only when confirmed
  logo?: string;          // path under /public; initials are shown when absent
  work?: string;          // what we built for them, shown only when confirmed
  caseStudyPath?: string; // internal /work/:slug link, preferred over url
  url?: string;           // external website
}

export const CLIENTS: Client[] = [
  {
    name: 'Quality Care Clinics',
    industry: 'Healthcare — Dental',
    location: 'Dubai, UAE',
    logo: '/clients/quality-care-clinics.png',
    work: 'Multi-clinic admin console',
    caseStudyPath: '/work/quality-care-clinics',
  },
  {
    name: 'Wiseflow AI',
    industry: 'AI Automation',
    location: 'Europe',
    logo: '/clients/wiseflowai.svg',
    url: 'https://wiseflowai.eu/',
  },
  {
    name: 'HA Group',
    industry: 'Business Setup & Consulting',
    location: 'Dubai, UAE',
    logo: '/clients/ha-group.webp',
    work: 'Brand website & SEO',
    caseStudyPath: '/work/ha-group',
  },
  {
    name: 'Hetvi Lifesciences',
    industry: 'Pharmaceuticals',
    location: 'Ahmedabad, India',
    logo: '/clients/hetvi.webp',
    work: 'Payroll Studio',
    url: 'https://hetvipharma.com/',
  },
  {
    name: 'Gopi Steels',
    industry: 'Manufacturing',
    location: 'Ahmedabad, India',
    logo: '/clients/gopi-steels.svg',
    work: 'Payroll Studio · Inventory Management',
  },
];
