'use client'

import { useEffect } from 'react'

import Button from '@/components/ui/Button'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center px-8 py-16">
      <div className="w-full space-y-5 border border-black-border bg-black-surface p-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-white-muted">Something went wrong</p>
        <h1 className="font-serif text-fluid-h2 text-white-pure">We hit an unexpected error</h1>
        <p className="max-w-2xl font-sans text-white-muted">
          Please retry the page. If the issue continues, contact us and we will help immediately.
        </p>
        <div className="flex flex-wrap gap-5 pt-2">
          <Button variant="ghost" onClick={reset}>
            Try again
          </Button>
          <Button variant="secondary" href="/contact">
            Contact support →
          </Button>
        </div>
      </div>
    </section>
  )
}
