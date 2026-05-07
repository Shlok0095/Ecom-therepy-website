'use client'

import type { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { cn } from '@/lib/cn'

interface RevealWrapperProps {
  children: ReactNode
  className?: string
  delayClass?: string
}

export function RevealWrapper({ children, className, delayClass }: RevealWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  })

  return (
    <div ref={ref} className={cn('reveal', inView && 'visible', delayClass, className)}>
      {children}
    </div>
  )
}
