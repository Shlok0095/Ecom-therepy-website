'use client'

import { useEffect, useState } from 'react'

/**
 * Lightweight dev HUD — enable with NEXT_PUBLIC_ENGINE_PERF=1
 * (avoid drei Stats inside every Canvas; keeps prod bundle clean).
 */
export function PerformanceMonitor() {
  const [fps, setFps] = useState(0)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return
    if (process.env.NEXT_PUBLIC_ENGINE_PERF !== '1') return

    let frames = 0
    let last = performance.now()
    let id = 0
    let cancelled = false

    const loop = (now: number) => {
      if (cancelled) return
      frames += 1
      const dt = now - last
      if (dt >= 500) {
        setFps(Math.round((frames / dt) * 1000))
        frames = 0
        last = now
      }
      id = requestAnimationFrame(loop)
    }

    id = requestAnimationFrame(loop)
    return () => {
      cancelled = true
      cancelAnimationFrame(id)
    }
  }, [])

  if (process.env.NODE_ENV !== 'development' || process.env.NEXT_PUBLIC_ENGINE_PERF !== '1') {
    return null
  }

  return (
    <div className="pointer-events-none fixed bottom-3 right-3 z-[10000] font-mono text-[10px] uppercase tracking-widest text-white/50">
      fps ~{fps}
    </div>
  )
}
