// ─────────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// This file exports types and is the legacy entry point
// For server-side functions, import from "./cms" directly
// Edit content via /admin or directly in /content/*.json files
// ─────────────────────────────────────────────────────────────────────────────

// Re-export all types from types file (can be used in client and server)
export type {
    ProjectImage,
    ProjectVideo,
    ProjectSection,
    Project,
    Testimonial,
    HomepageContent,
    ServicesContent,
    ProcessContent,
    SiteSettings,
} from "./types";
