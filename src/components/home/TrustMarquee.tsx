// ─────────────────────────────────────────────────────────────────────────────
// TRUST MARQUEE - "Trusted by Industry Leaders"
// Scrolling logo marquee showing partner/client brands
// Supports both text names and logo images via CMS toggle
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";

interface Logo {
    name: string;
    image?: string;
}

interface TrustMarqueeProps {
    title?: string;
    displayMode?: "text" | "image";
    logos?: Logo[];
    // Legacy support for string array
    legacyLogos?: string[];
}

// Default logos for fallback
const DEFAULT_LOGOS: Logo[] = [
    { name: "GOOGLE" },
    { name: "DISNEY" },
    { name: "HULU" },
    { name: "WIX" },
    { name: "PRINTFUL" },
    { name: "MOO" },
    { name: "STARZ" },
    { name: "BBB" },
];

export function TrustMarquee({
    title = "Trusted by Industry Leaders",
    displayMode = "text",
    logos,
    legacyLogos,
}: TrustMarqueeProps) {
    // Convert legacy string array to Logo objects if needed
    const normalizedLogos: Logo[] = logos?.length
        ? logos
        : legacyLogos?.map((name) => ({ name })) || DEFAULT_LOGOS;

    // Triple the logos for seamless infinite scroll
    const tripleLogos = [...normalizedLogos, ...normalizedLogos, ...normalizedLogos];

    const renderLogo = (logo: Logo, index: number, prefix: string = "") => {
        const key = `${prefix}${index}`;

        if (displayMode === "image" && logo.image) {
            return (
                <div
                    key={key}
                    className="mx-8 md:mx-16 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300"
                >
                    <div className="relative w-24 h-12 md:w-32 md:h-16">
                        <Image
                            src={logo.image}
                            alt={logo.name}
                            fill
                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>
            );
        }

        // Text mode (default) or image mode without image
        return (
            <div
                key={key}
                className="mx-8 md:mx-16 flex items-center justify-center opacity-30 hover:opacity-80 transition-opacity duration-300"
            >
                <span className="font-josefin font-bold text-3xl md:text-4xl text-ivory tracking-tighter">
                    {logo.name}
                </span>
            </div>
        );
    };

    return (
        <div className="w-full bg-shark py-12 border-y border-ivory/5 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-5 mb-6">
                <p className="font-outfit text-xs text-center uppercase tracking-[0.2em] text-platinum/40">
                    {title}
                </p>
            </div>

            {/* MARQUEE CONTAINER */}
            <div className="relative flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {tripleLogos.map((logo, i) => renderLogo(logo, i))}
                </div>

                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {tripleLogos.map((logo, i) => renderLogo(logo, i, "clone-"))}
                </div>
            </div>
        </div>
    );
}
