import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { getServiceBySlug, services } from '@/lib/content'

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: PageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: 'Service' }
  return {
    title: `${service.title} | Ecom Therapy`,
    description: service.short,
  }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  return (
    <article className="pb-24">
      {/* ── Hero header ── */}
      <section className="border-b border-black-border px-8 py-24">
        <SectionLabel>Overview</SectionLabel>
        <h1 className="mt-6 max-w-3xl font-serif text-fluid-h2 text-white-pure">{service.title}</h1>
        <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-white-muted">{service.short}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="border border-black-border px-3 py-1.5 font-sans text-[11px] tracking-wide text-white-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── Hero image — fixed height so fill always works ── */}
      <div className="relative h-[320px] w-full overflow-hidden md:h-[480px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover img-bw"
          sizes="100vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* ── Description + highlights ── */}
      <section className="mx-auto grid max-w-6xl gap-16 px-8 py-20 md:grid-cols-2">
        <div>
          <SectionLabel>Overview</SectionLabel>
          <p className="mt-6 font-sans text-lg leading-relaxed text-white-muted">{service.description}</p>
        </div>
        <div>
          <SectionLabel>What&apos;s Included</SectionLabel>
          <ul className="mt-6 space-y-4">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-white-muted" />
                <span className="font-sans text-sm leading-relaxed text-white-muted">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Secondary image ── */}
      <div className="relative h-[240px] w-full overflow-hidden border-y border-black-border md:h-[360px]">
        <Image
          src={service.image2}
          alt={`${service.title} details`}
          fill
          className="object-cover img-bw"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-3xl px-8 py-20 text-center">
        <h2 className="font-serif text-3xl text-white-pure">Ready to get started?</h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-white-muted">
          Tell us about your project and we&apos;ll come back with an approach and honest estimate within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="/contact">
            Start a Conversation
          </Button>
          <Button variant="ghost" href="/services">
            ← All Services
          </Button>
        </div>
      </section>
    </article>
  )
}
