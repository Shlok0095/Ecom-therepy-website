'use client'

import Link from 'next/link'
import { Clock, Globe, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-black-border px-8 py-24">
        <SectionLabel>Get In Touch</SectionLabel>
        <h1 className="mt-4 max-w-2xl font-serif text-fluid-h2 text-white-pure">
          Let&apos;s build something great.
        </h1>
        <p className="mt-4 max-w-lg font-sans text-white-muted">
          Tell us about your project. We&apos;ll come back with a technical approach, timeline and
          honest estimate — within 24 hours.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 pb-32 pt-16 md:grid-cols-2">
        {/* Form */}
        <div>
          <h3 className="mb-8 font-serif text-2xl text-white-pure">Tell us about your project</h3>
          <div className="flex flex-col gap-0">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b border-black-border bg-transparent px-0 py-4 font-sans text-sm text-white-pure placeholder:text-white-muted transition-colors focus:border-white/40 focus:outline-none"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border-b border-black-border bg-transparent px-0 py-4 font-sans text-sm text-white-pure placeholder:text-white-muted transition-colors focus:border-white/40 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company / Organisation (optional)"
              className="w-full border-b border-black-border bg-transparent px-0 py-4 font-sans text-sm text-white-pure placeholder:text-white-muted transition-colors focus:border-white/40 focus:outline-none"
            />
            <select className="w-full cursor-pointer appearance-none border-b border-black-border bg-black py-4 px-0 font-sans text-sm text-white-pure transition-colors focus:border-white/40 focus:outline-none">
              <option>What do you need?</option>
              <option>Web Development</option>
              <option>Web Application / SaaS</option>
              <option>Custom Software</option>
              <option>DevOps & Cloud Infrastructure</option>
              <option>AI / ML Integration</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
              <option>QA & Security Audit</option>
              <option>Not sure — let&apos;s talk</option>
            </select>
            <select className="w-full cursor-pointer appearance-none border-b border-black-border bg-black py-4 px-0 font-sans text-sm text-white-pure transition-colors focus:border-white/40 focus:outline-none">
              <option>Estimated budget</option>
              <option>Under $5,000</option>
              <option>$5,000 – $15,000</option>
              <option>$15,000 – $50,000</option>
              <option>$50,000 – $150,000</option>
              <option>$150,000+</option>
            </select>
            <textarea
              rows={4}
              placeholder="Describe your project — what problem does it solve and what does success look like?"
              className="mt-4 w-full resize-none border-b border-black-border bg-transparent px-0 py-4 font-sans text-sm text-white-pure placeholder:text-white-muted transition-colors focus:border-white/40 focus:outline-none"
            />
            <Button variant="primary" className="mt-8 w-full py-5">
              Send Message →
            </Button>
            <p className="mt-3 font-mono text-[11px] text-white-muted">
              We respond to every message within 24 hours.
            </p>
          </div>
        </div>

        {/* Contact info */}
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
              { href: '#', label: 'LinkedIn', icon: <FaLinkedinIn className="h-4 w-4" /> },
              { href: '#', label: 'Twitter', icon: <FaTwitter className="h-4 w-4" /> },
              { href: '#', label: 'GitHub', icon: <FaGithub className="h-4 w-4" /> },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 cursor-pointer items-center justify-center border border-black-border text-white-muted transition-all hover:border-white/40 hover:text-white-pure"
              >
                {s.icon}
              </Link>
            ))}
          </div>

          <div className="mt-10 border border-black-border bg-black-surface p-8">
            <h4 className="font-serif text-xl text-white-pure">Prefer a discovery call?</h4>
            <p className="mt-2 text-sm leading-relaxed text-white-muted">
              Book a free 30-minute call. We&apos;ll review your requirements, suggest an approach
              and give you a rough scope — no commitment required.
            </p>
            <Button
              variant="secondary"
              className="mt-6 w-full"
              href="mailto:hello@ecomtherapy.io?subject=Discovery%20Call%20Request"
            >
              Book a Discovery Call →
            </Button>
            <p className="mt-3 text-center font-mono text-[10px] text-white-muted">
              Free · No commitment · 30 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
