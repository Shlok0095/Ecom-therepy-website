import Image from 'next/image'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/lib/cn'

export type PageHeroProps = ComponentPropsWithoutRef<'section'> & {
  imageSrc: string
  imageAlt: string
  children: ReactNode
  contentClassName?: string
  priority?: boolean
}

/**
 * Interior page hero: subtle full-bleed photo (HD source, grayscale + low opacity) behind content.
 */
export function PageHero({
  imageSrc,
  imageAlt,
  children,
  className,
  contentClassName,
  priority = true,
  ...sectionProps
}: PageHeroProps) {
  return (
    <section
      {...sectionProps}
      className={cn(
        'relative overflow-hidden border-b border-black-border px-6 py-28 md:px-8 md:py-32',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          priority={priority}
          quality={92}
          className="object-cover object-center img-bw opacity-[0.11]"
        />
      </div>
      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </section>
  )
}
