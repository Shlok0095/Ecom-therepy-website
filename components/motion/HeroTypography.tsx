'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { motionFadeUpItem, motionStaggerContainer } from '@/lib/motion/tokens'

/** Stagger root for hero copy stack — keeps typography semantic inside children. */
export function HeroIntroStack({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={motionStaggerContainer}
      initial="hidden"
      animate="show"
      className="max-w-xl"
    >
      {children}
    </motion.div>
  )
}

export function HeroFadeItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={motionFadeUpItem} className={className}>
      {children}
    </motion.div>
  )
}
