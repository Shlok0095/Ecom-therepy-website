/** Breakpoints & budgets — single source for adaptive rendering */

export const QUALITY_BREAKPOINT_PX = 768

export const DPR = {
  high: { min: 1, max: 2 },
  low: { min: 1, max: 1.35 },
  off: { min: 1, max: 1 },
} as const

export const PARTICLES = {
  high: 720,
  low: 280,
} as const

/** Lenis tuning (unused when native scroll is enabled) */
export const LENIS_LERP = 0.085
export const LENIS_WHEEL_MULTIPLIER = 0.92
