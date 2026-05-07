'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

import Button from '@/components/ui/Button'
import BrandLogo from '@/components/BrandLogo'
import { cn } from '@/lib/cn'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const menuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-black-border bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <BrandLogo size="header" />

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-mono text-[12px] uppercase tracking-[0.15em] text-white-muted transition-colors duration-200 hover:text-white-pure',
                  pathname === item.href && 'border-b border-white-pure pb-0.5 text-white-pure'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="/ecom-therapy-pricing-guide.html">
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            className="text-white-pure md:hidden"
            aria-label="Toggle menu"
            data-hover
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <motion.div
          className="h-0.5 w-full origin-left bg-white-pure"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black pt-28 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="flex flex-col gap-4 px-6"
              variants={menuVariants}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-serif text-4xl text-white-pure"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <a
                  href="/ecom-therapy-pricing-guide.html"
                  onClick={() => setOpen(false)}
                  className="block font-serif text-4xl text-white-pure"
                >
                  Get a Quote
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
