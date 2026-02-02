/**
 * Motion Constants - "Motion should whisper, not shout"
 *
 * Framer Motion configuration for the Digital Louvre aesthetic.
 * Apple-inspired easing with deliberate, elegant timing.
 */

// ─────────────────────────────────────────────────────────────────────────────
// EASING CURVES
// ─────────────────────────────────────────────────────────────────────────────

export const easing = {
    /** Apple's signature ease - smooth deceleration */
    apple: [0.16, 1, 0.3, 1] as const,
    /** Standard smooth ease */
    smooth: [0.4, 0, 0.2, 1] as const,
    /** Bouncy spring for playful interactions */
    bounce: [0.34, 1.56, 0.64, 1] as const,
    /** Sharp ease-out for quick exits */
    out: [0, 0, 0.2, 1] as const,
    /** Deliberate ease-in for entrances */
    in: [0.4, 0, 1, 1] as const,
};

// ─────────────────────────────────────────────────────────────────────────────
// DURATION (in seconds)
// ─────────────────────────────────────────────────────────────────────────────

export const duration = {
    /** Instant feedback (hover states) */
    instant: 0.1,
    /** Fast transitions (150ms) */
    fast: 0.15,
    /** Normal transitions (200ms) */
    normal: 0.2,
    /** Base animations (300ms) */
    base: 0.3,
    /** Slow, deliberate animations (500ms) */
    slow: 0.5,
    /** Page transitions (800ms) */
    page: 0.8,
    /** Hero animations (1000ms) */
    hero: 1,
};

// ─────────────────────────────────────────────────────────────────────────────
// SPRING CONFIGURATIONS
// ─────────────────────────────────────────────────────────────────────────────

export const spring = {
    /** Gentle spring for modals and sheets */
    gentle: { damping: 25, stiffness: 200 },
    /** Snappy spring for buttons */
    snappy: { damping: 30, stiffness: 400 },
    /** Bouncy spring for playful elements */
    bouncy: { damping: 15, stiffness: 300 },
    /** Stiff spring for quick snaps */
    stiff: { damping: 40, stiffness: 500 },
};

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

/** Fade up animation for scroll reveals */
export const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: duration.slow, ease: easing.apple }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: duration.fast, ease: easing.out }
    },
};

/** Fade in animation */
export const fadeIn = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: duration.base, ease: easing.smooth }
    },
    exit: {
        opacity: 0,
        transition: { duration: duration.fast }
    },
};

/** Scale up animation for modals */
export const scaleUp = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: duration.normal, ease: easing.apple }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: duration.fast, ease: easing.out }
    },
};

/** Slide in from left */
export const slideInLeft = {
    initial: { opacity: 0, x: -40 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: duration.slow, ease: easing.apple }
    },
    exit: {
        opacity: 0,
        x: -20,
        transition: { duration: duration.fast }
    },
};

/** Slide in from right */
export const slideInRight = {
    initial: { opacity: 0, x: 40 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: duration.slow, ease: easing.apple }
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: { duration: duration.fast }
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER CONFIGURATIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Stagger children animations */
export const stagger = {
    /** Fast stagger for lists (0.05s) */
    fast: { staggerChildren: 0.05 },
    /** Normal stagger (0.08s) */
    normal: { staggerChildren: 0.08 },
    /** Slow stagger for hero elements (0.12s) */
    slow: { staggerChildren: 0.12 },
    /** Very slow stagger for dramatic reveals (0.2s) */
    dramatic: { staggerChildren: 0.2 },
};

/** Container variants for stagger animations */
export const staggerContainer = {
    initial: {},
    animate: {
        transition: stagger.normal,
    },
};

/** Item variants for stagger children */
export const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: duration.slow, ease: easing.apple }
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// VIEWPORT CONFIGURATIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Default viewport settings for whileInView */
export const viewport = {
    /** Standard - trigger when 25% visible */
    default: { once: true, margin: '-100px' },
    /** Eager - trigger earlier */
    eager: { once: true, margin: '-50px' },
    /** Late - trigger when more visible */
    late: { once: true, margin: '-200px' },
    /** Repeating - animate every time */
    repeat: { once: false, margin: '-100px' },
};

// ─────────────────────────────────────────────────────────────────────────────
// HOVER ANIMATIONS
// ─────────────────────────────────────────────────────────────────────────────

/** Card hover effect */
export const cardHover = {
    scale: 1.02,
    transition: { duration: duration.fast, ease: easing.apple },
};

/** Button hover effect */
export const buttonHover = {
    scale: 1.05,
    transition: { type: 'spring', ...spring.snappy },
};

/** Image hover effect (grayscale to color) */
export const imageHover = {
    filter: 'grayscale(0%)',
    scale: 1.05,
    transition: { duration: duration.base, ease: easing.smooth },
};

// ─────────────────────────────────────────────────────────────────────────────
// PARALLAX HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Calculate parallax offset based on scroll progress
 * @param scrollProgress - 0 to 1 scroll progress
 * @param speed - Parallax speed multiplier (0.1 = 10% of scroll)
 */
export function getParallaxY(scrollProgress: number, speed: number = 0.15): number {
    return scrollProgress * speed * 100;
}
