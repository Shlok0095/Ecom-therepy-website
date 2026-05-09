import { create } from 'zustand'

export type SceneQuality = 'off' | 'low' | 'high'

type EngineState = {
  quality: SceneQuality
  reducedMotion: boolean
  /** Normalized document scroll or Lenis scroll */
  scrollY: number
  scrollVelocity: number
  /** 0..1 approximate page progress */
  scrollProgress: number
  lenisActive: boolean

  setQuality: (q: SceneQuality) => void
  setReducedMotion: (v: boolean) => void
  setScroll: (y: number, velocity: number) => void
  setLenisActive: (v: boolean) => void
}

function computeProgress(scrollY: number): number {
  if (typeof window === 'undefined' || typeof document === 'undefined') return 0
  const doc = document.documentElement
  const max = Math.max(1, doc.scrollHeight - window.innerHeight)
  return Math.min(1, Math.max(0, scrollY / max))
}

export const useEngineStore = create<EngineState>((set) => ({
  quality: 'high',
  reducedMotion: false,
  scrollY: 0,
  scrollVelocity: 0,
  scrollProgress: 0,
  lenisActive: false,

  setQuality: (quality) => set({ quality }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setScroll: (scrollY, scrollVelocity) =>
    set({
      scrollY,
      scrollVelocity,
      scrollProgress: computeProgress(scrollY),
    }),
  setLenisActive: (lenisActive) => set({ lenisActive }),
}))
