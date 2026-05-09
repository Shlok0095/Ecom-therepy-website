'use client'

import { useLayoutEffect, useState } from 'react'

/**
 * `prefers-reduced-motion` — useLayoutEffect minimizes a one-frame flash of heavy motion/WebGL.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return reduced
}
