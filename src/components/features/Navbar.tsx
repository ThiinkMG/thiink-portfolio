"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { easing } from "@/lib/motion";

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR - Frosted Amber Glassmorphism
// Sticky navigation with hide-on-scroll and glass effect
// Mobile menu with full-screen overlay
// ─────────────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "https://www.thiinkmediagraphics.com/contact", external: true },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isHidden, setIsHidden] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const lastScrollY = React.useRef(0);

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Close menu on escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isMobileMenuOpen]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastScrollY.current;

        // Show/Hide logic - hide on scroll down, show on scroll up
        if (Math.abs(diff) > 5) {
            if (diff > 0 && latest > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }

        // Glass/Shrink logic - activate glass effect after scrolling
        setIsScrolled(latest > 50);
        lastScrollY.current = latest;
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                // Glassmorphism effect when scrolled
                isScrolled
                    ? "h-16 glass-amber shadow-lg shadow-gold/5 border-b border-gold/10"
                    : "h-20 bg-transparent"
            )}
            initial={{ y: 0 }}
            animate={{ y: isHidden ? "-100%" : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="max-w-[1440px] mx-auto px-5 md:px-12 xl:px-20 h-full flex items-center justify-between">
                {/* ─── LOGO ─── */}
                <Link
                    href="/"
                    className="relative z-50 hover:opacity-80 transition-opacity duration-200"
                >
                    <Image
                        src="/_design_references/Design Assets/Thiink MG Brand Assets/Logos/Full Logo - White.png"
                        alt="Thiink Media Graphics"
                        width={160}
                        height={40}
                        className="h-8 md:h-10 w-auto"
                        priority
                    />
                </Link>

                {/* ─── DESKTOP NAV ─── */}
                <nav className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-8 mr-8">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="relative group">
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-cormorant-sc text-sm uppercase tracking-widest text-marble/80 hover:text-gold transition-colors duration-200"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <MagneticLink
                                        href={item.href}
                                        className="font-cormorant-sc text-sm uppercase tracking-widest text-marble/80 hover:text-gold transition-colors duration-200"
                                    >
                                        {item.label}
                                    </MagneticLink>
                                )}
                                {/* Animated underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300 ease-out" />
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://www.thiinkmediagraphics.com/new-project-form"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="primary"
                            size={isScrolled ? "sm" : "md"}
                            className="font-outfit uppercase tracking-wider"
                        >
                            Start Project
                        </Button>
                    </a>
                </nav>

                {/* ─── MOBILE MENU TRIGGER ─── */}
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-marble p-2 hover:text-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-museum rounded-sm relative z-50"
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="sr-only">Menu</span>
                    {/* Animated hamburger to X */}
                    <div className="w-6 h-5 relative">
                        <span
                            className={cn(
                                "absolute left-0 w-6 h-0.5 bg-current transition-all duration-300",
                                isMobileMenuOpen ? "top-2 rotate-45" : "top-0"
                            )}
                            aria-hidden="true"
                        />
                        <span
                            className={cn(
                                "absolute left-0 top-2 w-6 h-0.5 bg-current transition-all duration-300",
                                isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                            )}
                            aria-hidden="true"
                        />
                        <span
                            className={cn(
                                "absolute left-0 h-0.5 bg-current transition-all duration-300",
                                isMobileMenuOpen ? "top-2 w-6 -rotate-45" : "top-4 w-4"
                            )}
                            aria-hidden="true"
                        />
                    </div>
                </button>
            </div>

            {/* ─── MOBILE MENU OVERLAY ─── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: easing.apple }}
                        className="fixed inset-0 z-40 bg-museum/98 backdrop-blur-md md:hidden"
                    >
                        {/* Menu Content */}
                        <nav className="flex flex-col items-center justify-center h-full px-6">
                            {/* Navigation Links */}
                            <ul className="space-y-8 text-center mb-12">
                                {NAV_ITEMS.map((item, index) => (
                                    <motion.li
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1,
                                            ease: easing.apple,
                                        }}
                                    >
                                        {item.external ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="font-cinzel text-3xl text-marble hover:text-gold transition-colors duration-200"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="font-cinzel text-3xl text-marble hover:text-gold transition-colors duration-200"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.4,
                                    delay: NAV_ITEMS.length * 0.1,
                                    ease: easing.apple,
                                }}
                            >
                                <a
                                    href="https://www.thiinkmediagraphics.com/new-project-form"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Button variant="primary" size="lg" className="font-outfit uppercase tracking-wider">
                                        Start a Project
                                    </Button>
                                </a>
                            </motion.div>

                            {/* Decorative divider */}
                            <motion.div
                                className="mt-16 flex items-center gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <span className="w-12 h-px bg-gold/30" />
                                <span className="font-cormorant-sc text-xs uppercase tracking-widest text-marble/40">
                                    Est. 2019
                                </span>
                                <span className="w-12 h-px bg-gold/30" />
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
