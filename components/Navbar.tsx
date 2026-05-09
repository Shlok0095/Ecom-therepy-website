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
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
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
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-void/75 backdrop-blur-md backdrop-saturate-125">
        <div className="mx-auto flex h-[5.125rem] w-full max-w-[90rem] items-center justify-between px-6 lg:px-10">
          <BrandLogo size="header" />

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group relative font-mono text-[11px] uppercase tracking-[0.22em] text-white-muted transition-colors duration-300',
                  'hover:text-pearl',
                  pathname === item.href && 'text-pearl'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/45 transition-transform duration-300 ease-out group-hover:scale-x-100',
                    pathname === item.href && 'scale-x-100'
                  )}
                />
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
            className="text-pearl md:hidden"
            aria-label="Toggle menu"
            data-hover
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <motion.div
          className="h-[2px] w-full origin-left bg-white/35"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-void/98 pt-[5.5rem] backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="flex flex-col gap-2 px-6"
              variants={menuVariants}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/[0.06] py-4 font-serif text-4xl tracking-tight text-pearl"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <a
                  href="/ecom-therapy-pricing-guide.html"
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-4xl tracking-tight text-white-muted"
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
