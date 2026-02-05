import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Tina Cloud credentials - get from tina.io when ready for production
  // For local development, run: npm run dev (uses --local flag)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // ─────────────────────────────────────────────────────────────────────────
      // PROJECTS COLLECTION
      // Portfolio case studies with full STAR format
      // ─────────────────────────────────────────────────────────────────────────
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "json",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return values?.slug?.toLowerCase().replace(/ /g, "-") || "";
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
            description: "URL-friendly identifier (e.g., 'kngdm', 'neo-sophia')",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              "Brand Identity",
              "App Design",
              "Event Branding",
              "Entertainment",
              "Podcast Branding",
              "Music Packaging",
              "Character Design",
            ],
          },
          {
            type: "string",
            name: "client",
            label: "Client Name",
            required: true,
          },
          {
            type: "string",
            name: "year",
            label: "Year",
            required: true,
          },
          {
            type: "string",
            name: "duration",
            label: "Duration",
            required: true,
            description: "e.g., '8 weeks', '3 months'",
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: true,
          },
          {
            type: "image",
            name: "thumbnailImage",
            label: "Thumbnail Image",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          // STAR Format
          {
            type: "string",
            name: "situation",
            label: "Situation",
            required: true,
            ui: {
              component: "textarea",
            },
            description: "The client's challenge or context",
          },
          {
            type: "string",
            name: "task",
            label: "Task",
            required: true,
            ui: {
              component: "textarea",
            },
            description: "What needed to be accomplished",
          },
          {
            type: "object",
            name: "action",
            label: "Action Steps",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Step Title",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "marginalia",
                label: "Marginalia (Curator's Note)",
                ui: {
                  component: "textarea",
                },
                description: "Optional side note or interesting detail",
              },
            ],
          },
          {
            type: "string",
            name: "result",
            label: "Result",
            required: true,
            ui: {
              component: "textarea",
            },
            description: "Measurable outcomes and impact",
          },
          {
            type: "string",
            name: "deliverables",
            label: "Deliverables",
            list: true,
          },
          // Gallery
          {
            type: "object",
            name: "gallery",
            label: "Gallery",
            list: true,
            fields: [
              {
                type: "image",
                name: "src",
                label: "Image",
                required: true,
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                required: true,
              },
              {
                type: "string",
                name: "caption",
                label: "Caption",
              },
            ],
          },
          // Videos
          {
            type: "object",
            name: "videos",
            label: "Videos",
            list: true,
            fields: [
              {
                type: "string",
                name: "src",
                label: "Video URL",
                required: true,
                description: "YouTube embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "image",
                name: "thumbnail",
                label: "Thumbnail",
              },
              {
                type: "string",
                name: "warning",
                label: "Content Warning",
                description: "Optional warning for mature content",
              },
            ],
          },
          // Metrics
          {
            type: "object",
            name: "metrics",
            label: "Metrics",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "value",
                label: "Value",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "colors",
            label: "Brand Colors",
            list: true,
            description: "Hex color codes used in the project",
          },
          {
            type: "string",
            name: "nextProject",
            label: "Next Project Slug",
            required: true,
            description: "Slug of the next project in the flow",
          },
        ],
      },

      // ─────────────────────────────────────────────────────────────────────────
      // TESTIMONIALS COLLECTION
      // Client quotes for the testimonials section
      // ─────────────────────────────────────────────────────────────────────────
      {
        name: "testimonial",
        label: "Testimonials",
        path: "content/testimonials",
        format: "json",
        fields: [
          {
            type: "string",
            name: "quote",
            label: "Quote",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "author",
            label: "Author Name",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Author Title/Role",
            required: true,
          },
          {
            type: "string",
            name: "project",
            label: "Project Type",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            required: true,
            description: "Lower numbers appear first",
          },
        ],
      },

      // ─────────────────────────────────────────────────────────────────────────
      // HOMEPAGE COLLECTION
      // All homepage editable content in one place
      // ─────────────────────────────────────────────────────────────────────────
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          // Hero Section
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Section Label",
                description: "Small text above the title (e.g., 'Design Excellence')",
              },
              {
                type: "string",
                name: "titleLine1",
                label: "Title Line 1",
              },
              {
                type: "string",
                name: "titleLine2",
                label: "Title Line 2",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "primaryCta",
                label: "Primary CTA Text",
              },
              {
                type: "string",
                name: "secondaryCta",
                label: "Secondary CTA Text",
              },
            ],
          },
          // Stats
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              {
                type: "string",
                name: "value",
                label: "Value",
                required: true,
              },
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
            ],
          },
          // Trust Logos
          {
            type: "string",
            name: "trustLogos",
            label: "Trust Logos",
            list: true,
            description: "Company names for the trust marquee",
          },
          // CTA Band
          {
            type: "object",
            name: "ctaBand",
            label: "CTA Band",
            fields: [
              {
                type: "string",
                name: "headline",
                label: "Headline",
              },
              {
                type: "string",
                name: "subtext",
                label: "Subtext",
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
              },
              {
                type: "string",
                name: "trustLine",
                label: "Trust Line",
                description: "Text below the button (e.g., 'Trusted by...')",
              },
            ],
          },
        ],
      },

      // ─────────────────────────────────────────────────────────────────────────
      // SERVICES COLLECTION
      // Service offerings displayed on homepage
      // ─────────────────────────────────────────────────────────────────────────
      {
        name: "services",
        label: "Services",
        path: "content/services",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionLabel",
            label: "Section Label",
          },
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Name",
                description: "Lucide icon name (e.g., 'Palette', 'Layout', 'Film')",
              },
            ],
          },
          {
            type: "object",
            name: "serviceCards",
            label: "Service Cards",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Name",
                description: "Lucide icon name",
              },
            ],
          },
        ],
      },

      // ─────────────────────────────────────────────────────────────────────────
      // PROCESS COLLECTION
      // Process timeline steps
      // ─────────────────────────────────────────────────────────────────────────
      {
        name: "process",
        label: "Process",
        path: "content/process",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "sectionLabel",
            label: "Section Label",
          },
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
          },
          {
            type: "object",
            name: "steps",
            label: "Process Steps",
            list: true,
            fields: [
              {
                type: "string",
                name: "numeral",
                label: "Roman Numeral",
                required: true,
                description: "e.g., I, II, III, IV",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "marginalia",
                label: "Marginalia",
                description: "Optional curator's note",
              },
            ],
          },
        ],
      },

      // ─────────────────────────────────────────────────────────────────────────
      // SITE SETTINGS COLLECTION
      // Global site configuration
      // ─────────────────────────────────────────────────────────────────────────
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Info",
            fields: [
              {
                type: "string",
                name: "email",
                label: "Email",
              },
              {
                type: "string",
                name: "phone",
                label: "Phone",
              },
              {
                type: "string",
                name: "website",
                label: "Website URL",
              },
              {
                type: "string",
                name: "newProjectForm",
                label: "New Project Form URL",
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Links",
            fields: [
              {
                type: "string",
                name: "instagram",
                label: "Instagram URL",
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL",
              },
              {
                type: "string",
                name: "twitter",
                label: "Twitter/X URL",
              },
              {
                type: "string",
                name: "youtube",
                label: "YouTube URL",
              },
            ],
          },
        ],
      },
    ],
  },
});
