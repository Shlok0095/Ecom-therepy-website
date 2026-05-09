import type { Metadata } from 'next'
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'

import Navbar from '@/components/Navbar'
import PageTransition from '@/components/PageTransition'
import { AppProviders } from '@/components/layout/AppProviders'

import './globals.css'

const serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
  display: 'swap',
})
const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Ecom Therapy | Software Engineering & Cloud Services',
  description:
    'Custom web applications, cloud infrastructure, and AI integrations, delivered with structured security practices and clear engineering ownership.',
}

const cursorScript = `
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = (mouseX - 3) + 'px';
    dot.style.top = (mouseY - 3) + 'px';
  });
  function animateRing() {
    ringX += (mouseX - ringX - 16) * 0.11;
    ringY += (mouseY - ringY - 16) * 0.11;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  function bindHover(els) {
    els.forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        dot.classList.add('hovering');
        ring.classList.add('hovering');
      });
      el.addEventListener('mouseleave', function() {
        dot.classList.remove('hovering');
        ring.classList.remove('hovering');
      });
    });
  }
  bindHover(document.querySelectorAll('a, button, [data-hover]'));
})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain-global bg-void font-sans text-pearl antialiased">
        <AppProviders>
          <div id="cursor-dot" aria-hidden />
          <div id="cursor-ring" aria-hidden />
          <Script id="cursor-follow" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: cursorScript }} />
          <Navbar />
          <main className="relative z-[1] pt-[82px]">
            <PageTransition>{children}</PageTransition>
          </main>
        </AppProviders>
      </body>
    </html>
  )
}
