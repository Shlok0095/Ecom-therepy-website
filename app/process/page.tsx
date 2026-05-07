'use client'

import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const steps = [
  {
    n: '01',
    duration: 'Week 1',
    title: 'Discovery & Scoping',
    desc: 'We dig into your requirements, existing codebase and infrastructure. No assumptions — we start with your actual constraints and goals.',
    deliverables: [
      'Technical requirements document',
      'Architecture options & trade-offs',
      'Stack recommendation',
      'Timeline & cost estimate',
    ],
  },
  {
    n: '02',
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
    n: '03',
    duration: 'Week 2 → Launch',
    title: 'Agile Engineering',
    desc: 'Two-week sprints with demo at the end of each. Code reviewed, tested and deployed to staging continuously — no big-bang releases.',
    deliverables: [
      'Working software every sprint',
      'Unit + integration test suite',
      'Staging environment',
      'Weekly async progress reports',
    ],
  },
  {
    n: '04',
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
    n: '05',
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
    <>
      <section className="border-b border-black-border px-8 py-32">
        <SectionLabel>How We Work</SectionLabel>
        <h1 className="mt-4 font-serif text-fluid-h2 text-white-pure">
          A proven process for software delivery.
        </h1>
        <p className="mt-6 max-w-2xl font-sans leading-relaxed text-white-muted">
          Not a black box. Not a fixed-bid nightmare. A transparent, milestone-driven process with
          working software at the end of every sprint.
        </p>
      </section>

      <section className="relative mx-auto max-w-5xl px-8 pb-8 pt-16">
        <div
          className="absolute bottom-0 left-[7.25rem] top-16 w-px bg-white/10 md:left-28"
          aria-hidden
        />

        <div className="space-y-0">
          {steps.map((step) => (
            <motion.article
              key={step.n}
              className="relative pb-20 pl-24 md:pl-32"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-black bg-white-pure md:left-3" />
              <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                <div className="w-24 shrink-0 pt-1">
                  <p className="font-mono text-sm text-white-muted">{step.n}</p>
                  <p className="mt-1 font-mono text-[10px] text-white/40">{step.duration}</p>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-3xl text-white-pure">{step.title}</h2>
                  <p className="mt-3 max-w-lg font-sans leading-relaxed text-white-muted">
                    {step.desc}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {step.deliverables.map((d) => (
                      <li key={d} className="font-mono text-[11px] tracking-[0.1em] text-white-muted">
                        ↳ {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-0 flex flex-col items-start justify-between gap-8 border-t border-black-border px-8 py-20 md:flex-row md:items-center">
        <h3 className="font-serif text-3xl text-white-pure">Ready to start building?</h3>
        <Button variant="primary" href="/contact">
          Kick Off a Project
        </Button>
      </section>
    </>
  )
}
