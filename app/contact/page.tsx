'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { Clock, Globe, Mail, MapPin } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

import SectionLabel from '@/components/ui/SectionLabel'
import { CALENDLY_BOOKING_URL, SOCIAL_LINKS } from '@/lib/social'
import Button from '@/components/ui/Button'
import { PageHero } from '@/components/layout/PageHero'
import { pageHeroAssets } from '@/lib/pageHeroAssets'

type FormState = {
  name: string
  email: string
  company: string
  need: string
  budgetRange: string
  message: string
}

function formatBudgetForWhatsApp(f: FormState): string | null {
  if (!f.budgetRange.trim()) return null
  return `*Estimated budget:* ${f.budgetRange.trim()}`
}

function buildWhatsAppMessage(f: FormState): string {
  const budgetLine = formatBudgetForWhatsApp(f)
  const lines = [
    'Hello Ecom Therapy,',
    '',
    "I'd like to discuss a project (sent from your website contact form).",
    '',
    `*Name:* ${f.name.trim()}`,
    `*Email:* ${f.email.trim()}`,
    f.company.trim() ? `*Company / Organisation:* ${f.company.trim()}` : '',
    f.need ? `*What I need:* ${f.need}` : '',
    budgetLine || '',
    '',
    '*Project details:*',
    f.message.trim() || '(No additional details.)',
  ]
  return lines.filter(Boolean).join('\n')
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    need: '',
    budgetRange: '',
    message: '',
  })

  const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = buildWhatsAppMessage(form)
    const url = `https://wa.me/${SOCIAL_LINKS.whatsappBusinessPhone}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageHero imageSrc={pageHeroAssets.contact.src} imageAlt={pageHeroAssets.contact.alt}>
        <SectionLabel>Get In Touch</SectionLabel>
        <h1 className="mt-4 max-w-2xl font-serif text-fluid-h2 text-white-pure">
          Let&apos;s build something great.
        </h1>
        <p className="mt-4 max-w-lg font-sans text-white-muted">
          Tell us about your project. We will respond with a technical approach, timeline, and estimate
          within 24 hours.
        </p>
      </PageHero>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 pb-32 pt-16 md:grid-cols-2">
        <div>
          <h3 className="mb-8 font-serif text-2xl text-white-pure">Tell us about your project</h3>
          <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-0">
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              className="w-full border-b border-black-border bg-transparent px-0 py-4 font-sans text-sm text-white-pure placeholder:text-white-muted transition-colors focus:border-white/40 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              className="w-full border-b border-black-border bg-transparent px-0 py-4 font-sans text-sm text-white-pure placeholder:text-white-muted transition-colors focus:border-white/40 focus:outline-none"
            />
            <input
              type="text"
              name="company"
              autoComplete="organization"
              placeholder="Company / Organisation (optional)"
              value={form.company}
              onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
              className="w-full border-b border-black-border bg-transparent px-0 py-4 font-sans text-sm text-white-pure placeholder:text-white-muted transition-colors focus:border-white/40 focus:outline-none"
            />
            <select
              name="need"
              value={form.need}
              onChange={(e) => setForm((s) => ({ ...s, need: e.target.value }))}
              className="w-full cursor-pointer appearance-none border-b border-black-border bg-black py-4 px-0 font-sans text-sm text-white-pure transition-colors focus:border-white/40 focus:outline-none"
            >
              <option value="">What do you need?</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Application / SaaS">Web Application / SaaS</option>
              <option value="Custom Software">Custom Software</option>
              <option value="DevOps & Cloud Infrastructure">DevOps &amp; Cloud Infrastructure</option>
              <option value="AI / ML Integration">AI / ML Integration</option>
              <option value="Mobile App">Mobile App</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="QA & Security Audit">QA &amp; Security Audit</option>
              <option value="Maintenance & Support">Maintenance &amp; Support</option>
              <option value="Not sure (discuss with us)">Not sure (discuss with us)</option>
            </select>
            <select
              name="budgetRange"
              value={form.budgetRange}
              onChange={(e) => setForm((s) => ({ ...s, budgetRange: e.target.value }))}
              className="w-full cursor-pointer appearance-none border-b border-black-border bg-black py-4 px-0 font-sans text-sm text-white-pure transition-colors focus:border-white/40 focus:outline-none"
            >
              <option value="">Estimated budget (optional)</option>
              <option value="Under ₹25,000">Under ₹25,000</option>
              <option value="₹25,000 – ₹75,000">₹25,000 – ₹75,000</option>
              <option value="₹75,000 – ₹1,50,000">₹75,000 – ₹1,50,000</option>
              <option value="₹1,50,000 – ₹3,00,000">₹1,50,000 – ₹3,00,000</option>
              <option value="₹3,00,000 – ₹5,00,000">₹3,00,000 – ₹5,00,000</option>
              <option value="Above ₹5,00,000">Above ₹5,00,000</option>
              <option value="Not sure (discuss with us)">Not sure (discuss with us)</option>
            </select>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              className="mt-4 w-full resize-none border-b border-black-border bg-transparent px-0 py-4 font-sans text-sm text-white-pure placeholder:text-white-muted transition-colors focus:border-white/40 focus:outline-none"
            />
            <Button type="submit" variant="primary" className="mt-8 w-full py-5">
              Send on WhatsApp →
            </Button>
            <p className="mt-3 font-mono text-[11px] text-white-muted">
              Opens WhatsApp with your answers filled in. Send the message when you are ready. We
              typically reply within 24 hours.
            </p>
          </form>
        </div>

        <div>
          <h3 className="mb-8 font-serif text-2xl text-white-pure">Or reach us directly</h3>
          <div className="flex flex-col divide-y divide-black-border border border-black-border border-b-0">
            <div className="flex items-start gap-4 px-4 py-6">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white-muted" />
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white-muted">
                  Email
                </p>
                <p className="font-sans text-sm text-white-pure">hello@ecomtherapy.io</p>
              </div>
            </div>
            <div className="flex items-start gap-4 px-4 py-6">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-white-muted" />
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white-muted">
                  Website
                </p>
                <p className="font-sans text-sm text-white-pure">www.ecomtherapy.io</p>
              </div>
            </div>
            <div className="flex items-start gap-4 px-4 py-6">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white-muted" />
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white-muted">
                  Location
                </p>
                <p className="font-sans text-sm text-white-pure">
                  India · Remote-first · Serving global clients
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 px-4 py-6">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white-muted" />
              <div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white-muted">
                  Response Time
                </p>
                <p className="font-sans text-sm text-white-pure">Within 24 hours, Monday – Saturday</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            {[
              { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', icon: <FaLinkedinIn className="h-4 w-4" /> },
              { href: SOCIAL_LINKS.instagram, label: 'Instagram', icon: <FaInstagram className="h-4 w-4" /> },
              {
                href: SOCIAL_LINKS.whatsappBusiness,
                label: 'WhatsApp Business',
                icon: <FaWhatsapp className="h-4 w-4" />,
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 cursor-pointer items-center justify-center border border-black-border text-white-muted transition-all hover:border-white/40 hover:text-white-pure"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="mt-10 border border-black-border bg-black-surface p-8">
            <h4 className="font-serif text-xl text-white-pure">Book an appointment</h4>
            <p className="mt-2 text-sm leading-relaxed text-white-muted">
              Choose an available slot on Calendly for a free 30-minute call. We will review your
              requirements and outline next steps. No commitment is required.
            </p>
            <Button variant="secondary" className="mt-6 w-full" href={CALENDLY_BOOKING_URL}>
              Book an appointment →
            </Button>
            <p className="mt-3 text-center font-mono text-[10px] text-white-muted">
              Free · Pick your time · ~30 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
