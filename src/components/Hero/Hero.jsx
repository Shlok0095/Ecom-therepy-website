import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const Hero = () => {
  const heroRef = useRef(null)
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.tagline}>Your eCommerce Growth Partner — Strategy, Tech & Scale</p>
          <h1 className={styles.title}>
            <span>Ecom Therapy:</span>
            <span className={styles.outline}>Scale What Works.</span>
          </h1>
          <p className={styles.subtitle}>
            We help D2C brands and online stores grow with the right tech stack, performance marketing,
            and conversion-focused design.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn} onClick={() => scrollTo('contact')}>Book a Free Call</button>
            <button className={styles.secondaryBtn} onClick={() => scrollTo('work')}>See Our Work →</button>
          </div>
        </div>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          Shopify · Next.js · React · Node.js · AWS · Performance Marketing · CRO · Email Automation · Headless Commerce · SEO ·
        </div>
      </div>
    </section>
  )
}

export default Hero

