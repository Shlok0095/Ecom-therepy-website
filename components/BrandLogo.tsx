import Link from 'next/link'

import { cn } from '@/lib/cn'

type BrandLogoProps = {
  size?: 'header' | 'footer'
  link?: boolean
}

/** Typographic wordmark only (Instrument Serif). */
export default function BrandLogo({ size = 'header', link = true }: BrandLogoProps) {
  const wordmarkClass = cn(
    'select-none font-serif font-normal tracking-tight text-pearl antialiased',
    size === 'header' ? 'text-[1.35rem] leading-none md:text-[1.55rem]' : 'text-xl leading-none md:text-[1.45rem]'
  )

  const mark = (
    <span className={cn(wordmarkClass, link && 'transition-opacity duration-300 group-hover:opacity-[0.92]')}>
      Ecom Therapy
    </span>
  )

  const ringFocus =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-void'

  if (!link) {
    return <div className="flex shrink-0 flex-col">{mark}</div>
  }

  return (
    <Link href="/" className={cn('group inline-flex shrink-0 flex-col items-start', ringFocus)} data-hover>
      {mark}
    </Link>
  )
}
