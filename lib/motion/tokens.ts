/** Motion timing — shared by Framer Motion and GSAP */

export const EASE_STANDARD = [0.22, 1, 0.36, 1] as const
/** @deprecated Use EASE_STANDARD */
export const EASE_LUXURY = EASE_STANDARD

export const DURATION_PAGE = 0.38
export const DURATION_SECTION = 0.65
export const DURATION_MICRO = 0.22

export const STAGGER_CHILDREN = 0.06
export const STAGGER_GRID = 0.035

export const GSAP_EASE_OUT_STANDARD = 'power3.out'
/** @deprecated Use GSAP_EASE_OUT_STANDARD */
export const GSAP_EASE_OUT_LUXURY = GSAP_EASE_OUT_STANDARD

/** Framer Motion transition presets */
export const motionStandardTransition = {
  duration: DURATION_SECTION,
  ease: EASE_STANDARD,
} as const
/** @deprecated Use motionStandardTransition */
export const motionLuxuryTransition = motionStandardTransition

export const motionStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: STAGGER_CHILDREN, delayChildren: 0.06 },
  },
} as const

export const motionFadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: motionStandardTransition,
  },
} as const
