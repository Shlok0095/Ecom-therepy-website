import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/cn'

type BrandLogoProps = {
  /** Header (nav) vs smaller footer mark */
  size?: 'header' | 'footer'
  /** Wrap in link to home */
  link?: boolean
}

export default function BrandLogo({ size = 'header', link = true }: BrandLogoProps) {
  const imgClass = cn(
    size === 'header'
      ? 'h-8 w-auto max-h-10 md:h-10 md:max-h-11 object-contain object-left'
      : 'h-7 w-auto max-h-8 object-contain object-left',
    // Logo-only tweaks: sit on page bg without a frame; soft ink-tinted shadow + slight warmth
    'select-none align-middle contrast-[1.03] saturate-[0.92]',
    'drop-shadow-[0_1px_2px_rgba(12,12,12,0.07)]'
  )

  const taglineClass = cn(
    'block max-w-[min(100%,14rem)] leading-tight text-white-muted/75',
    size === 'header'
      ? 'text-[9px] tracking-[0.06em] md:text-[10px]'
      : 'text-[8px] tracking-[0.05em] md:text-[9px]'
  )

  const image = (
    <Image
      src="/branding/ecom-therapy-logo.png?v=gemini227j"
      alt="Ecom Therapy"
      width={260}
      height={78}
      className={imgClass}
      priority={size === 'header'}
      sizes={size === 'header' ? '(max-width: 768px) 160px, 200px' : '120px'}
    />
  )

  const block = (
    <div className="flex shrink-0 flex-col items-start gap-0.5">
      {image}
      <span className={taglineClass}>Ecom Therapy Pvt. Ltd.</span>
    </div>
  )

  if (!link) {
    return block
  }

  return (
    <Link
      href="/"
      className="flex shrink-0 flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white-pure focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      data-hover
    >
      {block}
    </Link>
  )
}
