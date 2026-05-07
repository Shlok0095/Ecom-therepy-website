import Image from 'next/image'
import { ShieldCheck, Code2, Users, Lightbulb } from 'lucide-react'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const principles = [
  {
    icon: Code2,
    n: '01',
    title: 'Engineering First',
    body: 'We are engineers at heart. Clean architecture, tested code and thorough documentation are not optional — they are the deliverable. Every project is built to be maintained, extended and handed over cleanly.',
  },
  {
    icon: ShieldCheck,
    n: '02',
    title: 'Security by Default',
    body: 'Security is not a checkbox at the end of a project. Secure coding standards, OWASP compliance, dependency scanning and penetration testing are part of every engagement from day one.',
  },
  {
    icon: Users,
    n: '03',
    title: 'Radical Transparency',
    body: 'You own the repository, the infrastructure and the data from day one. We share progress openly — no black boxes, no locked-in vendor dependencies, no surprises at billing time.',
  },
  {
    icon: Lightbulb,
    n: '04',
    title: 'Outcomes Over Output',
    body: 'Lines of code are not the goal. Working, secure, performant software that solves a real problem is. We measure success in uptime, adoption and value delivered — not story points closed.',
  },
]

const capabilities = [
  'Web & Full-Stack Development',
  'SaaS & Product Engineering',
  'Custom Enterprise Software',
  'Cloud Infrastructure & DevOps',
  'AI / ML & LLM Integration',
  'Mobile App Development',
  'UI/UX Design & Prototyping',
  'Security Audits & QA',
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-black-border py-32">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
            alt=""
            fill
            className="object-cover img-bw opacity-10"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 px-8">
          <SectionLabel>About Us</SectionLabel>
          <h1 className="mt-4 max-w-3xl font-serif text-fluid-hero text-white-pure">
            We are Ecom Therapy.
          </h1>
          <p className="mt-6 max-w-lg font-sans text-xl leading-relaxed text-white-muted">
            A software and IT solutions studio focused on building reliable, secure and scalable
            digital products for businesses ready to grow through technology.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="grid grid-cols-1 gap-0 border-b border-black-border md:grid-cols-2">
        <div className="border-b border-black-border px-8 py-24 md:border-b-0 md:border-r">
          <h2 className="font-serif text-fluid-h3 text-white-pure">Why we exist.</h2>
          <div className="mt-6 space-y-5 font-sans leading-relaxed text-white-muted">
            <p>
              Too many businesses operate on fragile, outdated or insecure software — not because
              they chose to, but because finding a partner who takes engineering quality seriously
              is genuinely hard.
            </p>
            <p>
              Ecom Therapy was founded to change that. We bring senior-level engineering discipline
              to every engagement — whether you are a startup launching your first product or a
              growing business replacing a legacy system.
            </p>
            <p>
              We do not outsource, we do not cut corners on security, and we do not lock you into
              proprietary platforms. You get clean, documented, maintainable code — every time.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Team collaborating"
            fill
            className="object-cover img-bw"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="border-b border-black-border px-8 py-24">
        <SectionLabel>What We Stand For</SectionLabel>
        <h2 className="mt-4 font-serif text-fluid-h2 text-white-pure">Our principles.</h2>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {principles.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.n} className="border-t border-black-border pt-8">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-white-muted" />
                  <p className="font-mono text-[11px] text-white-muted">{p.n}</p>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-white-pure">{p.title}</h3>
                <p className="mt-3 font-sans leading-relaxed text-white-muted">{p.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-b border-black-border px-8 py-24">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="mt-4 font-serif text-fluid-h2 text-white-pure">What we can build.</h2>
        <div className="mt-12 grid grid-cols-1 gap-px bg-black-border sm:grid-cols-2 md:grid-cols-4">
          {capabilities.map((cap) => (
            <div key={cap} className="bg-black px-6 py-5">
              <span className="font-mono text-[11px] tracking-[0.1em] text-white-muted">
                ↳ {cap}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="flex flex-col items-start justify-between gap-8 px-8 py-24 md:flex-row md:items-center">
        <div>
          <h3 className="font-serif text-3xl text-white-pure">Ready to build with us?</h3>
          <p className="mt-2 font-sans text-white-muted">
            Tell us about your project — we respond within 24 hours.
          </p>
        </div>
        <Button variant="primary" href="/contact">
          Get in Touch →
        </Button>
      </section>
    </>
  )
}
