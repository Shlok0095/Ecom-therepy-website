import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

const projectTypesSlugs = [
  'saas-platforms',
  'ai-ml-products',
  'enterprise-software',
  'cloud-infrastructure',
  'mobile-applications',
  'security-qa',
]

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return projectTypesSlugs.map((slug) => ({ slug }))
}

export default function WorkSlugPage({ params }: PageProps) {
  if (!projectTypesSlugs.includes(params.slug)) notFound()

  return (
    <article className="pb-24">
      <section className="border-b border-black-border px-8 py-32">
        <SectionLabel>Our Work</SectionLabel>
        <h1 className="mt-4 font-serif text-fluid-h2 text-white-pure">
          Case studies coming soon.
        </h1>
        <p className="mt-6 max-w-xl font-sans leading-relaxed text-white-muted">
          We are currently working on documenting our project work. In the meantime, reach out
          directly — we are happy to discuss what we can build for you and walk through our
          approach in a discovery call.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="primary" href="/contact">
            Start a Conversation
          </Button>
          <Button variant="ghost" href="/work">
            ← Back to What We Build
          </Button>
        </div>
      </section>
    </article>
  )
}
