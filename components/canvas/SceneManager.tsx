'use client'

import { useEffect, type ReactNode } from 'react'

import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { SceneQuality } from '@/stores/engineStore'
import { useEngineStore } from '@/stores/engineStore'

export type { SceneQuality } from '@/stores/engineStore'

/**
 * Adaptive GPU tier + motion preference → drives Canvas/post/particles site-wide.
 */
export function SceneQualityProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()
  const setReducedMotion = useEngineStore((s) => s.setReducedMotion)
  const setQuality = useEngineStore((s) => s.setQuality)

  useEffect(() => {
    setReducedMotion(reduced)
  }, [reduced, setReducedMotion])

  useEffect(() => {
    if (reduced) {
      setQuality('off')
      return
    }

    const narrow = window.matchMedia('(max-width: 768px)')
    const coarse = window.matchMedia('(pointer: coarse)')
    const lowPower =
      typeof navigator !== 'undefined' &&
      'connection' in navigator &&
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData

    const apply = () => {
      if (lowPower || narrow.matches || coarse.matches) setQuality('low')
      else setQuality('high')
    }

    apply()
    narrow.addEventListener('change', apply)
    coarse.addEventListener('change', apply)
    return () => {
      narrow.removeEventListener('change', apply)
      coarse.removeEventListener('change', apply)
    }
  }, [reduced, setQuality])

  return <>{children}</>
}

export function useSceneQuality(): SceneQuality {
  return useEngineStore((s) => s.quality)
}
