'use client'

import type { ReactNode } from 'react'

import { DPR_CAP_DESKTOP, DPR_CAP_MOBILE, DPR_CAP_LOW_POWER } from '@/lib/three/constants'

import { CanvasRoot } from './CanvasRoot'
import { useSceneQuality } from './SceneManager'

export function AdaptiveCanvas({ children }: { children: ReactNode }) {
  const quality = useSceneQuality()

  const dpr: [number, number] =
    quality === 'high'
      ? [1, DPR_CAP_DESKTOP]
      : quality === 'low'
        ? [1, DPR_CAP_MOBILE]
        : [1, DPR_CAP_LOW_POWER]

  if (quality === 'off') return null

  return (
    <div className="absolute inset-0 h-full w-full" aria-hidden>
      <CanvasRoot dpr={dpr} frameloop={quality === 'high' ? 'always' : 'demand'}>
        {children}
      </CanvasRoot>
    </div>
  )
}
