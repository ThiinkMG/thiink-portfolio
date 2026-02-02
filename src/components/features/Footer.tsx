import { Text, SectionLabel } from "@/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";
// import { Linkedin, Instagram } from "lucide-react"; // Uncomment when social links are verified
import { SectionDivider } from "@/components/ui/SectionDivider";

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER - "The Archive"
// Charcoal Slate 4-column layout with museum typography
// ─────────────────────────────────────────────────────────────────────────────

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate border-t border-gold/10">
            {/* Main Footer Content */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 py-16 md:py-20">
                <div className="grid grid-cols-4 md:grid-cols-12 gap-8 md:gap-12">
                    {/* COL 1: BRAND */}
                    <div className="col-span-4 md:col-span-4 lg:col-span-3 flex flex-col gap-6">
                        <Link
                            href="/"
                            className="hover:opacity-80 transition-opacity duration-200"
                        >
                            <Image
                                src="/_design_references/Design Assets/Thiink MG Brand Assets/Logos/Full Logo - White.png"
                                alt="Thiink Media Graphics"
                                width={180}
                                height={45}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <Text className="text-sm text-marble/60 max-w-xs font-garamond leading-relaxed">
                            Merging ancient wisdom with digital innovation to craft timeless brand legacies.
                        </Text>
                        {/* Social links - Add when verified URLs are available
                        <div className="flex gap-4 text-marble/40">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gold transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gold transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                        */}
                    </div>

                    {/* COL 2: SERVICES */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 flex flex-col gap-4 mt-8 md:mt-0">
                        <SectionLabel className="text-gold/70">Services</SectionLabel>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "Core Identity", href: "https://www.thiinkmediagraphics.com/services/core-identity" },
                                { label: "Design Forge", href: "https://www.thiinkmediagraphics.com/services/design-forge" },
                                { label: "Web Artisan", href: "https://www.thiinkmediagraphics.com/services/web-artisan" },
                                { label: "Print Craft", href: "https://www.thiinkmediagraphics.com/services/print-craft-creations" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-marble/50 hover:text-gold transition-colors duration-200 font-garamond"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COL 3: EXPLORE */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 flex flex-col gap-4 mt-8 md:mt-0">
                        <SectionLabel className="text-gold/70">Explore</SectionLabel>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "2023 Portfolio", href: "https://testtmg.my.canva.site/thiinkmg-portfolio", external: true },
                                { label: "Blog", href: "https://www.thiinkmediagraphics.com/blog", external: true },
                                { label: "Pricing", href: "https://www.thiinkmediagraphics.com/pricing", external: true },
                                { label: "Contact", href: "https://www.thiinkmediagraphics.com/contact", external: true },
                            ].map((item) => (
                                <li key={item.label}>
                                    {'external' in item && item.external ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-marble/50 hover:text-gold transition-colors duration-200 font-garamond"
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-sm text-marble/50 hover:text-gold transition-colors duration-200 font-garamond"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COL 4: CONTACT */}
                    <div className="col-span-4 md:col-span-4 lg:col-span-3 flex flex-col gap-4 mt-8 lg:mt-0">
                        <SectionLabel className="text-gold/70">Contact</SectionLabel>
                        <div className="flex flex-col gap-3">
                            <a
                                href="tel:+14708373775"
                                className="font-garamond text-lg text-marble/80 hover:text-gold transition-colors duration-200"
                            >
                                +1 (470) 837-3775
                            </a>
                            <a
                                href="mailto:Team@thiinkmediagraphics.com"
                                className="font-outfit text-sm tracking-wide text-marble/50 hover:text-gold transition-colors duration-200"
                            >
                                Team@thiinkmediagraphics.com
                            </a>
                        </div>
                        <div className="mt-4">
                            <a
                                href="https://www.thiinkmediagraphics.com/new-project-form"
                                className="inline-flex items-center gap-2 border-b border-gold/50 text-gold font-outfit text-xs uppercase tracking-widest pb-1 hover:border-gold hover:text-gold-foil transition-colors duration-200 group"
                            >
                                Start a Conversation
                                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <SectionDivider variant="line" color="gold" className="opacity-30 mx-6 md:mx-12 xl:mx-20" />

            {/* BOTTOM BAR */}
            <div className="py-6">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-marble/30 font-outfit uppercase tracking-wider">
                    <p>© {year} Thiink Media Graphics. Forged in the digital realm.</p>
                    <div className="flex gap-6">
                        <a
                            href="https://www.thiinkmediagraphics.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gold transition-colors duration-200"
                        >
                            Privacy
                        </a>
                        <a
                            href="https://www.thiinkmediagraphics.com/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gold transition-colors duration-200"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
