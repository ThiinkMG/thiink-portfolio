"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface MagneticLinkProps extends Omit<React.ComponentProps<typeof Link>, 'ref'> {
    children: React.ReactNode;
    isActive?: boolean;
    /** Enable magnetic hover effect (default: true) */
    magnetic?: boolean;
}

export function MagneticLink({
    className,
    children,
    isActive,
    href,
    onClick,
    magnetic = true,
    ...props
}: MagneticLinkProps) {
    const pathname = usePathname();
    const ref = React.useRef<HTMLAnchorElement>(null);

    // Magnetic effect state
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, spring.snappy);
    const ySpring = useSpring(y, spring.snappy);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!magnetic || !ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Subtle magnetic pull - 15% of distance
        const maxDistance = 6;
        const deltaX = (clientX - centerX) * 0.15;
        const deltaY = (clientY - centerY) * 0.15;

        x.set(Math.max(-maxDistance, Math.min(maxDistance, deltaX)));
        y.set(Math.max(-maxDistance, Math.min(maxDistance, deltaY)));
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const hrefString = typeof href === 'string' ? href : href.pathname || '';

        // Check if this is a hash link (starts with / and contains #)
        if (hrefString.includes('#')) {
            const [path, hash] = hrefString.split('#');
            const targetPath = path || '/';

            // If we're already on the target page, just scroll to the element
            if (pathname === targetPath || (pathname === '/' && targetPath === '/')) {
                e.preventDefault();
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Update URL without navigation
                    window.history.pushState(null, '', `${targetPath}#${hash}`);
                }
            }
            // Otherwise, let the Link handle navigation normally
        }

        // Call original onClick if provided
        onClick?.(e);
    };

    return (
        <Link
            ref={ref}
            href={href}
            onClick={handleClick}
            className={cn(
                "relative inline-block",
                className
            )}
            {...props}
        >
            <motion.span
                style={magnetic ? { x: xSpring, y: ySpring } : undefined}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative inline-block"
            >
                {children}
            </motion.span>
        </Link>
    );
}
