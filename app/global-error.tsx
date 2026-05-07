'use client'

import Button from '@/components/ui/Button'

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="bg-black font-sans text-white">
        <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-8 py-16">
          <div className="w-full space-y-5 border border-black-border bg-black-surface p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-white-muted">Global error</p>
            <h1 className="font-serif text-fluid-h2 text-white-pure">Application error boundary triggered</h1>
            <p className="max-w-2xl font-sans text-white-muted">
              An unrecoverable issue occurred while loading this page. Please retry.
            </p>
            {error?.message ? (
              <p className="font-sans text-sm text-white-muted">Details: {error.message}</p>
            ) : null}
            <div className="flex flex-wrap gap-5 pt-2">
              <Button variant="ghost" onClick={reset}>
                Retry
              </Button>
              <Button variant="secondary" href="/">
                Go Home →
              </Button>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}
