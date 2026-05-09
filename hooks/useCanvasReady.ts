'use client'

import { useEffect, useRef, useState } from 'react'

export type UseCanvasReadyOptions = IntersectionObserverInit & {
  /** Once intersected, keep rendering (hero stability) */
  latch?: boolean
}

/**
 * Mount heavy WebGL only when near viewport; optional latch for above-the-fold hero.
 */
export function useCanvasReady(options?: UseCanvasReadyOptions) {
  const { latch = true, rootMargin = '140px', threshold = 0.02 } = options ?? {}
  const ref = useRef<HTMLElement | null>(null) // section / div wrapper
  const [shouldRender, setShouldRender] = useState(false)
  const latchedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShouldRender(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting) {
          latchedRef.current = true
          setShouldRender(true)
        } else if (!latch || !latchedRef.current) {
          setShouldRender(false)
        }
      },
      { rootMargin, threshold }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [latch, rootMargin, threshold])

  return { ref, shouldRender }
}
