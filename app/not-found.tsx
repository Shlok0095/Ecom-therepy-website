import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] w-full flex-col items-center justify-center px-8 py-24">
      <p className="font-serif text-fluid-hero text-white/10">404</p>
      <h2 className="mt-6 font-serif text-fluid-h2 text-white-pure">Page not found.</h2>
      <Button variant="primary" className="mt-10" href="/">
        Back to home
      </Button>
    </section>
  )
}
