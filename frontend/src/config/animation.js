// Animation configuration - centralized timings and easings

export const ANIMATION_CONFIG = {
  // Intro sequence
  intro: {
    letterStagger: 0.04,
    letterDuration: 0.35,
    logoStrokeDuration: 0.9,
    totalDuration: 2.5,
    glowPulse: 1.2,
  },
  
  // General transitions
  transitions: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.6,
    verySlow: 0.9,
  },
  
  // Scroll animations
  scroll: {
    circleExpand: 0.9,
    cardReveal: 0.6,
    sectionFadeIn: 0.6,
  },
  
  // Easing functions
  easing: {
    easeOut: [0.16, 1, 0.3, 1],
    circOut: [0, 0.55, 0.45, 1],
    spring: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// Framer Motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
