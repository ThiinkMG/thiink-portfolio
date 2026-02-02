import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work",
    description:
        "Explore our portfolio of premium branding, web design, and visual identity projects. See how we've transformed brands with timeless design.",
    openGraph: {
        title: "Portfolio | Thiink Media Graphics",
        description: "A curated collection of brand identities, digital experiences, and creative projects.",
        url: "https://www.thiinkmediagraphics.com/work",
    },
    alternates: {
        canonical: "/work",
    },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return children;
}
