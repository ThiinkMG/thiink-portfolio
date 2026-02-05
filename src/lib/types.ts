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
  stats: { value: string; label: string }[];
  trustLogos: string[];
  ctaBand: {
    headline: string;
    subtext: string;
    buttonText: string;
    trustLine: string;
  };
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
}
