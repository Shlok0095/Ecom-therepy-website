import Image from 'next/image'
import Link from 'next/link'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const projectTypes = [
  {
    category: 'SaaS Platforms',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    description:
      'Multi-tenant web applications with subscription billing, role-based access control, admin dashboards and real-time features. Built to onboard users and scale without re-architecting.',
    examples: ['Operations management tools', 'Team collaboration platforms', 'Client portals', 'Reporting & analytics dashboards'],
  },
  {
    category: 'AI & ML Products',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80',
    description:
      'Practical AI integrations that fit into your existing product — not a standalone demo. LLM-powered assistants, RAG document search, anomaly detection and computer vision pipelines.',
    examples: ['AI-powered search & Q&A', 'Document intelligence tools', 'Predictive dashboards', 'Recommendation engines'],
  },
  {
    category: 'Enterprise Software',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=80',
    description:
      'Custom business software that replaces spreadsheets and manual workflows. ERP modules, inventory systems, compliance tools and integrations with third-party platforms.',
    examples: ['ERP & workflow systems', 'Inventory management', 'CRM customisations', 'Finance & reporting tools'],
  },
  {
    category: 'Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    description:
      'AWS and GCP environments built to production standards from the start — containerised workloads, auto-scaling, observability and zero-downtime deployments via CI/CD.',
    examples: ['Kubernetes clusters', 'Serverless architectures', 'Data pipelines', 'Disaster recovery setups'],
  },
  {
    category: 'Mobile Applications',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    description:
      'iOS and Android apps built with React Native or Flutter — shared codebase, native performance, offline support and in-app payment integration.',
    examples: ['Consumer apps', 'Field service tools', 'Marketplace apps', 'IoT companion apps'],
  },
  {
    category: 'Security & QA Engagements',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80',
    description:
      'Standalone security audits, penetration tests and automated test suite builds for teams who need assurance on existing codebases or pre-launch verification.',
    examples: ['OWASP penetration tests', 'Automated E2E test suites', 'Load & stress testing', 'Code security reviews'],
  },
]

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-black-border px-8 py-32">
        <SectionLabel>What We Build</SectionLabel>
        <h1 className="mt-4 font-serif text-fluid-h2 text-white-pure">
          Types of projects we take on.
        </h1>
        <p className="mt-4 max-w-xl font-sans leading-relaxed text-white-muted">
          From greenfield SaaS products to cloud migrations and security audits — here is the range
          of work we are equipped to deliver.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16 space-y-2">
        {projectTypes.map((type, i) => (
          <div
            key={type.category}
            className="flex flex-col overflow-hidden border border-black-border md:flex-row"
            style={{ flexDirection: i % 2 === 1 ? 'row-reverse' : 'row' }}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-auto md:w-[45%]">
              <Image
                src={type.image}
                alt={type.category}
                fill
                className="object-cover img-bw"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 p-10 md:w-[55%]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white-muted">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="font-serif text-3xl text-white-pure">{type.category}</h2>
              <p className="font-sans leading-relaxed text-white-muted">{type.description}</p>
              <ul className="grid grid-cols-2 gap-2">
                {type.examples.map((ex) => (
                  <li key={ex} className="font-mono text-[11px] text-white-muted">
                    ↳ {ex}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-start justify-between gap-8 border-t border-black-border px-8 py-20 md:flex-row md:items-center">
        <div>
          <h3 className="font-serif text-3xl text-white-pure">Have a project in mind?</h3>
          <p className="mt-2 font-sans text-white-muted">
            Describe what you need — we will come back with an approach and estimate.
          </p>
        </div>
        <Button variant="primary" href="/contact">
          Start a Conversation →
        </Button>
      </section>
    </>
  )
}
