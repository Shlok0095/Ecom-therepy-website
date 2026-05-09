'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

import { SOCIAL_LINKS } from '@/lib/social'
import { motionFadeUpItem } from '@/lib/motion/tokens'
import { ShieldCheck, Zap, Code2, Cloud, Brain, Smartphone, Layout, TestTube, Wrench } from 'lucide-react'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import BrandLogo from '@/components/BrandLogo'
import GlassCard from '@/components/ui/GlassCard'
import { HeroExperience } from '@/components/scenes/home/HeroExperience'
import { HeroFadeItem, HeroIntroStack } from '@/components/motion/HeroTypography'
import { MagneticButton } from '@/components/interactions/MagneticButton'

const marqueeItems =
  'React · Next.js · TypeScript · Node.js · Python · AWS · Docker · Kubernetes · PostgreSQL · GraphQL · TensorFlow · PyTorch · CI/CD · LLMs · React Native · Terraform'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    body: 'Performant, accessible websites and full-stack web apps built with React, Next.js and Node.js.',
    href: '/services/web-development',
  },
  {
    icon: Layout,
    title: 'Web Apps & SaaS',
    body: 'Multi-tenant SaaS platforms, internal dashboards and portals with authentication, billing, and RBAC.',
    href: '/services/web-applications',
  },
  {
    icon: Zap,
    title: 'Custom Software',
    body: 'Bespoke business software, workflow automation, API platforms and system integrations.',
    href: '/services/software-development',
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    body: 'AWS / GCP infrastructure, Docker, Kubernetes, Terraform and zero-downtime CI/CD pipelines.',
    href: '/services/devops-cloud',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    body: 'LLM integrations, RAG pipelines, computer vision, predictive models and AI-powered APIs.',
    href: '/services/ai-ml-solutions',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    body: 'Cross-platform React Native and Flutter apps for iOS and Android with native-quality UX.',
    href: '/services/mobile-apps',
  },
  {
    icon: TestTube,
    title: 'UI/UX Design',
    body: 'User research, Figma prototypes and scalable design systems before a line of code is written.',
    href: '/services/ui-ux-design',
  },
  {
    icon: ShieldCheck,
    title: 'Security & QA',
    body: 'Automated test suites, penetration testing, OWASP audits and security-first architecture.',
    href: '/services/qa-security',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    body: 'Ongoing support, monitoring, patching, and updates to keep production systems reliable.',
    href: '/services/maintenance',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroExperience>
        <div className="relative z-10 grid min-h-screen flex-1 grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:pb-28 lg:pt-16">
          <div className="flex flex-col justify-center lg:col-span-7 lg:pr-8">
            <HeroIntroStack>
              <HeroFadeItem>
                <SectionLabel>Software engineering</SectionLabel>
              </HeroFadeItem>
              <motion.h1
                variants={motionFadeUpItem}
                className="mt-8 font-serif text-fluid-hero font-normal leading-[0.98] tracking-tight text-pearl"
              >
                <span className="block">Custom software</span>
                <span className="block">for web, cloud &amp; AI</span>
              </motion.h1>
              <HeroFadeItem className="mt-6 md:mt-7">
                <p className="max-w-[28rem] font-sans text-lg font-normal italic leading-[1.45] text-accent-muted/90 md:text-xl md:leading-[1.5]">
                  Security-led delivery and clear ownership.
                </p>
              </HeroFadeItem>
              <HeroFadeItem className="mt-6 md:mt-7">
                <div className="max-w-[30rem] space-y-2.5 font-sans text-[0.9375rem] font-normal leading-[1.78] tracking-[0.015em] md:text-base md:leading-[1.82]">
                  <p className="text-pearl/[0.78]">
                    Ecom Therapy designs and delivers production applications, infrastructure, and integrations.
                  </p>
                  <p className="text-white-muted/88">
                    Engagement follows documented testing and security practices, suited to organisations that need
                    predictable releases and traceable engineering decisions.
                  </p>
                </div>
              </HeroFadeItem>
              <HeroFadeItem className="mt-12 flex flex-wrap gap-5">
                <MagneticButton>
                  <Button variant="primary" href="/contact">
                    Contact us
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="secondary" href="/services">
                    View services
                  </Button>
                </MagneticButton>
              </HeroFadeItem>
            </HeroIntroStack>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
            >
              <div className="pointer-events-none absolute -right-6 -top-10 hidden h-52 w-52 rounded-full border border-white/[0.08] lg:block" />
              <GlassCard variant="hero" className="p-3 md:p-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
                    alt="Software engineering team"
                    fill
                    className="object-cover img-bw img-grain"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white-muted">
                      Scope · Delivery · Support
                    </p>
                    <p className="mt-2 font-serif text-xl text-pearl">Structured engineering, measurable outcomes.</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.08] bg-black-surface/50 py-3 backdrop-blur-xl">
          <div className="overflow-hidden">
            <div className="marquee-track font-mono text-[10px] uppercase tracking-[0.28em] text-white-muted/90">
              <span className="whitespace-nowrap px-10">{marqueeItems}</span>
              <span className="whitespace-nowrap px-10">{marqueeItems}</span>
            </div>
          </div>
        </div>
      </HeroExperience>

      {/* Approach */}
      <section className="relative border-y border-white/[0.06] bg-black-surface/35 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionLabel>Approach</SectionLabel>
              <h2 className="mt-6 font-serif text-fluid-h2 leading-[1.05] text-pearl">
                One accountable partner.
                <span className="mt-3 block text-white-muted/95">End-to-end technical ownership.</span>
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-8 font-sans text-lg leading-relaxed text-white-muted lg:col-span-6 lg:col-start-7">
              <p>
                Fragmented vendors often produce inconsistent architecture. We cover UI, application
                logic, data, and cloud operations as a single delivery so requirements, releases, and
                incidents stay traceable.
              </p>
              <p className="text-pearl/95">
                Security is part of delivery: standards review, dependency and supply-chain scanning,
                structured testing, and OWASP-aligned practices. Expectations and evidence are documented,
                not implied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
          <div className="max-w-3xl">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-5 font-serif text-fluid-h2 leading-tight text-pearl">
              Integrated engineering services from one team.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  className="min-h-0"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                >
                  <Link href={s.href} className="group block h-full">
                    <GlassCard className="flex h-full flex-col p-8 md:p-10">
                      <div className="flex items-start justify-between gap-4">
                        <Icon className="h-6 w-6 text-white-muted transition-colors duration-300 group-hover:text-pearl" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white-muted/70">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="mt-8 font-serif text-2xl text-pearl md:text-[1.65rem]">{s.title}</h3>
                      <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-white-muted md:text-[15px]">
                        {s.body}
                      </p>
                      <span className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white-muted transition-all duration-300 group-hover:gap-3 group-hover:text-pearl">
                        Learn more <span aria-hidden>→</span>
                      </span>
                    </GlassCard>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-14 flex justify-end">
            <Button variant="ghost" href="/services">
              Full services index →
            </Button>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="relative border-y border-white/[0.06] bg-gradient-to-b from-black-surface/80 via-void to-void py-28 md:py-36">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-white-muted" />
                <SectionLabel>Security posture</SectionLabel>
              </div>
              <h2 className="mt-6 font-serif text-fluid-h3 leading-snug text-pearl">
                Security integrated across design, build, and operations.
              </h2>
              <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'OWASP Top 10 alignment',
                  'Penetration testing',
                  'Secure SDLC reviews',
                  'Dependency & supply-chain scanning',
                  'Encryption in transit / at rest',
                  'RBAC & audit trails',
                  'Operational telemetry',
                  'Privacy-by-design',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white-muted"
                  >
                    <span className="mt-0.5 text-pearl/80" aria-hidden>
                      ◆
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative lg:col-span-5 lg:col-start-8">
              <GlassCard className="overflow-hidden p-0">
                <div className="relative aspect-square w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
                    alt="Secure systems engineering"
                    fill
                    className="object-cover img-bw"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Process rhythm */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
          <SectionLabel>Operating rhythm</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-serif text-fluid-h2 text-pearl">
            Transparent phases. Predictable cadence. No black boxes.
          </h2>
          <div className="mt-16 grid gap-4 md:grid-cols-5">
            {[
              { n: '01', label: 'Discovery & Scoping' },
              { n: '02', label: 'Architecture & Design' },
              { n: '03', label: 'Agile Engineering' },
              { n: '04', label: 'QA & Security Audit' },
              { n: '05', label: 'Launch & Support' },
            ].map((step) => (
              <div
                key={step.n}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/[0.14]"
              >
                <p className="font-mono text-[11px] tracking-[0.28em] text-white-muted">{step.n}</p>
                <p className="mt-5 font-serif text-lg leading-snug text-pearl">{step.label}</p>
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button variant="ghost" href="/process">
              See the full methodology →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-gradient-to-br from-black-surface via-void to-ink py-24 md:py-32">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-14 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-xl">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-4 font-serif text-fluid-h2 leading-[1.05] text-pearl">
              Share your requirements, timeline, and constraints. We will respond with a clear next step.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-4 md:max-w-xs">
            <MagneticButton>
              <Button variant="primary" href="/contact">
                Get in touch
              </Button>
            </MagneticButton>
            <Button variant="ghost" href="mailto:hello@ecomtherapy.io">
              hello@ecomtherapy.io
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-24 flex max-w-[90rem] flex-col items-center justify-between gap-10 border-t border-white/[0.06] px-6 pt-12 md:flex-row lg:px-12">
          <div className="flex items-center gap-4">
            <BrandLogo size="footer" link={false} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white-muted">© 2026</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white-muted">
            {['Services', 'Work', 'Process', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-pearl"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex gap-8">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white-muted transition-colors hover:text-pearl"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white-muted transition-colors hover:text-pearl"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL_LINKS.whatsappBusiness}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Business"
              className="text-white-muted transition-colors hover:text-pearl"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
