// ─────────────────────────────────────────────────────────────────────────────
// CONTENT TYPES
// Shared types for CMS content - can be imported by client and server components
// ─────────────────────────────────────────────────────────────────────────────

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectVideo {
  src: string;
  title: string;
  description?: string;
  thumbnail?: string;
  warning?: string;
}

export interface ProjectSection {
  title: string;
  content: string;
  marginalia?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  heroImage: string;
  thumbnailImage: string;
  description: string;
  situation: string;
  task: string;
  action: ProjectSection[];
  result: string;
  deliverables: string[];
  gallery: ProjectImage[];
  videos?: ProjectVideo[];
  metrics?: { label: string; value: string }[];
  colors?: string[];
  nextProject: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  project: string;
  order: number;
}

export interface HomepageContent {
  hero: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  heroBackground?: {
    image?: string;
    opacity?: number;
  };
  stats: { value: string; label: string }[];
  trustMarquee?: {
    title?: string;
    displayMode?: "text" | "image";
    logos?: { name: string; image?: string }[];
  };
  // Legacy support for old trustLogos array
  trustLogos?: string[];
  ctaBand: {
    headline: string;
    subtext: string;
    buttonText: string;
    trustLine: string;
    backgroundImage?: string;
    backgroundOpacity?: number;
  };
  featuredWork?: FeaturedWorkConfig;
}

export interface FeaturedWorkConfig {
  sectionLabel?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  featuredProjectSlug?: string;
  featuredDescription?: string;
  gridProjectSlugs?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export interface ServicesContent {
  sectionLabel: string;
  sectionTitle: string;
  services: {
    title: string;
    description: string;
    icon: string;
    label?: string;
    image?: string;
    ctaText?: string;
    ctaHref?: string;
  }[];
  serviceCards: {
    title: string;
    description: string;
    expandedDescription?: string;
    icon: string;
  }[];
}

export interface ProcessContent {
  sectionLabel: string;
  sectionTitle: string;
  steps: {
    numeral: string;
    title: string;
    subtitle?: string;
    description: string;
    details?: string[];
    marginalia?: string;
  }[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    website: string;
    newProjectForm: string;
  };
  social: {
    instagram: string;
    linkedin: string;
    twitter: string;
    youtube: string;
  };
  navbar?: {
    logo: string;
    ctaText: string;
    ctaLink: string;
    links: NavLink[];
  };
  footer?: {
    tagline: string;
    copyright: string;
    serviceLinks: NavLink[];
    exploreLinks: NavLink[];
  };
}

export interface AboutContent {
  hero: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    backgroundImage?: string;
    backgroundOpacity?: number;
  };
  vision: {
    label: string;
    title: string;
    paragraphs: string[];
    sideQuote: string;
    sideNote: string;
  };
  mission: {
    label: string;
    title: string;
    description: string;
  };
  stats: { value: string; label: string }[];
  services: {
    label: string;
    title: string;
    items: { title: string; description: string }[];
  };
  cta: {
    label: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}
