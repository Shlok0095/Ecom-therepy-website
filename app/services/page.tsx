'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { PageHero } from '@/components/layout/PageHero'
import { pageHeroAssets } from '@/lib/pageHeroAssets'
import { services } from '@/lib/content'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
}

const rowMotion = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero imageSrc={pageHeroAssets.services.src} imageAlt={pageHeroAssets.services.alt}>
        <SectionLabel>Our Services</SectionLabel>
        <h1 className="mt-4 max-w-2xl font-serif text-fluid-h2 text-white-pure">
          End-to-end software services for modern businesses.
        </h1>
        <p className="mt-4 max-w-xl font-sans leading-relaxed text-white-muted">
          We cover frontend through cloud infrastructure as one engineering partner so you can avoid
          coordinating multiple vendors for the same product.
        </p>
      </PageHero>

      <motion.section
        className="px-4 pb-32 pt-0 md:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
          {services.map((service) => (
          <motion.div key={service.slug} variants={rowMotion}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex cursor-pointer flex-wrap gap-6 border-b border-black-border py-10 transition-colors duration-200 hover:bg-black-surface md:flex-nowrap md:gap-8"
            >
              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-2xl text-white-pure">{service.title}</h2>
                <p className="mt-1 font-sans text-sm text-white-muted">{service.short}</p>
              </div>
              <div className="flex w-full flex-wrap gap-1 md:w-48 md:justify-end">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-none border border-black-border px-2 py-1 font-sans text-[11px] text-white-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex w-16 shrink-0 items-start justify-end pt-1">
                <ChevronRight className="h-5 w-5 text-white-muted transition-all group-hover:translate-x-1 group-hover:text-white-pure" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </>
  )
}
