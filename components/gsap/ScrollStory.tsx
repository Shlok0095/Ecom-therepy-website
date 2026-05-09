'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { GSAP_EASE_OUT_LUXURY } from '@/lib/motion/tokens'

export type ScrollStoryProps = {
  children: React.ReactNode
}

/**
 * GSAP ScrollTrigger choreography — desktop pin + scrubbed reveals; mobile: no pin.
 */
export function ScrollStory({ children }: ScrollStoryProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const root = rootRef.current
    if (!root) return

    const mm = gsap.matchMedia()

    const ctx = gsap.context(() => {
      mm.add('(min-width: 768px)', () => {
        const pin = root.querySelector('[data-scroll-pin]')
        if (pin instanceof HTMLElement) {
          gsap.fromTo(
            pin.querySelectorAll('[data-pin-reveal]'),
            { opacity: 0, y: 44 },
            {
              opacity: 1,
              y: 0,
              duration: 0.95,
              ease: GSAP_EASE_OUT_LUXURY,
              stagger: 0.11,
              scrollTrigger: {
                trigger: pin,
                start: 'top 78%',
                once: true,
              },
            }
          )

          ScrollTrigger.create({
            trigger: pin,
            start: 'top top+=88',
            end: '+=135%',
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          })
        }
      })

      mm.add('(max-width: 767px)', () => {
        const pin = root.querySelector('[data-scroll-pin]')
        if (pin instanceof HTMLElement) {
          gsap.fromTo(
            pin.querySelectorAll('[data-pin-reveal]'),
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.78,
              ease: GSAP_EASE_OUT_LUXURY,
              stagger: 0.07,
              scrollTrigger: {
                trigger: pin,
                start: 'top 86%',
                once: true,
              },
            }
          )
        }
      })

      const cards = root.querySelectorAll('[data-story-card]')
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -36 },
          {
            opacity: 1,
            x: 0,
            ease: GSAP_EASE_OUT_LUXURY,
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              end: 'top 34%',
              scrub: 0.55,
            },
          }
        )
      })

      const track = root.querySelector('[data-story-track]')
      const line = root.querySelector('[data-story-line]')
      if (track instanceof HTMLElement && line instanceof HTMLElement) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: track,
              start: 'top 82%',
              end: 'bottom 72%',
              scrub: true,
            },
          }
        )
      }
    }, root)

    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      ctx.revert()
      mm.revert()
    }
  }, [])

  return (
    <div ref={rootRef} className="relative">
      {children}
    </div>
  )
}
