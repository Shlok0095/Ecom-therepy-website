import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import Script from 'next/script'

import Navbar from '@/components/Navbar'
import PageTransition from '@/components/PageTransition'

import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Ecom Therapy | Software & IT Solutions',
  description:
    'We build web apps, custom software, DevOps infrastructure, AI/ML solutions and deliver end-to-end IT services for businesses of all sizes.',
}

const cursorScript = `
(function(){
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
    ringX += (mouseX - ringX - 16) * 0.12;
    ringY += (mouseY - ringY - 16) * 0.12;
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-black font-sans text-white">
        <div id="cursor-dot" aria-hidden />
        <div id="cursor-ring" aria-hidden />
        <Script id="cursor-follow" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: cursorScript }} />
        <Navbar />
        <main className="pt-[82px]">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  )
}
