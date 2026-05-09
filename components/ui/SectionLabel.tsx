import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type SectionLabelProps = {
  children: ReactNode
  className?: string
}

/** Uppercase mono label above section headings (no decorative rules). */
export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'font-mono text-[11px] uppercase tracking-[0.28em] text-white-muted',
        className
      )}
    >
      {children}
    </span>
  )
}
