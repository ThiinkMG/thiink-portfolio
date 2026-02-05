// ─────────────────────────────────────────────────────────────────────────────
// CMS DATA LAYER
// Server-only module - reads content from JSON files in /content directory
// Compatible with TinaCMS schema - will use Tina API when connected
// ─────────────────────────────────────────────────────────────────────────────

import "server-only";

import fs from "fs";
import path from "path";
import type {
  Project,
  Testimonial,
  HomepageContent,
  ServicesContent,
  ProcessContent,
  SiteSettings,
  AboutContent,
} from "./types";

// Re-export types for convenience
export type {
  Project,
  ProjectImage,
  ProjectVideo,
  ProjectSection,
  Testimonial,
  HomepageContent,
  ServicesContent,
  ProcessContent,
  SiteSettings,
  AboutContent,
} from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT DIRECTORY PATH
// ─────────────────────────────────────────────────────────────────────────────

const CONTENT_DIR = path.join(process.cwd(), "content");

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Read JSON file
// ─────────────────────────────────────────────────────────────────────────────

function readJsonFile<T>(filePath: string): T | null {
  try {
    const fullPath = path.join(CONTENT_DIR, filePath);
    const content = fs.readFileSync(fullPath, "utf-8");
    return JSON.parse(content) as T;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
}

function readAllJsonFiles<T>(directory: string): T[] {
  try {
    const dirPath = path.join(CONTENT_DIR, directory);
    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".json"));
    return files
      .map((file) => readJsonFile<T>(path.join(directory, file)))
      .filter((item): item is T => item !== null);
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
    return [];
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

export function getProjects(): Project[] {
  return readAllJsonFiles<Project>("projects");
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project {
  const projects = getProjects();
  const current = projects.find((p) => p.slug === currentSlug);
  if (current) {
    return projects.find((p) => p.slug === current.nextProject) || projects[0];
  }
  return projects[0];
}

export function getProjectSlugs(): string[] {
  return getProjects().map((p) => p.slug);
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

export function getTestimonials(): Testimonial[] {
  const testimonials = readAllJsonFiles<Testimonial>("testimonials");
  return testimonials.sort((a, b) => a.order - b.order);
}

// ─────────────────────────────────────────────────────────────────────────────
// HOMEPAGE CONTENT
// ─────────────────────────────────────────────────────────────────────────────

export function getHomepageContent(): HomepageContent | null {
  return readJsonFile<HomepageContent>("homepage/index.json");
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES CONTENT
// ─────────────────────────────────────────────────────────────────────────────

export function getServicesContent(): ServicesContent | null {
  return readJsonFile<ServicesContent>("services/index.json");
}

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS CONTENT
// ─────────────────────────────────────────────────────────────────────────────

export function getProcessContent(): ProcessContent | null {
  return readJsonFile<ProcessContent>("process/index.json");
}

// ─────────────────────────────────────────────────────────────────────────────
// SITE SETTINGS
// ─────────────────────────────────────────────────────────────────────────────

export function getSiteSettings(): SiteSettings | null {
  return readJsonFile<SiteSettings>("settings/index.json");
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT CONTENT
// ─────────────────────────────────────────────────────────────────────────────

export function getAboutContent(): AboutContent | null {
  return readJsonFile<AboutContent>("about/index.json");
}
