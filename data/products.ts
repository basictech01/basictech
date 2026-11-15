import type { LucideIcon } from 'lucide-react';
import { Search, MessageSquare, TrendingUp, Wallet, Package } from 'lucide-react';

// 'deployed' = proven in client engagements and tailored per client, rather than self-serve.
export type ProductStatus = 'building' | 'beta' | 'coming-soon' | 'live' | 'deployed';

export interface Product {
  slug: string;
  name: string;
  tagline: string;       // one-line value proposition
  description: string;
  status: ProductStatus;
  category: string;      // e.g. 'AI', 'DevTools', 'Productivity'
  cover?: string;
  url?: string;          // present when beta/live
  appStoreUrl?: string;  // iOS App Store link
  icon?: LucideIcon;     // shown when there is no cover image
  outcome?: string;      // business result, shown as a footer line
  caseStudyPath?: string; // internal /work/:slug link
  usedBy?: { name: string; url?: string }[];
}

export const STATUS_LABELS: Record<ProductStatus, string> = {
  building: 'In Development',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
  live: 'Live',
  deployed: 'Client-proven',
};

export const STATUS_STYLES: Record<ProductStatus, string> = {
  building: 'bg-amber-50 text-amber-700 border-amber-200',
  beta: 'bg-blue-50 text-brand-blue border-brand-blue/20',
  'coming-soon': 'bg-slate-100 text-slate-600 border-slate-200',
  live: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  deployed: 'bg-blue-50 text-brand-blue border-brand-blue/20',
};

export const PRODUCTS: Product[] = [
  {
    slug: 'uniun',
    name: 'Uniun',
    tagline: 'The data layer for AI-first companies.',
    description:
      'A knowledge graph for your organisation, built on Nostr. Internal communication — a Slack-like workspace evolving towards a Telegram-style experience — feeds a graph that your people and your AI agents share.',
    status: 'live',
    category: 'Data Layer',
    cover: '/uniun-logo.png',
    url: 'https://www.uniun.in/',
    appStoreUrl: 'https://apps.apple.com/in/app/uniun/id6778077321',
  },
  {
    slug: 'searchex',
    name: 'Searchex',
    tagline: 'Search that understands India.',
    description:
      'Custom search platforms tuned to your industry — built for Indian dialects, transliteration, Hinglish, and the quirks of how the subcontinent actually searches. We learn your domain, then build with you.',
    status: 'deployed',
    category: 'Search',
    icon: Search,
    outcome: 'More relevant results → more clicks → more revenue.',
  },
  {
    slug: 'custom-chatbots',
    name: 'Custom Chatbots',
    tagline: 'Assistants that know your business.',
    description:
      'Chatbots grounded in your data, workflows, and tone of voice — for support, sales, and internal teams — across the languages your customers speak.',
    status: 'deployed',
    category: 'Conversational AI',
    icon: MessageSquare,
    outcome: 'Faster answers, fewer tickets, happier customers.',
  },
  {
    slug: 'demand-forecasting',
    name: 'Demand Forecasting',
    tagline: 'Forecasts that know about Diwali.',
    description:
      'Demand forecasting models proven with our clients and pre-tuned for India — festivals, regional holidays, monsoons, and sale seasons — adapted to your products.',
    status: 'deployed',
    category: 'Forecasting',
    icon: TrendingUp,
    outcome: 'Less stock-out, less waste, sharper planning.',
  },
  {
    slug: 'payroll-studio',
    name: 'Payroll Studio',
    tagline: 'HR & payroll built for Indian rules.',
    description:
      'Full-cycle payroll and HR for Indian businesses — PF, ESIC, PT and TDS auto-calculated, biometric attendance sync, an employee self-service portal, and government-format payslips and reports.',
    status: 'deployed',
    category: 'HR & Payroll',
    icon: Wallet,
    outcome: 'Compliant payroll every cycle, without the spreadsheets.',
    caseStudyPath: '/work/payroll-studio',
    usedBy: [
      { name: 'Hetvi Lifesciences Pvt Ltd', url: 'https://hetvipharma.com/' },
      { name: 'Gopi Steels' },
    ],
  },
  {
    slug: 'inventory-management',
    name: 'Inventory Management',
    tagline: 'Real-time stock across every location.',
    description:
      'A cross-platform inventory system with multi-location stock, barcode scanning, batch and expiry tracking, role-based access, audit logs, and analytics — hardened to keep working on unreliable devices and networks.',
    status: 'deployed',
    category: 'Operations',
    icon: Package,
    outcome: 'Accurate stock, fewer write-offs, a full audit trail.',
    caseStudyPath: '/work/inventory-management',
    usedBy: [{ name: 'Gopi Steels' }],
  },
];
