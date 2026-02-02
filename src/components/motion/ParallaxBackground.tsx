"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// PARALLAX BACKGROUND
// Creates a subtle parallax scrolling effect on background images
// Speed of 0.1-0.15 (10-15%) provides elegant, non-jarring motion
// ─────────────────────────────────────────────────────────────────────────────

interface ParallaxBackgroundProps {
    /** Image source path */
    src: string;
    /** Alt text for the image */
    alt?: string;
    /** Parallax speed (0.1 = 10% of scroll speed, 0.15 = 15%) */
    speed?: number;
    /** Base opacity of the image */
    opacity?: number;
    /** Additional CSS classes */
    className?: string;
    /** Whether to use Next.js Image component (better for large images) */
    useNextImage?: boolean;
}

export function ParallaxBackground({
    src,
    alt = "Background",
    speed = 0.12,
    opacity = 0.15,
    className = "",
    useNextImage = false,
}: ParallaxBackgroundProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Transform scroll progress to Y position
    // Negative speed moves image up as user scrolls down (natural parallax)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

    return (
        <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
            <motion.div
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
                style={{ y }}
            >
                {useNextImage ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover object-center"
                        style={{ opacity }}
                        priority={false}
                    />
                ) : (
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('${src}')`,
                            opacity,
                        }}
                    />
                )}
            </motion.div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PARALLAX WRAPPER
// Wraps content with parallax background
// ─────────────────────────────────────────────────────────────────────────────

interface ParallaxSectionProps {
    /** Background image source */
    backgroundSrc: string;
    /** Parallax speed */
    speed?: number;
    /** Background opacity */
    backgroundOpacity?: number;
    /** Gradient overlay (Tailwind classes) */
    overlay?: string;
    /** Section classes */
    className?: string;
    /** Content */
    children: React.ReactNode;
}

export function ParallaxSection({
    backgroundSrc,
    speed = 0.12,
    backgroundOpacity = 0.15,
    overlay,
    className = "",
    children,
}: ParallaxSectionProps) {
    return (
        <section className={`relative overflow-hidden ${className}`}>
            <ParallaxBackground
                src={backgroundSrc}
                speed={speed}
                opacity={backgroundOpacity}
            />
            {overlay && <div className={`absolute inset-0 ${overlay}`} />}
            <div className="relative">{children}</div>
        </section>
    );
}

export default ParallaxBackground;
