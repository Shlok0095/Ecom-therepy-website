'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useEngineStore } from '@/stores/engineStore'

/**
 * Native document scrolling + ScrollTrigger (no Lenis) — avoids smooth-scroll + scrub jank on mid-tier GPUs.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    useEngineStore.getState().setLenisActive(false)
    ScrollTrigger.refresh()
  }, [])

  return <>{children}</>
}
