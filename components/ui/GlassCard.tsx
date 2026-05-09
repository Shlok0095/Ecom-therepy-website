import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type GlassCardProps = {
  children: ReactNode
  className?: string
  variant?: 'default' | 'hero'
}

/** Frosted glass panel — translucent layers similar to desktop shell UIs (e.g. Electron-style chrome). */
export default function GlassCard({ children, className, variant = 'default' }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/[0.08]',
        'bg-white/[0.035] backdrop-blur-xl backdrop-saturate-150',
        'shadow-[0_8px_40px_-16px_rgba(0,0,0,0.72)]',
        'transition-[transform,box-shadow,border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.055] hover:shadow-[0_20px_56px_-24px_rgba(0,0,0,0.78)]',
        variant === 'hero' && 'rounded-3xl border-white/[0.1]',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_12%_-8%,rgba(255,255,255,0.07),transparent_58%)]"
        aria-hidden
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
