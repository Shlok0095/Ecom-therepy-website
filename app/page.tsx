'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { ShieldCheck, Zap, Code2, Cloud, Brain, Smartphone, Layout, TestTube } from 'lucide-react'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const marqueeItems =
  'React ✦ Next.js ✦ TypeScript ✦ Node.js ✦ Python ✦ AWS ✦ Docker ✦ Kubernetes ✦ PostgreSQL ✦ GraphQL ✦ TensorFlow ✦ PyTorch ✦ CI/CD ✦ LLMs ✦ React Native ✦ Terraform ✦'

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
    body: 'Multi-tenant SaaS platforms, internal dashboards and portals — auth, billing, RBAC included.',
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
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black pb-16 lg:flex-row lg:pb-0">
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-24 lg:w-[58%] lg:px-16 lg:py-0">
          <div className="max-w-xl">
            <SectionLabel>Software & IT Solutions</SectionLabel>
            <h1 className="mt-6 font-serif text-fluid-hero leading-[1.02]">
              <span className="block text-white-pure">We Build</span>
              <span className="block text-white-pure">Software</span>
              <span
                className="block"
                style={{ WebkitTextStroke: '1px #F5F5F0', color: 'transparent' }}
              >
                That Works.
              </span>
            </h1>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-white-muted">
              Ecom Therapy is a full-stack software and IT studio. We design, build and secure
              web apps, cloud infrastructure, AI integrations and mobile products — end to end.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" href="/contact">
                Start a Project
              </Button>
              <Button variant="ghost" href="/services">
                Explore Services →
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-1 items-center justify-center px-6 py-12 lg:w-[42%] lg:py-0">
          <div className="pointer-events-none absolute right-8 top-12 hidden lg:block">
            <div className="h-64 w-64 animate-float-up rounded-full border border-white/5" />
          </div>
          <div className="relative aspect-[3/4] w-full max-w-md">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85"
              alt="Developer at work"
              fill
              className="object-cover img-bw img-grain"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="pointer-events-none absolute inset-4 border border-white/10" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-4 py-3 backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white-muted">
                Full-Stack · Cloud · AI · Security
              </span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-black-border bg-black py-3">
          <div className="overflow-hidden">
            <div className="marquee-track font-mono text-[11px] uppercase tracking-[0.12em] text-white-muted">
              <span className="whitespace-nowrap px-8">{marqueeItems}</span>
              <span className="whitespace-nowrap px-8">{marqueeItems}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we offer intro ── */}
      <section className="border-y border-black-border bg-black-surface py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-24">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="mt-4 font-serif text-fluid-h2 text-white-pure leading-tight">
                Full-stack engineering, end to end.
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4 font-sans text-white-muted leading-relaxed">
              <p>
                We cover every layer of the software stack — from pixel-perfect interfaces to
                cloud infrastructure — so you work with one team instead of juggling five vendors.
              </p>
              <p>
                Security is built in at every stage: secure coding standards, automated
                vulnerability scanning, penetration testing and OWASP compliance are not
                add-ons — they are part of how we ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-black py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-px bg-black-border sm:grid-cols-2 md:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex flex-col gap-4 bg-black p-8 transition-colors duration-200 hover:bg-black-card"
                >
                  <Icon className="h-5 w-5 text-white-muted transition-colors group-hover:text-white-pure" />
                  <h3 className="font-serif text-lg text-white-pure">{s.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-white-muted">{s.body}</p>
                  <span className="mt-auto font-mono text-[11px] text-white-muted transition-colors group-hover:text-white-pure">
                    Learn more →
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-right">
            <Button variant="ghost" href="/services">
              See All Services →
            </Button>
          </div>
        </div>
      </section>

      {/* ── Security callout ── */}
      <section className="border-y border-black-border bg-black-surface py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-white-muted" />
                <SectionLabel>Security First</SectionLabel>
              </div>
              <h2 className="mt-4 font-serif text-fluid-h3 text-white-pure leading-snug">
                Every line of code is written with security in mind.
              </h2>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'OWASP Top 10 compliance',
                  'Penetration testing',
                  'Secure code reviews',
                  'Dependency vulnerability scanning',
                  'Data encryption at rest & in transit',
                  'Role-based access control (RBAC)',
                  'Audit logs & monitoring',
                  'GDPR / privacy-by-design',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-mono text-[11px] text-white-muted">
                    <span className="mt-0.5 text-white/40">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square w-full max-w-sm shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80"
                alt="Secure code"
                fill
                className="object-cover img-bw"
                sizes="(max-width: 768px) 100vw, 384px"
              />
              <div className="pointer-events-none absolute inset-0 border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Process snippet ── */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-8">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="mt-4 font-serif text-fluid-h2 text-white-pure">
            Transparent. Milestone-driven. No surprises.
          </h2>
          <div className="mt-16 grid gap-px bg-black-border md:grid-cols-5">
            {[
              { n: '01', label: 'Discovery & Scoping' },
              { n: '02', label: 'Architecture & Design' },
              { n: '03', label: 'Agile Engineering' },
              { n: '04', label: 'QA & Security Audit' },
              { n: '05', label: 'Launch & Support' },
            ].map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-4 bg-black p-6"
              >
                <p className="font-mono text-[11px] text-white-muted">{step.n}</p>
                <p className="font-serif text-lg text-white-pure">{step.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button variant="ghost" href="/process">
              See Full Process →
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-black-border bg-black-surface py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-end justify-between gap-12 px-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Ready to build?</SectionLabel>
            <h2 className="mt-2 max-w-lg font-serif text-fluid-h2 leading-tight text-white-pure">
              Have a project in mind? Let&apos;s talk.
            </h2>
          </div>
          <div className="flex w-full flex-col items-stretch gap-4 md:w-auto md:items-end">
            <Button variant="primary" href="/contact">
              Start a Project
            </Button>
            <Button variant="ghost" href="mailto:hello@ecomtherapy.io">
              hello@ecomtherapy.io
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-8 border-t border-black-border px-8 pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="font-serif text-white-pure">Ecom Therapy</span>
            <span className="font-mono text-[11px] text-white-muted">© 2025</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-8 font-mono text-[11px] text-white-muted">
            {['Services', 'Work', 'Process', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="transition-colors hover:text-white-pure"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6">
            <a href="#" aria-label="LinkedIn" className="text-white-muted transition-colors hover:text-white-pure">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white-muted transition-colors hover:text-white-pure">
              <FaTwitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="text-white-muted transition-colors hover:text-white-pure">
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
