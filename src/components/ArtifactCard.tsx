"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { easing, duration, cardHover } from "@/lib/motion";
import { Caption } from "@/components/ui/Typography";
import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// ARTIFACT CARD
// Museum-style framed portfolio card with placard caption
// ─────────────────────────────────────────────────────────────────────────────

interface ArtifactCardProps {
    /** Project title */
    title: string;
    /** Client name */
    client: string;
    /** Project year */
    year: string;
    /** Project category/type */
    category: string;
    /** Image source */
    image: string;
    /** Image alt text */
    imageAlt?: string;
    /** Link to project page */
    href: string;
    /** Figure number for museum placard */
    figureNumber?: number;
    /** Card size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes */
    className?: string;
}

export function ArtifactCard({
    title,
    client,
    year,
    category,
    image,
    imageAlt,
    href,
    figureNumber,
    size = 'md',
    className,
}: ArtifactCardProps) {
    const sizeClasses = {
        sm: 'aspect-[4/3]',
        md: 'aspect-[3/4]',
        lg: 'aspect-[16/9]',
    };

    return (
        <Link href={href} className={cn("group block", className)}>
            <motion.article
                className="relative"
                whileHover="hover"
                initial="initial"
            >
                {/* ─── OUTER FRAME ─── */}
                <div className={cn(
                    "relative overflow-hidden",
                    "bg-slate border-2 border-platinum/10",
                    "transition-all duration-300",
                    "group-hover:border-gold/30",
                    "group-hover:shadow-[0_0_30px_rgba(212,168,85,0.15)]"
                )}>
                    {/* ─── INNER FRAME (Gold border on hover) ─── */}
                    <div className="relative m-2 overflow-hidden">
                        {/* ─── IMAGE CONTAINER ─── */}
                        <motion.div
                            className={cn("relative", sizeClasses[size])}
                            variants={{
                                initial: { scale: 1 },
                                hover: { scale: 1.05 },
                            }}
                            transition={{ duration: duration.base, ease: easing.apple }}
                        >
                            <Image
                                src={image}
                                alt={imageAlt || `${title} - ${client}`}
                                fill
                                className={cn(
                                    "object-cover",
                                    "grayscale group-hover:grayscale-0",
                                    "transition-all duration-500"
                                )}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />

                            {/* ─── HOVER OVERLAY ─── */}
                            <div className={cn(
                                "absolute inset-0",
                                "bg-gradient-to-t from-museum/80 via-museum/20 to-transparent",
                                "opacity-0 group-hover:opacity-100",
                                "transition-opacity duration-300"
                            )} />

                            {/* ─── GOLD GLOW RING (Hover) ─── */}
                            <div className={cn(
                                "absolute inset-0",
                                "ring-2 ring-inset ring-gold/0 group-hover:ring-gold/40",
                                "transition-all duration-300"
                            )} />

                            {/* ─── VIEW PROJECT CTA ─── */}
                            <motion.div
                                className={cn(
                                    "absolute inset-0 flex items-center justify-center",
                                    "opacity-0 group-hover:opacity-100",
                                    "transition-opacity duration-300"
                                )}
                                variants={{
                                    initial: { y: 20 },
                                    hover: { y: 0 },
                                }}
                                transition={{ duration: duration.fast, ease: easing.apple }}
                            >
                                <span className={cn(
                                    "px-4 py-2",
                                    "font-outfit text-[clamp(0.875rem,0.2vw+0.8rem,0.9375rem)] font-medium uppercase tracking-wider",
                                    "text-shark bg-gold",
                                    "shadow-lg"
                                )}>
                                    View Project
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* ─── MUSEUM PLACARD ─── */}
                <div className="mt-4 space-y-1">
                    {/* Figure number & category */}
                    <div className="flex items-center gap-2">
                        {figureNumber && (
                            <Caption>Fig. {figureNumber}.</Caption>
                        )}
                        <Caption className="text-platinum/50">{category}</Caption>
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                        "font-cinzel text-[clamp(1.125rem,0.5vw+0.9rem,1.375rem)] font-medium text-ivory",
                        "group-hover:text-gold transition-colors duration-300"
                    )}>
                        {title}
                    </h3>

                    {/* Client & Year */}
                    <p className="font-garamond text-[clamp(0.9375rem,0.2vw+0.85rem,1rem)] text-platinum/70 italic">
                        {client}, {year}
                    </p>
                </div>
            </motion.article>
        </Link>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// ARTIFACT CARD GRID
// Container for ArtifactCards with proper spacing
// ─────────────────────────────────────────────────────────────────────────────

interface ArtifactGridProps {
    children: React.ReactNode;
    /** Number of columns */
    columns?: 2 | 3 | 4;
    /** Gap size */
    gap?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes */
    className?: string;
}

export function ArtifactGrid({
    children,
    columns = 3,
    gap = 'md',
    className,
}: ArtifactGridProps) {
    const columnClasses = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };

    const gapClasses = {
        sm: 'gap-4',
        md: 'gap-6 md:gap-8',
        lg: 'gap-8 md:gap-12',
    };

    return (
        <div className={cn(
            "grid",
            columnClasses[columns],
            gapClasses[gap],
            className
        )}>
            {children}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED ARTIFACT CARD
// Larger variant for hero project displays
// ─────────────────────────────────────────────────────────────────────────────

interface FeaturedArtifactProps extends Omit<ArtifactCardProps, 'size'> {
    /** Brief description */
    description?: string;
}

export function FeaturedArtifact({
    title,
    client,
    year,
    category,
    image,
    imageAlt,
    href,
    figureNumber,
    description,
    className,
}: FeaturedArtifactProps) {
    return (
        <Link href={href} className={cn("group block", className)}>
            <motion.article
                className="relative grid md:grid-cols-2 gap-8 items-center"
                whileHover="hover"
                initial="initial"
            >
                {/* Image Section */}
                <div className={cn(
                    "relative overflow-hidden",
                    "bg-slate border-2 border-platinum/10",
                    "transition-all duration-300",
                    "group-hover:border-gold/30",
                    "group-hover:shadow-[0_0_40px_rgba(212,168,85,0.2)]"
                )}>
                    <div className="relative m-3 overflow-hidden">
                        <motion.div
                            className="relative aspect-[4/3]"
                            variants={{
                                initial: { scale: 1 },
                                hover: { scale: 1.03 },
                            }}
                            transition={{ duration: duration.base, ease: easing.apple }}
                        >
                            <Image
                                src={image}
                                alt={imageAlt || `${title} - ${client}`}
                                fill
                                className={cn(
                                    "object-cover",
                                    "grayscale group-hover:grayscale-0",
                                    "transition-all duration-500"
                                )}
                                priority
                            />
                            <div className={cn(
                                "absolute inset-0",
                                "ring-2 ring-inset ring-gold/0 group-hover:ring-gold/40",
                                "transition-all duration-300"
                            )} />
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                    {/* Figure & Category */}
                    <div className="flex items-center gap-2">
                        {figureNumber && (
                            <Caption>Fig. {figureNumber}.</Caption>
                        )}
                        <Caption className="text-platinum/50">{category}</Caption>
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                        "font-cinzel text-[clamp(1.5rem,2vw+0.75rem,2rem)] font-medium text-ivory",
                        "group-hover:text-gold transition-colors duration-300"
                    )}>
                        {title}
                    </h3>

                    {/* Description */}
                    {description && (
                        <p className="font-garamond text-[clamp(1rem,0.25vw+0.9rem,1.125rem)] text-marble/80 leading-relaxed">
                            {description}
                        </p>
                    )}

                    {/* Client & Year */}
                    <p className="font-garamond text-[clamp(0.9375rem,0.2vw+0.85rem,1rem)] text-platinum/70 italic">
                        {client}, {year}
                    </p>

                    {/* CTA */}
                    <div className="pt-2">
                        <span className={cn(
                            "inline-flex items-center gap-2",
                            "font-outfit text-[clamp(0.875rem,0.2vw+0.8rem,0.9375rem)] font-medium uppercase tracking-wider",
                            "text-gold group-hover:text-bronze",
                            "transition-colors duration-200"
                        )}>
                            View Case Study
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}

export default ArtifactCard;
