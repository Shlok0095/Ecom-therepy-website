'use client'

import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

import { useSceneQuality } from '@/components/canvas/SceneManager'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useCanvasReady } from '@/hooks/useCanvasReady'

const WebGLHeroLayer = dynamic(() => import('@/components/scenes/home/WebGLHeroLayer'), {
  ssr: false,
})

export type HeroExperienceProps = {
  children: ReactNode
}

/**
 * DOM-first hero shell: WebGL island behind content (hydration-safe via dynamic import).
 */
export function HeroExperience({ children }: HeroExperienceProps) {
  const reduced = useReducedMotion()
  const quality = useSceneQuality()
  const { ref, shouldRender } = useCanvasReady({ latch: true })

  const showWebgl = !reduced && quality !== 'off' && shouldRender

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col overflow-hidden bg-void pb-16 lg:flex-row lg:pb-0"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        {showWebgl ? (
          <WebGLHeroLayer />
        ) : (
          <div className="h-full w-full bg-mesh-hero" aria-hidden />
        )}
      </div>

      {children}
    </section>
  )
}
