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
  primary:
    'bg-white-pure text-black font-semibold uppercase tracking-[0.12em] text-xs px-8 py-4 rounded-none border border-white-pure hover:bg-black hover:text-white-pure transition-all duration-200',
  secondary:
    'bg-transparent text-white-pure border border-white-pure uppercase tracking-[0.12em] text-xs px-8 py-4 rounded-none hover:bg-white-pure hover:text-black transition-all duration-200',
  ghost:
    'text-white-muted uppercase tracking-[0.12em] text-xs hover:text-white-pure underline-offset-4 hover:underline',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-6 py-3 text-[11px]',
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
