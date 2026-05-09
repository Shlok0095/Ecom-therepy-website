'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { ScrollStory } from '@/components/gsap/ScrollStory'
import { PageHero } from '@/components/layout/PageHero'
import { pageHeroAssets } from '@/lib/pageHeroAssets'

const steps = [
  {
    duration: 'Week 1',
    title: 'Discovery & Scoping',
    desc: 'We review your requirements, existing codebase, and infrastructure. We work from stated constraints and goals, not assumptions.',
    deliverables: [
      'Technical requirements document',
      'Architecture options & trade-offs',
      'Stack recommendation',
      'Timeline & cost estimate',
    ],
  },
  {
    duration: 'Week 1–2',
    title: 'Architecture & Design',
    desc: 'System design, data modelling, API contracts and UI/UX wireframes agreed before a single line of production code is written.',
    deliverables: [
      'System architecture diagram',
      'Database schema',
      'API contract (OpenAPI)',
      'Figma wireframes / design system',
    ],
  },
  {
    duration: 'Week 2 → Launch',
    title: 'Agile Engineering',
    desc: 'Two-week sprints with a demo at the end of each. Code is reviewed, tested, and deployed to staging continuously, without single cutover releases.',
    deliverables: [
      'Working software every sprint',
      'Unit + integration test suite',
      'Staging environment',
      'Weekly async progress reports',
    ],
  },
  {
    duration: 'Pre-Launch',
    title: 'QA, Security & Performance',
    desc: 'Automated E2E tests, load testing to 10× expected traffic, OWASP security checklist and Lighthouse scores verified before go-live.',
    deliverables: [
      'Playwright / Cypress test suite',
      'Load test report',
      'Security audit findings',
      'Core Web Vitals sign-off',
    ],
  },
  {
    duration: 'Ongoing',
    title: 'Launch & Iteration',
    desc: 'We deploy, monitor and support. Post-launch retainer for bug fixes, feature iterations and infrastructure scaling as you grow.',
    deliverables: [
      'Production deployment',
      'Observability stack (logs, metrics, alerts)',
      'Runbook & documentation',
      'Retainer SLA (optional)',
    ],
  },
]

export default function ProcessPage() {
  return (
    <ScrollStory>
      <PageHero
        data-scroll-pin
        imageSrc={pageHeroAssets.process.src}
        imageAlt={pageHeroAssets.process.alt}
      >
        <div data-pin-reveal>
          <SectionLabel>How We Work</SectionLabel>
        </div>
        <h1 data-pin-reveal className="mt-4 font-serif text-fluid-h2 text-white-pure">
          A proven process for software delivery.
        </h1>
        <p data-pin-reveal className="mt-6 max-w-2xl font-sans leading-relaxed text-white-muted">
          Not a black box. Not a fixed-bid nightmare. A transparent, milestone-driven process with
          working software at the end of every sprint.
        </p>
      </PageHero>

      <section data-story-track className="relative mx-auto max-w-5xl px-8 pb-8 pt-16">
        <div
          data-story-line
          className="absolute bottom-0 left-[7.25rem] top-16 w-px origin-top scale-y-0 bg-white/10 md:left-28"
          aria-hidden
        />

        <div className="space-y-0">
          {steps.map((step) => (
            <article key={step.title} data-story-card className="relative pb-20 pl-24 md:pl-32">
              <div className="absolute left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-black bg-white-pure md:left-3" />
              <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                <div className="w-28 shrink-0 pt-1 md:w-36">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white-muted">
                    {step.duration}
                  </p>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-3xl text-white-pure">{step.title}</h2>
                  <p className="mt-3 max-w-lg font-sans leading-relaxed text-white-muted">{step.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {step.deliverables.map((d) => (
                      <li key={d} className="relative pl-4 font-sans text-sm leading-snug text-white-muted">
                        <span className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-white-muted/60" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-0 flex flex-col items-start justify-between gap-8 border-t border-black-border px-8 py-20 md:flex-row md:items-center">
        <h3 className="font-serif text-3xl text-white-pure">Ready to start building?</h3>
        <Button variant="primary" href="/contact">
          Kick Off a Project
        </Button>
      </section>
    </ScrollStory>
  )
}
