'use client'

import { useEffect } from 'react'

import { useEngineStore } from '@/stores/engineStore'

/** Keeps `engineStore` scroll in sync with native scrolling when Lenis is inactive. */
export function NativeScrollBridge() {
  const reducedMotion = useEngineStore((s) => s.reducedMotion)
  const lenisActive = useEngineStore((s) => s.lenisActive)

  useEffect(() => {
    if (!reducedMotion && lenisActive) return

    let lastY = window.scrollY
    let lastT = performance.now()

    const onScroll = () => {
      const y = window.scrollY
      const now = performance.now()
      const dt = Math.max(1, now - lastT)
      const vy = ((y - lastY) / dt) * 1000
      lastY = y
      lastT = now
      useEngineStore.getState().setScroll(y, vy)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reducedMotion, lenisActive])

  return null
}
