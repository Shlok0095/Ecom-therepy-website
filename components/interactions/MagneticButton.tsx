'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { useRef } from 'react'

import { cn } from '@/lib/cn'
import { useEngineStore } from '@/stores/engineStore'

export type MagneticButtonProps = {
  children: ReactNode
  className?: string
  /** 0 = off, 1 = strong */
  strength?: number
}

/**
 * Magnetic hover drift — springs back at rest; bypassed when reduced motion or coarse pointer.
 */
export function MagneticButton({ children, className, strength = 0.42 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useEngineStore((s) => s.reducedMotion)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 280, damping: 30, mass: 0.35 })
  const sy = useSpring(y, { stiffness: 280, damping: 30, mass: 0.35 })

  const onMove = (e: ReactPointerEvent) => {
    if (reducedMotion) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    x.set((e.clientX - cx) * strength * 0.09)
    y.set((e.clientY - cy) * strength * 0.09)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (reducedMotion) {
    return <span className={cn('inline-flex', className)}>{children}</span>
  }

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn('inline-flex will-change-transform', className)}
    >
      {children}
    </motion.span>
  )
}
