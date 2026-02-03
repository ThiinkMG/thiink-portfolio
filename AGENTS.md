━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PORTFOLIO WEBSITE DESIGN BRIEF
THIINK MEDIA GRAPHICS | 2025
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ROLE:
You are a Senior UI/UX Designer and Web Developer specializing in
Luxury Creative Portfolio aesthetics with a **"Digital Louvre"** Museum/Antiquity theme.

DESIGN DIRECTION:
The website follows a **Portfolio-First** "Awe → Study" narrative journey:
- **Homepage** ("Exhibition Hall"): Portfolio-first with rotating featured projects
- **Portfolio** ("Gallery Walk"): Artifact Cards prominently featured immediately after hero
- **Case Studies** ("Reading Room"): Warm parchment, editorial layout
- **Reference**: See `_design_references/Museum_Redesign/WEBSITE_REDESIGN_MASTER.md`

IMPLEMENTATION STATUS: Phases 1-4 Complete (Foundation, Components, Layouts, Homepage)

TASK:
Continue development of the Design Agency Portfolio website "Thiink Media Graphics."
Current focus: Phase 5 (Case Studies) and Phase 6 (Polish).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Core Concept: "Where Ancient Wisdom Meets Digital Innovation"

The brand positions itself as guardians of timeless creative vision—
merging philosophical depth (Roman/Greek classical aesthetics) with 
cutting-edge digital execution. Every design should feel like it 
belongs in both a Renaissance gallery and a Silicon Valley pitch deck.

Voice: Confident, philosophical, elevated but approachable
Persona: The Enlightened Craftsman—strategic, artistic, visionary

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAL AESTHETIC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STYLE:
"The Digital Louvre" — Museum/Antiquity Aesthetic
- Chiaroscuro lighting with classical art backgrounds
- Tactile textures: slate grain (dark), paper fiber (light)
- Artifact Cards with double-border framing and museum placards
- Editorial-grade whitespace with manuscript-style layouts
- "Walking through a dimly lit gallery" energy

TEXTURES:
- Global noise overlay (3% opacity) to de-digitize the screen
- Slate/stone grain on dark mode cards
- Rag paper fiber on parchment sections

COLOR PALETTE: "The Archive"

Dark Mode (Exhibition Hall):
- Vantablack: #050505 (Homepage hero - immersive dark)
- Deep Obsidian: #0A0A0A (Primary background)
- Charcoal Slate: #1A1A1A (Cards, footer, elevated surfaces)
- Big Stone: #1A2B42 (CTA bands, gradients)

Light Mode (Reading Room):
- Aged Parchment: #E3DCCB (Case study backgrounds)
- Warm Cream: #F5E6D3 (Light mode sections)

Text Colors:
- Marble: #F0EFE9 (Primary text on dark)
- Ivory White: #F5F5F0 (Headings on dark)
- Platinum Gray: #9CA3AF (Secondary text, captions)
- Ink: #1F1A17 (Text on parchment)

Accents:
- Gold Foil: #D4AF37 (Primary accent)
- Marigold Gold: #D4A855 (Brand gold, CTAs)
- Bronze Metallic: #C9A050 (Hover states)
- Oxblood: #4A0404 (Error states - use sparingly)

Ratio: 60% Vantablack-Obsidian / 15% Slate / 5% Parchment / 20% Text & Gold

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN TOKENS (CSS Variables)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All values must be defined as CSS custom properties for consistency:

```css
:root {
  /* ─── COLORS: THE ARCHIVE ─── */
  --color-museum: #050505;      /* Vantablack - hero backgrounds */
  --color-obsidian: #0A0A0A;    /* Primary background */
  --color-slate: #1A1A1A;       /* Cards, footer */
  --color-stone: #1A2B42;       /* CTA bands */
  --color-parchment: #E3DCCB;   /* Case study backgrounds */
  --color-cream: #F5E6D3;       /* Light mode sections */
  --color-marble: #F0EFE9;      /* Primary text on dark */
  --color-ivory: #F5F5F0;       /* Headings on dark */
  --color-platinum: #9CA3AF;    /* Secondary text */
  --color-ink: #1F1A17;         /* Text on parchment */
  --color-gold: #D4AF37;        /* Gold foil accent */
  --color-gold-brand: #D4A855;  /* Marigold - brand gold */
  --color-bronze: #C9A050;      /* Hover states */
  --color-oxblood: #4A0404;     /* Error states */

  /* ─── TYPOGRAPHY: THE LAPIDARY ─── */
  --font-display: 'Cinzel', 'Trajan Pro', serif;        /* Roman, carved */
  --font-heading: 'Cinzel', serif;                       /* Section titles */
  --font-body: 'EB Garamond', 'Georgia', serif;          /* Academic body */
  --font-label: 'Cormorant SC', serif;                   /* Small caps labels */
  --font-accent: 'Pinyon Script', cursive;               /* Curator's hand */
  --font-ui: 'Outfit', 'Inter', sans-serif;              /* CTAs, buttons */

  /* ─── SPACING (8px base) ─── */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */

  /* ─── BORDER RADIUS ─── */
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;

  /* ─── SHADOWS ─── */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.6);
  --shadow-gold: 0 0 20px rgba(212, 168, 85, 0.3);

  /* ─── TRANSITIONS ─── */
  --ease-apple: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 400ms;
  --duration-page: 600ms;

  /* ─── Z-INDEX SCALE ─── */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
  --z-tooltip: 600;
}
```

TYPOGRAPHY: "The Lapidary & The Scribe"
Fonts that feel carved, written, or printed on a press.

Display/Headlines:
- Primary: "Cinzel" (Roman inscriptional) — carved, imperial authority
- Fallback: "Trajan Pro"
- Styling: 400-600 weight, -0.02em letter-spacing, uppercase for heroes
- Use: H1, H2, hero text, section titles

Body/Narrative:
- "EB Garamond" (academic Old Style serif)
- Regular 400 weight, 16-18px base, 1.7 line-height
- Highly legible for long-form reading
- Italic for pull quotes and testimonials

UI Labels/Data:
- "Cormorant SC" (Small Caps variant)
- 500 weight, 0.15em tracking
- Use: Dates, metadata, figure captions (e.g., "FIG 1. CLIENT — 2024")

Accent/Marginalia:
- "Pinyon Script" (elegant cursive)
- The "curator's hand" for notes and special elements
- Use sparingly for authenticity

CTAs/Buttons:
- "Outfit" for all interactive UI elements
- All-caps with 0.08em tracking for buttons
- Clean, modern contrast to classical body

FLUID TYPOGRAPHY SCALE:
Use CSS clamp() for responsive sizing without breakpoints:

| Element    | Mobile (375px) | Desktop (1440px) | CSS clamp()                           |
|------------|----------------|------------------|---------------------------------------|
| H1 Hero    | 40px           | 80px             | clamp(2.5rem, 5vw + 1rem, 5rem)       |
| H2 Section | 32px           | 56px             | clamp(2rem, 3vw + 0.75rem, 3.5rem)    |
| H3 Card    | 24px           | 36px             | clamp(1.5rem, 2vw + 0.5rem, 2.25rem)  |
| H4 Label   | 18px           | 24px             | clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)|
| Body Large | 18px           | 20px             | clamp(1.125rem, 0.5vw + 1rem, 1.25rem)|
| Body Base  | 16px           | 18px             | clamp(1rem, 0.25vw + 0.9rem, 1.125rem)|
| Caption    | 12px           | 14px             | clamp(0.75rem, 0.25vw + 0.65rem, 0.875rem)|
| Overline   | 11px           | 12px             | 0.75rem (fixed)                        |

Line Heights:
- Headlines: 1.1 (tight, dramatic)
- Body: 1.7 (readable, elegant)
- UI/Labels: 1.4 (functional)

Letter Spacing:
- Headlines: -0.02em (tighter)
- Body: 0 (default)
- Overlines/Buttons: 0.08em (tracking)
- All-Caps UI: 0.1em

IMAGERY TREATMENT:
- Portfolio pieces in high-contrast floating frames
- Subtle parallax depth on hero imagery
- Grayscale → color reveal on hover for case studies
- Classical illustration overlays at 8-12% opacity
- AI-generated marble/philosophical backgrounds where appropriate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GRID SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BASE GRID:
- 12-column grid on desktop (1440px+)
- 8-column grid on laptop (1024px)
- 4-column grid on tablet (768px)
- 2-column grid on mobile (375px)

CONTAINER WIDTHS:
| Breakpoint | Max Width | Side Padding |
|------------|-----------|--------------|
| Desktop    | 1280px    | 80px         |
| Laptop     | 1024px    | 48px         |
| Tablet     | 768px     | 32px         |
| Mobile     | 100%      | 20px         |

GUTTER WIDTH:
- Desktop/Laptop: 24px
- Tablet: 20px
- Mobile: 16px

COMMON LAYOUTS:
```
Full Width:        [─────────────────────────────────────────]
                   col-span-12

Asymmetric Hero:   [────────────────────][─────────────────]
                   col-span-7            col-span-5

Two Column:        [─────────────────]  [─────────────────]
                   col-span-6           col-span-6

Bento 2×2:         [────────][────────] [────────][────────]
                   col-span-3  col-span-3  col-span-3  col-span-3

Content + Sidebar: [───────────────────────][─────────────]
                   col-span-8               col-span-4

Footer 4-Col:      [──────][──────][──────][──────]
                   col-span-3 ×4
```

VERTICAL RHYTHM:
Section spacing follows the "musical" principle:
- Between major sections: 120px (desktop) / 80px (mobile)
- Between sub-sections: 64px (desktop) / 48px (mobile)
- Between components: 32px (desktop) / 24px (mobile)
- Between elements: 16px / 8px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYOUT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] NAVIGATION BAR
- Fixed/sticky with backdrop blur (glassmorphism at 80% opacity)
- Left: Atom logo wordmark in gold
- Center: Minimal nav (Work, Services, About, Contact)
- Right: "Initiate Project" CTA button (gold fill, dark text)
- Behavior: Shrinks on scroll, shows progress indicator on 
  case study pages

[2] HERO SECTION
Layout: Asymmetric split (60/40)
- Left: Large philosophical headline with staggered line reveal
  - H1: "Unleash Your Vision"
  - Subhead: "Let's Redefine the Possible"
  - Supporting: Established 2019 | 5-Star Google Rating
  - Dual CTAs: "View Portfolio" (outline) + "Start Project" (filled)
  
- Right: 3D floating composition
  - Layered portfolio mockups with parallax depth
  - Subtle marble statue element integrated
  - Gentle floating animation (CSS transform)

Background: Dark gradient with subtle noise texture
Accent: Gold line or atom logo element as decorative divider

[3] TRUST MARQUEE (Partner Logos)
- Horizontal infinite scroll marquee
- Logos: Google, Disney, Hulu, BBB, Wix, Printful, Moo, Starz
- Grayscale by default, gold tint on container hover
- Section label: "Trusted By Industry Leaders" (small caps)

[4] SERVICES SECTION
Layout: Bento Grid (2×2 primary + sidebar accent)
Style: Card-based with icon badges and subtle border glow

Service Cards:
┌─────────────────────────────────────────────────────────┐
│  WEB ARTISAN          │  DESIGN FORGE                   │
│  Website Design       │  Logo & Graphic Design          │
│  [Badge Icon]         │  [Badge Icon]                   │
│  "Weave your brand's  │  "Craft logos that speak to     │
│   essence into a      │   your audience's heart"        │
│   stunning website"   │                                 │
├─────────────────────────────────────────────────────────┤
│  CORE IDENTITY        │  PRINT CRAFT CREATIONS          │
│  Brand Kits           │  Design to Print-on-Demand      │
│  [Badge Icon]         │  [Badge Icon]                   │
│  "Blend your values   │  "Transform ideas into print    │
│   into unforgettable  │   masterpieces"                 │
│   visual narrative"   │                                 │
└─────────────────────────────────────────────────────────┘

Interactions: 
- Subtle scale (1.02) + shadow elevation on hover
- Gold border-glow accent on active/hover
- Badge icons use existing service iconography system

[5] FEATURED WORK / PORTFOLIO GRID
Layout: Asymmetric masonry or curated 2-column showcase
Display: 4-6 hero case studies with:
- Project thumbnail (grayscale → color on hover)
- Client name + project type tag
- Quick-view modal or smooth page transition

Featured Case Studies to highlight:
- KNGDM (full brand identity)
- Manifest (logo design)
- Website client showcase
- Print/merchandise project

CTA: "Explore Full Portfolio" button → links to Canva portfolio

[6] PROCESS SECTION
Layout: Horizontal stepped timeline OR vertical accordion
Steps:
1. Project Initiation → "Complete our discovery form"
2. Schedule a Call → "45-50 min design consultation"
3. In-Depth Discovery → "Deep dive into project specifics"
4. Creative Execution → "Our team crafts + iterates"
5. Final Delivery → "Assets + Certificate of Authenticity"

Visual: Connecting line with numbered nodes, gold accent

[7] TESTIMONIALS SECTION
Layout: Centered spotlight with rotating cards OR horizontal scroll
Content:
- 5-Star rating visual (gold stars)
- Client quotes with attribution
- Small profile indicators

Featured quotes:
"Great work in a timely fashion..." — Nathan Fitzpatrick
"Responsive, fast, knowledgeable...made a masterpiece" — Adrian Virges
"Definitely recommend for anyone needing graphic design!" — Dani K. Smiles

Background: Subtle marble texture or philosopher fresco at low opacity

[8] ABOUT / PHILOSOPHY SECTION
Layout: Editorial two-column (text left, image right)
Image: Marble statue with atom logo halo (existing brand asset)
Content:
- Founding story (Est. 2019)
- Philosophy: "Merging ancient wisdom with modern innovation"
- Mission: "Transforming business identities into unforgettable brands"

[9] CTA BAND
Layout: Full-width dark band with centered content
Headline: "Ready to Craft Your Brand's Legacy?"
Supporting: "Let's create something timeless together"
Button: "Initiate Your Project" (large, gold fill)

[10] FOOTER
Layout: 4-column grid

Column 1: Logo + tagline + social icons (IG, LinkedIn, GitHub)
Column 2: Services links
Column 3: Quick links (Pricing, Portfolio, Blog, Contact)
Column 4: Contact info
  - Phone: `+1 (470) 837-3775`
  - Email: `Team@thiinkmediagraphics.com`
  - Start Project: [Initiate](https://www.thiinkmediagraphics.com/new-project-form)

Bottom bar: © 2025 Thiink Media Graphics | Terms | Privacy | 
Made with Wix Studio™

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL POLISH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ANIMATIONS & MICRO-INTERACTIONS:
"Motion should whisper, not shout."

[1] HOVER STATES (Mouse-Over):
- **Buttons**: "Magnetic" effect (button gently follows cursor within 10px radius) + subtle fill opacity shift (100% → 90%).
- **Project Cards**: 
    - Image: Scale up 1.03x (very subtle) + Filter shift (Grayscale → Full Color).
    - Text: Title slides up 5px + "View Case Study" arrow fades in from left.
- **Nav Links**: An animated underline expands from center-out (Gold accent).

[2] SCROLL REVEALS:
- **Hero Text**: Staggered character or word reveal (0.05s delay per item) - "The Theatre of Memory" effect.
- **Section Headers**: Fade up + slight mask reveal (clipping-path).
- **Parallax**: 
    - Background textures move at 10% scroll speed.
    - Floating elements (statues/abstracts) move at 15% scroll speed for depth.

[3] SYSTEM MOTION:
- **Page Transitions**: Smooth cross-dissolve (400ms) with a subtle "curtain" wipe using the brand charcoal color.
- **Modal Open/Close**: Spring physics (damping: 25, stiffness: 300) - feels snappy but organic, not robotic.
- **Loading State**: An abstract "Atom" logo animation that pulses gently (breathing effect) rather than spinning.

TECHNIQUE:
- Use `framer-motion` for React components.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (The "Apple" ease - quick start, soft landing).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY & STYLING RULES (STRICT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] COLOR CONTRAST (WCAG AA/AAA):
- **Body Text**: MUST use `Ivory White (#F5F5F0)` on dark backgrounds `Platinum Gray (#9CA3AF)` for secondary.
- **Buttons (Primary)**: 
    - Background: `Marigold Gold (#D4A855)`
    - Text: `Shark Black (#242528)` 
    - *Rationale*: White text on Gold fails contrast checks. Shark Black ensures AAA compliance.
- **Links**: Must have a distinct hover state (Underline or Color Shift to Gold).

[2] TYPOGRAPHY SCALE:
- Minimum font size: 16px (Body).
- Line-height: 1.6 (Body) for readability against dark mode.

[3] FOCUS STATES (KEYBOARD NAVIGATION):
- **All Interactive Elements** MUST have visible focus indicators.
- Focus Ring: 2px solid Gold (#D4A855) with 2px offset.
- Focus Background: Subtle glow (box-shadow: 0 0 0 4px rgba(212, 168, 85, 0.3)).
- Tab Order: Logical flow (left-to-right, top-to-bottom).
- Skip Links: Hidden until focused, positioned top-left corner.

[4] SEMANTIC HTML STRUCTURE:
```html
<header role="banner">         <!-- Navigation -->
<main role="main">             <!-- Primary content -->
<nav role="navigation">        <!-- Navigation menus -->
<section aria-labelledby="">   <!-- Major sections with headings -->
<article>                      <!-- Portfolio items, blog posts -->
<aside role="complementary">   <!-- Sidebars -->
<footer role="contentinfo">    <!-- Footer -->
```

[5] ARIA REQUIREMENTS:
- All images: `alt=""` for decorative, descriptive text for meaningful.
- Buttons: Clear `aria-label` if icon-only.
- Modals: `aria-modal="true"`, `role="dialog"`, focus trap enabled.
- Loading states: `aria-live="polite"` for status updates.
- Form errors: `aria-describedby` pointing to error message.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT STATE MATRIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every interactive component must define ALL states:

[A] BUTTONS (Primary - Gold Fill):
| State    | Background   | Text       | Border      | Shadow           |
|----------|--------------|------------|-------------|------------------|
| Default  | #D4A855      | #242528    | none        | none             |
| Hover    | #B8944A      | #242528    | none        | shadow-gold      |
| Active   | #A68040      | #242528    | none        | none (pressed)   |
| Focus    | #D4A855      | #242528    | 2px gold ring| glow-gold       |
| Disabled | #D4A855/40%  | #242528/60%| none        | none             |
| Loading  | #D4A855      | transparent| none        | none + spinner   |

[B] BUTTONS (Secondary - Outline):
| State    | Background   | Text       | Border        | Shadow         |
|----------|--------------|------------|---------------|----------------|
| Default  | transparent  | #F5F5F0    | 1px #F5F5F0   | none           |
| Hover    | #F5F5F0/10%  | #D4A855    | 1px #D4A855   | none           |
| Active   | #F5F5F0/20%  | #D4A855    | 1px #D4A855   | none           |
| Focus    | transparent  | #F5F5F0    | 2px gold ring | glow-gold      |
| Disabled | transparent  | #F5F5F0/40%| 1px #F5F5F0/40| none           |

[C] TEXT LINKS:
| State    | Color    | Decoration          | Additional          |
|----------|----------|---------------------|---------------------|
| Default  | #F5F5F0  | none                |                     |
| Hover    | #D4A855  | underline (animate) | from center-out     |
| Active   | #B8944A  | underline           |                     |
| Focus    | #F5F5F0  | none                | gold ring outline   |
| Visited  | #9CA3AF  | none                | subtle distinction  |

[D] CARDS (Portfolio/Service):
| State    | Transform   | Shadow      | Border           | Image Filter  |
|----------|-------------|-------------|------------------|---------------|
| Default  | none        | shadow-md   | 1px #242528      | grayscale(1)  |
| Hover    | scale(1.02) | shadow-lg   | 1px #D4A855/50%  | grayscale(0)  |
| Active   | scale(0.99) | shadow-sm   | 1px #D4A855      | grayscale(0)  |
| Focus    | none        | glow-gold   | 2px #D4A855      | grayscale(0)  |

[E] NAVIGATION LINKS:
| State    | Text Color | Indicator                        |
|----------|------------|----------------------------------|
| Default  | #F5F5F0    | none                             |
| Hover    | #D4A855    | underline grows from center      |
| Active   | #D4A855    | full underline, 2px              |
| Focus    | #F5F5F0    | gold outline ring                |
| Current  | #D4A855    | persistent underline             |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT INTERACTION TEMPLATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[A] HERO: STAGGERED TEXT REVEAL
- **visual_concept**: "The Architect's blueprint coming to life."
- **behavior**: Text does not just fade in; it unmasks depending on line height.
- **code_logic**:
  - Split text into characters or words.
  - Apply `overflow: hidden` to parent line container.
  - Animate child Y-transform from 100% to 0% + opacity 0 to 1.
  - Stagger delay: 0.05s per element.
  - Result: Sharp, confident arrival of the message.

[B] SCROLL: DECORATIVE PARALLAX
- **visual_concept**: "Walking through a gallery of depth."
- **behavior**: Background elements (statues, marble textures) move slower than foreground content.
- **specs**:
  - Foreground (Content): Speed 1.0 (Normal)
  - Midground (Accents/Lines): Speed 0.85
  - Background (Textures/Statues): Speed 0.5 to 0.15 (Deep depth)
- **implementation**: `useScroll` hook maps Y-position to TranslateY.

[C] HOVER: MAGNETIC BUTTONS
- **visual_concept**: "Intelligent Interface."
- **behavior**: The button acknowledges the user's intent before they click.
- **logic**:
  - Track mouse X/Y relative to button center.
  - Apply spring physics to translate button container by 20-40% of mouse movement.
  - Text moves slightly less (parallax inside button) for extra "jelly" feel.
  - On leave: Spring back to center (damping: 10, stiffness: 100).

[D] PAGE TRANSITIONS: CINEMATIC WIPE
- **visual_concept**: "Scene Change."
- **behavior**:
  1. Old page opacity fades to 0.8.
  2. A "curtain" (Deep Obsidian color) slides up from bottom (0% to 100% height).
  3. Route changes.
  4. Curtain slides up and away (revealing new page).
  5. Content scales down slightly (0.98 to 1.0) on arrival.
- **timing**: Total duration 600ms. Ease: `easeInOutQuart`.

[E] PORTFOLIO ITEMS: THE "REVEAL"
- **default_state**: 
  - Image: Grayscale (Saturation: 0), Contrast: 1.1 (High drama black & white).
  - Overlay: None.
- **hover_state**: 
  - Image: Full Color (Saturation: 1), Scale: 1.05.
  - Overlay: Gradient scrim fades in at bottom.
  - Meta: Client name + Role slide in from bottom.
- **feel**: Like turning a light on in a dark room.

[F] TESTIMONIALS: THE "ROTATING SPOTLIGHT"
- **visual_concept**: "Voices from the void."
- **behavior**:
  - Container acts as a carousel but creates a 3D wheel effect or simple fade stack.
  - Interval: 6s (gives enough time to read).
  - Progress: A thin gold line fills up to indicate when the next slide comes.
  - Interaction: Hovering pauses the timer.
  - Transition: Current slide fades out + moves up; New slide fades in + moves up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORM & INPUT STYLING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] TEXT INPUTS & TEXTAREAS:
```css
/* Default State */
background: transparent;
border: 1px solid var(--color-platinum);
border-radius: var(--radius-sm);  /* 2px */
padding: 16px 20px;
color: var(--color-ivory);
font-family: var(--font-body);
font-size: 16px;
transition: border-color var(--duration-fast) var(--ease-apple);

/* Placeholder */
color: var(--color-platinum);
font-style: italic;

/* Focus State */
border-color: var(--color-gold);
outline: none;
box-shadow: 0 0 0 3px rgba(212, 168, 85, 0.2);

/* Error State */
border-color: #E53935;
box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.2);

/* Disabled State */
opacity: 0.5;
cursor: not-allowed;
background: rgba(255, 255, 255, 0.05);
```

[2] LABELS:
- Font: Outfit (UI font)
- Size: 14px
- Color: #F5F5F0
- Weight: 500
- Spacing: 8px margin-bottom
- Required indicator: Gold asterisk (*)

[3] SELECT DROPDOWNS:
- Custom styled to match inputs
- Arrow icon: Chevron-down from Lucide, gold on hover
- Dropdown menu: Shark Black (#242528) background
- Selected option: Gold text
- Hover option: Subtle gold background tint (10% opacity)

[4] CHECKBOXES & RADIOS:
- Custom styled (hide native)
- Size: 20px × 20px
- Border: 2px solid Platinum
- Checked: Gold fill with Shark Black checkmark
- Focus: Gold ring around checkbox

[5] FORM LAYOUT:
- Label above input (never floating/inside)
- Error message below input, 8px gap
- Required fields grouped together
- Progress indicator for multi-step forms
- Submit button: Full-width on mobile, right-aligned on desktop

[6] VALIDATION FEEDBACK:
- Real-time validation on blur (not on type)
- Success: Green checkmark icon + subtle green border
- Error: Red X icon + red border + error message
- Error Message Style:
  - Color: #E53935 (accessible red)
  - Font: Outfit, 13px
  - Icon: AlertCircle from Lucide

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ERROR STATES & EMPTY STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] 404 PAGE (Not Found):
- Visual: Marble statue fragment, broken/floating
- Headline: "Lost in the Void" (Josefin Sans, gold)
- Body: "The page you seek has dissolved into the aether."
- CTA: "Return to the Forum" (button back to home)
- Background: Deep Obsidian with subtle marble texture
- Animation: Gentle floating particles (atoms)

[2] 500 ERROR (Server Error):
- Visual: Cracked marble texture
- Headline: "A Momentary Eclipse"
- Body: "Our systems are realigning. Please return shortly."
- CTA: "Refresh" + "Return Home"
- Style: Same dark aesthetic, no blame on user

[3] EMPTY STATES:
Portfolio Loading:
- Skeleton cards with shimmer animation
- Placeholder: Obsidian rectangles with subtle pulse

No Search Results:
- Visual: Contemplative statue silhouette
- Message: "No works match your search."
- Suggestion: "Try different keywords or browse all projects."

Form Success:
- Visual: Gold atom logo, gently pulsing
- Headline: "Your Vision is Received"
- Body: "We'll respond within 24 hours to begin your journey."
- No CTA needed (or subtle "Back to Home")

[4] LOADING STATES:
Full Page:
- Atom logo center screen
- "Breathing" scale animation (0.95 ↔ 1.05)
- Duration: 1.5s loop
- Background: Deep Obsidian

Inline/Component:
- Gold spinner ring (not full circle, 270° arc)
- Rotation: 1s linear infinite
- Size: 20px for buttons, 40px for sections

Skeleton Screens:
- Base color: Shark Black (#242528)
- Shimmer: Linear gradient sweep, left to right
- Shimmer color: rgba(255,255,255,0.05)
- Duration: 1.5s ease-in-out infinite

[5] TOAST NOTIFICATIONS:
Position: Bottom-right, 24px from edges
Animation: Slide up + fade in (200ms)
Auto-dismiss: 5s for info, 8s for success, persistent for errors

Types:
| Type    | Icon        | Accent Color | Background  |
|---------|-------------|--------------|-------------|
| Success | CheckCircle | #22C55E      | #242528     |
| Error   | XCircle     | #E53935      | #242528     |
| Warning | AlertTriangle| #F59E0B     | #242528     |
| Info    | Info        | #D4A855      | #242528     |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PORTFOLIO FUNNEL STRATEGY & UX PSYCHOLOGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] THE "CONVERSION ARC" (Funnel Strategy):
The website is not a gallery; it is a sales argument.
1.  **The Hook (Hero)**: "I understand your ambition." (High-level philosophical alignment).
2.  **The Proof (Work)**: "I have done this for others." (Visual Halo Effect).
3.  **The Trust (Process/Testimonials)**: "I am safe to work with." (Reducing Risk).
4.  **The Ask (CTA)**: "Let's begin." (Clear, low-friction next step).

[2] PSYCHOLOGICAL TRIGGERS:
- **The Halo Effect**: We use "Neoclassical Luxury" so users subconsciously attribute "High Value" and "Intelligence" to the service before reading a word.
- **Cognitive Ease**: Navigation is standard (Top Right), interactions are predictable. We spend our "Innovation Tokens" on visuals, NOT on making the user learn how to scroll.
- **Social Proof bias**: "Trusted By" marquee is placed *above the fold* or immediately after the Hero to silence skepticism early.

[3] ELITE CASE STUDY STRUCTURE (The "STAR" Method):
Every project page must tell a story, not just show images.
- **Situation**: "The Client was lost in a crowded market." (1-2 sentences max).
- **Task**: "They needed a visual language that felt timeless."
- **Action** (The Visuals): Show the refined logos, the grid systems, the color exploration.
- **Result**: "A 300% increase in brand perception." (If metrics exist) OR "A definitive new identity."

Formatting Rule:
- **50/50 Text-to-Visual Ratio** in the intro.
- **100% Visual** in the gallery (Let the work speak).
- **Contextual Mockups**: Never show a flat logo. Show it on a business card, a building, a phone screen. Real-world context creates perceived value.



RESPONSIVENESS:
Breakpoints: 1440px / 1024px / 768px / 375px

- Bento grid → 2×2 on tablet → single column stack on mobile
- Hero split → stacked (image below text) on mobile
- Navigation → hamburger menu with full-screen overlay
- Footer → 2-column then single column stack

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE & TOUCH INTERACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] TOUCH TARGETS:
- Minimum size: 44px × 44px (Apple HIG standard)
- Recommended: 48px × 48px for primary actions
- Spacing between targets: 8px minimum

[2] MOBILE NAVIGATION:
Hamburger Icon:
- Three lines, 24px wide, 2px thick
- Color: Ivory (#F5F5F0)
- Transforms to X on open (animated, 300ms)

Full-Screen Overlay:
- Background: Deep Obsidian (#0A0A0A) at 98% opacity
- Animation: Slide down from top (300ms, ease-apple)
- Links: Large (24px), centered, 48px vertical spacing
- CTA Button: Full-width, fixed to bottom with safe-area padding
- Close: X icon top-right + swipe down gesture

[3] SWIPE GESTURES:
Portfolio Gallery:
- Horizontal swipe to navigate between projects
- Velocity threshold: 0.5 for snap
- Resistance at edges (rubber-band effect)

Testimonials:
- Swipe left/right to change slide
- Dot indicators below for position

Modal Close:
- Swipe down to dismiss (threshold: 100px + velocity)
- Opacity fades as you drag

[4] TAP FEEDBACK:
- Use `:active` state for immediate feedback
- Scale down 0.97 on press
- No delay (remove 300ms tap delay)
- `touch-action: manipulation` on buttons

[5] SAFE AREAS:
- Respect `env(safe-area-inset-*)` for notched devices
- Fixed bottom elements: Add 34px extra padding (iPhone home indicator)
- Modals: Account for dynamic island on newer iPhones

[6] MOBILE-SPECIFIC OPTIMIZATIONS:
- Disable parallax on mobile (performance + motion sickness)
- Disable magnetic button effect (no mouse)
- Use native scroll instead of custom (for momentum)
- Portfolio grid: Grayscale disabled (no hover, show color)
- Reduce motion: Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCROLL BEHAVIOR & NAVIGATION PATTERNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1] SMOOTH SCROLL:
```css
html {
  scroll-behavior: smooth;
}
```
- Anchor links: Smooth scroll with 80px offset (for sticky nav)
- Duration controlled by browser (typically 300-500ms)
- Fallback: `scrollIntoView({ behavior: 'smooth' })`

[2] SCROLL SNAP (Portfolio Gallery):
```css
.gallery-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}
.gallery-item {
  scroll-snap-align: center;
}
```

[3] STICKY NAVIGATION BEHAVIOR:
Initial State (at top):
- Background: Transparent
- Height: 80px
- Logo: Full size

Scrolled State (after 100px scroll):
- Background: Deep Obsidian with 80% opacity backdrop blur
- Height: 64px (shrink)
- Transition: 200ms ease-apple
- Shadow: subtle bottom shadow

Hide on Scroll Down / Show on Scroll Up:
- Track scroll direction
- Translate Y: -100% when hiding
- Threshold: 5px scroll delta to trigger

[4] PROGRESS INDICATOR (Case Study Pages):
- Position: Top of viewport, below nav
- Height: 3px
- Color: Gold (#D4A855)
- Width: 0% → 100% based on scroll position
- Transition: None (direct mapping for smoothness)

[5] SCROLL-TRIGGERED ANIMATIONS:
- Trigger point: When element is 20% visible in viewport
- Use Intersection Observer (not scroll events)
- One-time trigger (don't re-animate on scroll up)
- Stagger children: 50ms delay between items

[6] INFINITE SCROLL (If applicable):
- Load more: Trigger at 80% scroll depth
- Loading indicator: Small spinner below last item
- "Load More" button as fallback
- Preserve scroll position on back navigation

[7] BACK TO TOP:
- Appears: After 500px scroll
- Position: Bottom-right, 24px from edges
- Icon: ArrowUp from Lucide
- Style: Circular, Shark Black bg, gold icon
- Hover: Gold background, obsidian icon
- Animation: Fade + scale in (200ms)

SPACING SYSTEM:
- Base unit: 8px
- Component padding: 16px / 24px / 32px / 48px
- Section spacing: 80px (desktop) / 48px (mobile)
- Generous whitespace to maintain premium "breathable" feel

PERFORMANCE:
- Lazy load all portfolio images
- WebP format with fallbacks
- Critical CSS inlined
- Target: <3s LCP, >90 Lighthouse score

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONSTRAINTS & DIRECTIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DO:
✓ Prioritize high-contrast, professional-grade whitespace
✓ Maintain "Apple-esque" simplicity with classical elegance
✓ Use the existing service badge iconography system
✓ Integrate existing brand photography and AI-generated assets
✓ Ensure every interaction feels intentional and premium
✓ Keep copy philosophical but accessible

DO NOT:
✗ Use generic stock-style layouts or templates
✗ Overcrowd sections — let the work breathe
✗ Use bright/neon colors — stay within the established palette
✗ Add excessive ornamentation — elegance through restraint
✗ Include auto-playing audio or intrusive popups
✗ Use trendy micro-interactions that distract from content

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REFERENCE TOUCHSTONES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Visual References:
- Pentagram.com (editorial portfolio structure)
- Collins.co (typography-forward, minimal)
- Apple.com (whitespace, product focus)
- Build by Ramotion (dark luxury aesthetic)

Brand Alignment:
- Existing Wix site (thiinkmediagraphics.com)
- 2025 Canva Portfolio
- Marble + gold + philosopher imagery system

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ASSET UTILIZATION & SOURCING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRIMARY SOURCE: `f:\3. Development\2025 Thiink MG Portfolio Website\_design_references\Design Assets`

[1] ASSET LOGS (REQUIRED REFERENCE):
Before building ANY component requiring images or videos, consult these logs:

| Log | Location | Contents |
|-----|----------|----------|
| Brand Assets | `/Design Assets/Thiink MG Brand Assets/IMAGE_LOG.md` | 221 assets: logos, textures, bas-reliefs, backgrounds, **videos** |
| Client Assets | `/Design Assets/Clients/CLIENT_ASSETS_LOG.md` | 286 assets across 9 client projects |
| YouTube Videos | `/Design Assets/Clients/VIDEO_YT_LOG.md` | 6 externally-hosted videos (>100MB, YouTube unlisted) |

**Video Assets Available** (3 MP4 files, 6.7-12.4 MB):
- Animated Greek goddess figure - Hero backgrounds, loading states
- Animated classical painting - Section transitions, hover effects
- Social media bas-relief animation - Accent animations

[2] ASSET INTEGRATION WORKFLOW (Mandatory 3-Step Process):

**Step 1: ANALYZE**
- Determine what type of asset the component needs (image OR video)
- Consider: dimensions, aspect ratio, background type, aesthetic feel, motion requirements
- Example: "Hero needs a large (>2000px) dark classical art background"
- Example: "Hero could use animated classical video for dramatic effect"

**Step 2: SEARCH**
- Open the relevant asset log(s)
- Filter by size category, background type, and suggested use
- Match component requirements to available assets
- Example: "IMAGE_LOG.md shows 'TMG - Roman Philosophers on gold bg.png' is 3000x2000px, dark classical art - perfect for hero"

**Step 3: INTEGRATE**
- Use the actual asset path in your component
- NEVER use placeholder images when real assets exist
- Copy the exact path from the log

```tsx
// ❌ NEVER DO THIS
<Image src="/placeholder-hero.jpg" alt="Hero background" />

// ✅ ALWAYS DO THIS - Image
<Image
  src="/_design_references/Design Assets/Thiink MG Brand Assets/TMG - Roman Philosophers on gold bg.png"
  alt="Classical philosophers in golden bas-relief style"
/>

// ✅ ALWAYS DO THIS - Video Background
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/_design_references/Design Assets/Thiink MG Brand Assets/Videos/greek-goddess-animated.mp4" type="video/mp4" />
</video>
```

[3] CLIENT ASSETS (`/Design Assets/Clients`):
- Use REAL client logos and project imagery relative to the case study.
- Do not use generic placeholders if a specific client folder exists (e.g., KNGDM, Neo Sophia).
- Maintain brand integrity of client logos (do not distort colors unless doing a specific grayscale partner wall).
- Reference `CLIENT_ASSETS_LOG.md` for complete inventory with dimensions and paths.

[4] BRAND ASSETS (`/Design Assets/Thiink MG Brand Assets`):
- Use the official Atom Logo and Wordmark from this directory.
- Utilize any distinct "Philosopher" or "Marble" textures found here before generating new AI assets.
- Respect the file formats (SVG for vectors, high-res PNG/WebP for rasters).
- Reference `IMAGE_LOG.md` for complete inventory with dimensions and suggested uses.

CRITICAL: Authenticity is key. The design must feel grounded in the agency's actual work history.
See workflow `11-asset-integration.md` for detailed implementation guide.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OFFICIAL CHANNELS & LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- **Main Website**: [https://www.thiinkmediagraphics.com](https://www.thiinkmediagraphics.com)
- **New Project Form**: [https://www.thiinkmediagraphics.com/new-project-form](https://www.thiinkmediagraphics.com/new-project-form)
- **Phone**: +1 (470) 837-3775
- **Email**: `Team@thiinkmediagraphics.com`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVELOPER QUICK REFERENCE (CHEATSHEET)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COPY-PASTE READY VALUES:

Colors (Tailwind):
```
bg-[#0A0A0A]  /* Obsidian - primary bg */
bg-[#242528]  /* Shark - cards */
bg-[#1A2B42]  /* Stone - footer */
text-[#F5F5F0]  /* Ivory - primary text */
text-[#9CA3AF]  /* Platinum - secondary text */
bg-[#D4A855]  /* Gold - accent */
bg-[#B8944A]  /* Gold Dim - hover */
```

Button Patterns:
```tsx
// Primary CTA (CORRECT)
className="bg-[#D4A855] text-[#242528] px-8 py-4 font-outfit uppercase tracking-widest text-sm hover:bg-[#B8944A] transition-colors duration-150"

// Secondary CTA
className="border border-[#F5F5F0] text-[#F5F5F0] px-8 py-4 font-outfit uppercase tracking-widest text-sm hover:border-[#D4A855] hover:text-[#D4A855] transition-colors duration-150"

// NEVER: bg-[#D4A855] text-white (fails contrast!)
```

Typography:
```tsx
// Hero Headline
className="font-josefin text-[clamp(2.5rem,5vw+1rem,5rem)] font-semibold tracking-tight leading-[1.1] text-[#F5F5F0]"

// Section Header
className="font-josefin text-[clamp(2rem,3vw+0.75rem,3.5rem)] font-medium tracking-tight text-[#F5F5F0]"

// Body Text
className="font-cormorant text-[clamp(1rem,0.25vw+0.9rem,1.125rem)] leading-[1.7] text-[#F5F5F0]"

// UI/Button Text
className="font-outfit text-sm uppercase tracking-[0.08em]"
```

Animation:
```tsx
// Apple Ease (use everywhere)
transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}

// Spring (modals, magnetic buttons)
transition={{ type: "spring", damping: 25, stiffness: 300 }}

// Stagger children
staggerChildren: 0.05

// Hover scale
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

Spacing:
```
py-20  /* Section spacing desktop (80px) */
py-12  /* Section spacing mobile (48px) */
gap-6  /* Component spacing (24px) */
gap-4  /* Element spacing (16px) */
gap-2  /* Tight spacing (8px) */
```

Shadows:
```
shadow-[0_4px_12px_rgba(0,0,0,0.5)]  /* Card shadow */
shadow-[0_0_20px_rgba(212,168,85,0.3)]  /* Gold glow */
```

Focus Ring:
```tsx
className="focus:outline-none focus:ring-2 focus:ring-[#D4A855] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
```

Breakpoints:
```
sm:  /* 640px */
md:  /* 768px - Tablet */
lg:  /* 1024px - Laptop */
xl:  /* 1280px */
2xl: /* 1440px - Desktop */
```

Common Patterns:
```tsx
// Glassmorphism Nav
className="backdrop-blur-md bg-[#0A0A0A]/80"

// Grayscale → Color Hover
className="grayscale hover:grayscale-0 transition-all duration-300"

// Gold Underline Animation
className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#D4A855] after:transition-all hover:after:left-0 hover:after:w-full"

// Card Hover Lift
className="transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg"
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF DESIGN SYSTEM SPECIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━