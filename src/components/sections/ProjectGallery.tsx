"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Caption } from "@/components/ui/Typography";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/lib/data";

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT GALLERY - Grid with Lightbox
// Museum-style image gallery for case studies
// ─────────────────────────────────────────────────────────────────────────────

interface ProjectGalleryProps {
    images: ProjectImage[];
    className?: string;
}

export function ProjectGallery({ images, className }: ProjectGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const openLightbox = (index: number) => {
        setActiveIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "";
    };

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen]);

    return (
        <>
            {/* Gallery Grid */}
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
                {images.map((image, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                        <GalleryItem
                            image={image}
                            index={index}
                            onClick={() => openLightbox(index)}
                        />
                    </ScrollReveal>
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                isOpen={lightboxOpen}
                images={images}
                activeIndex={activeIndex}
                onClose={closeLightbox}
                onNext={goNext}
                onPrev={goPrev}
            />
        </>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY ITEM - Individual image card
// ─────────────────────────────────────────────────────────────────────────────

interface GalleryItemProps {
    image: ProjectImage;
    index: number;
    onClick: () => void;
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
    return (
        <button
            onClick={onClick}
            className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parchment rounded-sm"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ink/5 border border-ink/10">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
                {/* Expand indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-marble/90 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Caption - Museum placard style */}
            {image.caption && (
                <div className="mt-3 pl-2 border-l-2 border-gold/30">
                    <Caption className="text-ink/60">{image.caption}</Caption>
                </div>
            )}
        </button>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX - Fullscreen image viewer
// ─────────────────────────────────────────────────────────────────────────────

interface LightboxProps {
    isOpen: boolean;
    images: ProjectImage[];
    activeIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

function Lightbox({ isOpen, images, activeIndex, onClose, onNext, onPrev }: LightboxProps) {
    const currentImage = images[activeIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-museum/95 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-marble/10 hover:bg-marble/20 flex items-center justify-center text-marble transition-colors"
                        aria-label="Close lightbox"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation - Previous */}
                    {images.length > 1 && (
                        <button
                            onClick={onPrev}
                            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-marble/10 hover:bg-marble/20 flex items-center justify-center text-marble transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    {/* Navigation - Next */}
                    {images.length > 1 && (
                        <button
                            onClick={onNext}
                            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-marble/10 hover:bg-marble/20 flex items-center justify-center text-marble transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    )}

                    {/* Image Container */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            className="relative z-10 w-full max-w-6xl mx-4 md:mx-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: easing.apple }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/10] bg-ink/20 rounded-sm overflow-hidden">
                                <Image
                                    src={currentImage.src}
                                    alt={currentImage.alt}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 90vw"
                                    priority
                                />
                            </div>

                            {/* Caption and counter */}
                            <div className="mt-4 flex items-center justify-between text-marble/70">
                                <p className="font-garamond text-sm">
                                    {currentImage.caption || currentImage.alt}
                                </p>
                                <span className="font-cormorant-sc text-xs tracking-widest">
                                    {activeIndex + 1} / {images.length}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ProjectGallery;
