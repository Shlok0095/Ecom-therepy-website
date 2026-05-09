import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { PageHero } from '@/components/layout/PageHero'
import { pageHeroAssets } from '@/lib/pageHeroAssets'
import { cn } from '@/lib/cn'

const projectTypes = [
  {
    category: 'SaaS Platforms',
    image:
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=2400&q=92',
    description:
      'Multi-tenant web applications with subscription billing, role-based access control, admin dashboards and real-time features. Built to onboard users and scale without re-architecting.',
    examples: [
      'Operations management tools',
      'Team collaboration platforms',
      'Client portals',
      'Reporting & analytics dashboards',
    ],
  },
  {
    category: 'AI & ML Products',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2400&q=92',
    description:
      'Practical AI integrations embedded in your existing product, including LLM assistants, RAG search, anomaly detection, and computer vision pipelines.',
    examples: [
      'AI-powered search & Q&A',
      'Document intelligence tools',
      'Predictive dashboards',
      'Recommendation engines',
    ],
  },
  {
    category: 'Enterprise Software',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2400&q=92',
    description:
      'Custom business software that replaces spreadsheets and manual workflows. ERP modules, inventory systems, compliance tools and integrations with third-party platforms.',
    examples: ['ERP & workflow systems', 'Inventory management', 'CRM customisations', 'Finance & reporting tools'],
  },
  {
    category: 'Cloud Infrastructure',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2400&q=92',
    description:
      'AWS and GCP environments built to production standards: containerised workloads, auto-scaling, observability, and zero-downtime deployments through CI/CD.',
    examples: ['Kubernetes clusters', 'Serverless architectures', 'Data pipelines', 'Disaster recovery setups'],
  },
  {
    category: 'Mobile Applications',
    image:
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=2400&q=92',
    description:
      'iOS and Android apps using React Native or Flutter: shared codebase, native performance, offline support, and in-app payments where required.',
    examples: ['Consumer apps', 'Field service tools', 'Marketplace apps', 'IoT companion apps'],
  },
  {
    category: 'Security & QA Engagements',
    image:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=2400&q=92',
    description:
      'Standalone security audits, penetration tests and automated test suite builds for teams who need assurance on existing codebases or pre-launch verification.',
    examples: ['OWASP penetration tests', 'Automated E2E test suites', 'Load & stress testing', 'Code security reviews'],
  },
]

export default function WorkPage() {
  return (
    <>
      <PageHero imageSrc={pageHeroAssets.work.src} imageAlt={pageHeroAssets.work.alt}>
        <SectionLabel>What We Build</SectionLabel>
        <h1 className="mt-4 font-serif text-fluid-h2 text-white-pure">
          Types of projects we take on.
        </h1>
        <p className="mt-4 max-w-xl font-sans leading-relaxed text-white-muted">
          From greenfield SaaS products to cloud migrations and security audits, this is the range of
          work we are equipped to deliver.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-2 px-4 py-12 md:px-8 md:py-16">
        {projectTypes.map((type, i) => (
          <div
            key={type.category}
            className={cn(
              'flex flex-col overflow-hidden border border-black-border',
              'md:flex-row md:items-stretch',
              i % 2 === 1 && 'md:flex-row-reverse'
            )}
          >
            {/* Image: full-width block on mobile; side column from md up */}
            <div className="relative aspect-video w-full shrink-0 overflow-hidden md:aspect-auto md:min-h-[280px] md:w-[45%]">
              <Image
                src={type.image}
                alt={type.category}
                fill
                className="object-cover img-bw"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            <div className="flex w-full min-w-0 flex-col justify-center gap-5 p-6 md:w-[55%] md:gap-6 md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white-muted md:text-[12px]">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="font-serif text-2xl text-white-pure md:text-3xl">{type.category}</h2>
              <p className="font-sans text-base leading-relaxed text-white-muted">
                {type.description}
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {type.examples.map((ex) => (
                  <li key={ex} className="font-mono text-[11px] leading-snug text-white-muted md:text-[12px]">
                    ↳ {ex}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-start justify-between gap-8 border-t border-black-border px-6 py-16 md:flex-row md:items-center md:px-8 md:py-20">
        <div>
          <h3 className="font-serif text-2xl text-white-pure md:text-3xl">Have a project in mind?</h3>
          <p className="mt-2 font-sans text-white-muted">
            Describe what you need. We will respond with an approach and estimate.
          </p>
        </div>
        <Button variant="primary" href="/contact">
          Start a Conversation →
        </Button>
      </section>
    </>
  )
}
