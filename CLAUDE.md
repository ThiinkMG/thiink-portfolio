# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Thiink Media Graphics portfolio website - a luxury design agency site with **"Digital Louvre"** aesthetic (Museum/Antiquity theme). Project is in active development with Phases 1-4 complete (Foundation, Components, Layouts, Homepage). Design specifications in AGENTS.md, `.agent/rules/`, and the master redesign guide at `_design_references/Museum_Redesign/WEBSITE_REDESIGN_MASTER.md`.

### Design Direction: Portfolio-First "Awe → Study"
- **Homepage**: Portfolio-first with rotating featured projects as hero background
- **Portfolio**: Gallery walk with "Artifact Cards" (framed, museum-style) - prominently featured
- **Case Studies**: Light "Reading Room" (Parchment backgrounds)
- **Philosophy**: Work speaks first, then services/process support the credibility

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (`framer-motion`)
- **Icons**: Lucide React (`lucide-react`)
- **Language**: TypeScript (strict typing, no `any`)

## Build Commands

Once project is initialized:
```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # Lint check
```

## Design System

### Color Palette (STRICT)
| Token | Hex | Usage |
|-------|-----|-------|
| Vantablack | `#050505` | Homepage hero (immersive dark) |
| Deep Obsidian | `#0A0A0A` | Primary background |
| Charcoal Slate | `#1A1A1A` | Cards, footer, elevated surfaces |
| Big Stone | `#1A2B42` | CTA bands, gradients |
| Aged Parchment | `#E3DCCB` | Case study backgrounds (light mode) |
| Ivory White | `#F5F5F0` | Primary text on dark |
| Platinum Gray | `#9CA3AF` | Secondary text |
| Ink | `#1F1A17` | Text on parchment |
| Gold Foil | `#D4AF37` | Primary accent |
| Marigold Gold | `#D4A855` | Brand gold, CTAs |
| Bronze Metallic | `#C9A050` | Hover states, secondary accent |
| Oxblood | `#4A0404` | Error states (use sparingly) |

### Typography: "The Lapidary & The Scribe"
| Usage | Font | Notes |
|-------|------|-------|
| **Display** | `Cinzel` | Roman authority, carved feel (replaces Josefin for heroes) |
| **Headlines** | `Cinzel` | Section titles, H1-H2 |
| **UI Labels** | `Cormorant SC` | Small caps for dates, metadata |
| **Body** | `EB Garamond` | Academic, highly legible |
| **Accents** | `Pinyon Script` | Curator's hand, marginalia |
| **CTAs** | `Outfit` | All-caps, modern contrast |

### Textures & Materiality
- Global noise overlay (3% opacity) on body
- Slate grain texture on dark cards
- Paper fiber texture on parchment sections

### Breakpoints
- Mobile: 375px (single column, stacked)
- Tablet: 768px (2-column bento)
- Laptop: 1024px (multi-column)
- Desktop: 1440px+ (full layout)

## Critical Accessibility Rules

**NEVER use white text on gold backgrounds** - fails WCAG contrast.

Primary buttons MUST use:
```tsx
className="bg-[#D4A855] text-[#242528]"  // Gold bg, Shark Black text
```

## Animation Guidelines

"Motion should whisper, not shout."

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple ease)
- Hover states: 150ms
- Modals: 200ms open, 150ms close
- Page transitions: 300-400ms

Use Framer Motion for React components. Key patterns:
- Staggered text reveals (0.05s delay per element)
- Parallax backgrounds (10-15% scroll speed)
- Magnetic buttons (spring physics)
- Grayscale-to-color hover on portfolio items

## Asset Sources

All imagery comes from `_design_references/Design Assets/`:
- `_design_references/Design Assets/Clients/` - Client project files with case studies
- `_design_references/Design Assets/Thiink MG Brand Assets/` - Logos, marble textures, philosopher imagery
- `_design_references/2025 Thiink Media Graphics Design portfolio/` - Portfolio reference materials

Never use generic placeholders. Use actual client work and brand assets.

### Asset Logs (REQUIRED REFERENCE)

Before building any component that requires images, videos, backgrounds, or assets:

| Log File | Contents |
|----------|----------|
| `_design_references/Design Assets/Thiink MG Brand Assets/IMAGE_LOG.md` | 221 brand assets (logos, textures, reliefs, backgrounds, **videos**) |
| `_design_references/Design Assets/Clients/CLIENT_ASSETS_LOG.md` | 284 client assets across 9 projects |

**Video Assets Available** (from IMAGE_LOG.md):
- Animated Greek goddess figure (MP4)
- Animated classical painting (MP4)
- Social media bas-relief animation (MP4)

Use for: Hero backgrounds, section transitions, loading states, hover effects

### Asset Integration Workflow

**ALWAYS follow this 3-step process when building components:**

1. **Analyze** - Determine what type of asset is optimal for the component (hero background, texture overlay, logo, mockup, **video background**, etc.)

2. **Search** - Reference the asset logs to find the best matching asset:
   - For brand elements → `IMAGE_LOG.md`
   - For portfolio/case studies → `CLIENT_ASSETS_LOG.md`
   - Check dimensions, format, and suggested use cases in the logs

3. **Integrate** - Use the real asset path instead of placeholders:
   ```tsx
   // ❌ WRONG - Generic placeholder
   <Image src="/placeholder.jpg" alt="Hero" />

   // ✅ CORRECT - Real asset from logs
   <Image src="/_design_references/Design Assets/Thiink MG Brand Assets/TMG - Roman Philosophers on gold bg.png" alt="Hero" />
   ```

See workflow `11-asset-integration.md` for detailed implementation guide.

## Page Architecture

### Homepage: "The Exhibition Hall" (Dark Mode) - Portfolio First
1. Navigation (sticky, frosted amber glassmorphism)
2. Hero (Rotating featured projects as background, portfolio thumbnails, work-focused CTAs)
3. Featured Work (Artifact Cards - moved up for portfolio focus)
4. Trust Marquee (partner logos)
5. Services (Zigzag layout with Artifact framing)
6. Process Timeline
7. Testimonials (rotating spotlight)
8. CTA Band (Big Stone)
9. Footer (Charcoal Slate, 4-column)

### Case Studies: "The Manuscript" (Light Mode)
- Transition from dark to parchment background
- Doubled headlines (shadow offset effect)
- Two-column editorial with drop caps
- Marginalia for curator's notes
- Brand showcase grid for deliverables

## UX Psychology

The site is a portfolio-first conversion funnel:
1. **Hook** (Hero) - Showcase best work immediately with rotating projects
2. **Proof** (Featured Work) - Full portfolio gallery right after hero
3. **Credibility** (Trust/Services) - What we do and who trusts us
4. **Trust** (Process/Testimonials) - How we work and client proof
5. **Ask** (CTA) - Clear next step

Case studies follow STAR format: Situation → Task → Action → Result

## Official Links

- Website: https://www.thiinkmediagraphics.com
- New Project Form: https://www.thiinkmediagraphics.com/new-project-form
- Phone: +1 (470) 837-3775
- Email: Team@thiinkmediagraphics.com

## Agent Skills

Project includes `.agent/skills/` with cross-triggering workflow:
- `full-stack-developer-max` - Main development skill (`/dev`, `/implement`)
- `active-learner` - Constraint tracking
- `session-documenter` - Progress logging
- `todo-manager` - Task management

Reference detailed docs in `.agent/skills/full-stack-developer-max/reference/` for responsive patterns, code standards, and component templates.

## Implementation Status

**Current Phase**: Phase 4 Complete (Homepage)
**Next Phase**: Phase 5 (Case Studies)

### Completed Components
| Category | Components |
|----------|------------|
| Foundation | Typography system (Cinzel, EB Garamond, Cormorant SC), color tokens, textures |
| Motion | ScrollReveal, StaggerContainer, StaggerText |
| UI | SectionDivider, TextLink, CTALink, Button (with sizes) |
| Portfolio | ArtifactCard, ArtifactGrid, FeaturedArtifact |
| Layouts | ZigzagSection, TwoColumnText, BentoGrid |
| Sections | Hero (portfolio-focused), FeaturedWork, Services, ProcessTimeline, Testimonials, CTABand |
| Features | Navbar (glassmorphism), Footer (4-column) |

### Key Files
- `src/lib/motion.ts` - Animation constants and variants
- `src/components/motion/` - ScrollReveal, StaggerContainer
- `src/components/ui/` - Typography, SectionDivider, TextLink
- `src/components/ArtifactCard.tsx` - Museum-style portfolio cards
- `src/components/layouts/` - ZigzagSection, TwoColumnText
- `src/components/sections/` - FeaturedWork
- `src/components/home/` - Services, ProcessTimeline, Testimonials, CTABand

## Design Reference

**Master Guide**: `_design_references/Museum_Redesign/WEBSITE_REDESIGN_MASTER.md`
- Complete component library with TSX patterns
- Color system with semantic naming
- Typography scale with fluid clamp() values
- Layout patterns (Zigzag, Two-Column Editorial, Manuscript)
- Motion/interaction specifications
- Accessibility requirements
