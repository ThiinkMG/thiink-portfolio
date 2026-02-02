// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA - JSON-LD for SEO
// ─────────────────────────────────────────────────────────────────────────────

interface StructuredDataProps {
    data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Organization Schema - for layout.tsx
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Thiink Media Graphics",
    url: "https://www.thiinkmediagraphics.com",
    logo: "https://www.thiinkmediagraphics.com/images/brand/logo-gold.svg",
    description:
        "Luxury design agency specializing in branding, web design, and visual identity. Where ancient wisdom meets digital innovation.",
    foundingDate: "2019",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-470-837-3775",
        contactType: "sales",
        email: "Team@thiinkmediagraphics.com",
    },
    sameAs: [
        "https://www.instagram.com/thiinkmediagraphics",
        "https://www.linkedin.com/company/thiinkmediagraphics",
    ],
};

// Local Business Schema
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thiink Media Graphics",
    image: "https://www.thiinkmediagraphics.com/images/brand/logo-gold.svg",
    "@id": "https://www.thiinkmediagraphics.com",
    url: "https://www.thiinkmediagraphics.com",
    telephone: "+1-470-837-3775",
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
    },
};

// Portfolio Item Schema Generator
export function createPortfolioSchema(project: {
    title: string;
    client: string;
    year: string;
    situation: string;
    heroImage: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        creator: {
            "@type": "Organization",
            name: "Thiink Media Graphics",
        },
        dateCreated: project.year,
        description: project.situation,
        image: `https://www.thiinkmediagraphics.com${project.heroImage}`,
    };
}
