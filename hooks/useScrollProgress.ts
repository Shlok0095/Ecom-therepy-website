'use client'

import { useEffect, useState, type RefObject } from 'react'

/**
 * Normalized scroll progress [0,1] through an element's viewport journey.
 */
export function useScrollProgress(targetRef: RefObject<Element | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = targetRef.current
    if (!el || typeof window === 'undefined') return

    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight || 1
        const raw = (vh - rect.top) / (vh + rect.height)
        setProgress(Math.min(1, Math.max(0, raw)))
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [targetRef])

  return progress
}
