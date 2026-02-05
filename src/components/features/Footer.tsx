import { Text, SectionLabel } from "@/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER - "The Archive"
// Charcoal Slate 4-column layout with museum typography
// ─────────────────────────────────────────────────────────────────────────────

interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    logo?: string;
    tagline?: string;
    copyright?: string;
    serviceLinks?: FooterLink[];
    exploreLinks?: FooterLink[];
    contact?: {
        email?: string;
        phone?: string;
        newProjectForm?: string;
    };
    social?: {
        instagram?: string;
        linkedin?: string;
    };
}

const DEFAULT_SERVICE_LINKS: FooterLink[] = [
    { label: "Core Identity", href: "https://www.thiinkmediagraphics.com/services/core-identity" },
    { label: "Design Forge", href: "https://www.thiinkmediagraphics.com/services/design-forge" },
    { label: "Web Artisan", href: "https://www.thiinkmediagraphics.com/services/web-artisan" },
    { label: "Print Craft", href: "https://www.thiinkmediagraphics.com/services/print-craft-creations" },
];

const DEFAULT_EXPLORE_LINKS: FooterLink[] = [
    { label: "2023 Portfolio", href: "https://testtmg.my.canva.site/thiinkmg-portfolio" },
    { label: "Blog", href: "https://www.thiinkmediagraphics.com/blog" },
    { label: "Pricing", href: "https://www.thiinkmediagraphics.com/pricing" },
    { label: "Contact", href: "https://www.thiinkmediagraphics.com/contact" },
];

export function Footer({
    logo = "/images/brand/logos/full-logo-white.png",
    tagline = "Merging ancient wisdom with digital innovation to craft timeless brand legacies.",
    copyright = "Thiink Media Graphics",
    serviceLinks = DEFAULT_SERVICE_LINKS,
    exploreLinks = DEFAULT_EXPLORE_LINKS,
    contact = {
        email: "Team@thiinkmediagraphics.com",
        phone: "+1 (470) 837-3775",
        newProjectForm: "https://www.thiinkmediagraphics.com/new-project-form",
    },
    social = {
        instagram: "https://instagram.com/thiinkmediagraphics",
        linkedin: "https://linkedin.com/company/thiinkmediagraphics",
    },
}: FooterProps) {
    const year = new Date().getFullYear();
    const isExternalLink = (href: string) => href.startsWith("http");

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
                                src={logo}
                                alt="Thiink Media Graphics"
                                width={180}
                                height={45}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <Text className="text-sm text-marble/60 max-w-xs font-garamond leading-relaxed">
                            {tagline}
                        </Text>
                        {/* Social links */}
                        {(social?.instagram || social?.linkedin) && (
                            <div className="flex gap-4 text-marble/40">
                                {social?.instagram && (
                                    <a
                                        href={social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gold transition-colors duration-200"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                )}
                                {social?.linkedin && (
                                    <a
                                        href={social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gold transition-colors duration-200"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* COL 2: SERVICES */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 flex flex-col gap-4 mt-8 md:mt-0">
                        <SectionLabel className="text-gold/70">Services</SectionLabel>
                        <ul className="flex flex-col gap-3">
                            {serviceLinks.map((item) => (
                                <li key={item.label}>
                                    {isExternalLink(item.href) ? (
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

                    {/* COL 3: EXPLORE */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 flex flex-col gap-4 mt-8 md:mt-0">
                        <SectionLabel className="text-gold/70">Explore</SectionLabel>
                        <ul className="flex flex-col gap-3">
                            {exploreLinks.map((item) => (
                                <li key={item.label}>
                                    {isExternalLink(item.href) ? (
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
                            {contact?.phone && (
                                <a
                                    href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                                    className="font-garamond text-lg text-marble/80 hover:text-gold transition-colors duration-200"
                                >
                                    {contact.phone}
                                </a>
                            )}
                            {contact?.email && (
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="font-outfit text-sm tracking-wide text-marble/50 hover:text-gold transition-colors duration-200"
                                >
                                    {contact.email}
                                </a>
                            )}
                        </div>
                        {contact?.newProjectForm && (
                            <div className="mt-4">
                                <a
                                    href={contact.newProjectForm}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border-b border-gold/50 text-gold font-outfit text-xs uppercase tracking-widest pb-1 hover:border-gold hover:text-gold-foil transition-colors duration-200 group"
                                >
                                    Start a Conversation
                                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <SectionDivider variant="line" color="gold" className="opacity-30 mx-6 md:mx-12 xl:mx-20" />

            {/* BOTTOM BAR */}
            <div className="py-6">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-marble/30 font-outfit uppercase tracking-wider">
                    <p>© {year} {copyright}. Forged in the digital realm.</p>
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
