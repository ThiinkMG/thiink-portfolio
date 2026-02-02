import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Established in 2019, Thiink Media Graphics transcends traditional design agencies. Where ancient wisdom meets digital innovation. Atlanta-based luxury design agency.",
    openGraph: {
        title: "About | Thiink Media Graphics",
        description:
            "Guardians of timeless creative vision, merging ancient wisdom with digital innovation.",
        url: "https://www.thiinkmediagraphics.com/about",
    },
    alternates: {
        canonical: "/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
