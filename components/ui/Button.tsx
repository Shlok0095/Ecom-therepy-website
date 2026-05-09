'use client'

import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary: cn(
    'relative overflow-hidden bg-pearl text-void font-semibold uppercase tracking-[0.14em] text-xs',
    'px-8 py-4 rounded-full border border-white/10',
    'shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_12px_40px_-16px_rgba(0,0,0,0.55)]',
    'transition-[transform,box-shadow,color,background-color] duration-300 ease-out',
    'hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-14px_rgba(0,0,0,0.5)]',
    'active:translate-y-0'
  ),
  secondary: cn(
    'rounded-full border border-white/18 bg-white/[0.04] px-8 py-4',
    'font-semibold uppercase tracking-[0.14em] text-xs text-pearl',
    'backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]',
    'transition-all duration-300 hover:border-white/28 hover:bg-white/[0.08]'
  ),
  ghost:
    'text-white-muted uppercase tracking-[0.18em] text-xs underline-offset-4 hover:text-accent-muted transition-colors duration-300',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-6 py-3 text-[11px] rounded-full',
  md: '',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(variantClasses[variant], size !== 'md' ? sizeClasses[size] : '', className)

  if (href) {
    if (
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.endsWith('.html') ||
      href.startsWith('http://') ||
      href.startsWith('https://')
    ) {
      const external = href.startsWith('http://') || href.startsWith('https://')
      return (
        <a
          href={href}
          className={cn('inline-flex items-center justify-center', classes)}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={cn('inline-flex items-center justify-center', classes)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={cn('inline-flex items-center justify-center', classes)} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
