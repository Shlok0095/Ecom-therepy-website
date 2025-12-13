import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaArrowDown } from 'react-icons/fa'
import AnimatedText from '../AnimatedText/AnimatedText'
import styles from './Hero.module.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const createFloatingElement = () => {
      const element = document.createElement('div')
      element.className = styles.floatingElement
      element.style.left = Math.random() * 100 + '%'
      element.style.animationDuration = (Math.random() * 3 + 2) + 's'
      element.style.animationDelay = Math.random() * 2 + 's'
      heroRef.current?.appendChild(element)

      setTimeout(() => {
        element.remove()
      }, 5000)
    }

    const interval = setInterval(createFloatingElement, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaRocket />
            <span>Welcome to the Future</span>
          </motion.div>

          <h1 className={styles.title}>
            <AnimatedText text="NeUTRON" delay={0.8} />
            <br />
            <AnimatedText text="WEB" delay={1.2} />
          </h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Crafting <span className={styles.highlight}>Futuristic</span> Digital
            <br />
            Experiences for Tomorrow
          </motion.p>

          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.a
              href="#contact"
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#portfolio"
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const portfolioSection = document.getElementById('portfolio')
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.glowOrb}></div>
          <div className={styles.glowOrb2}></div>
          <div className={styles.neutronStar}>
            <div className={styles.toroidalField}></div>
            <div className={styles.polarJetTop}></div>
            <div className={styles.polarJetBottom}></div>
            <div className={styles.starCore}></div>
            <div className={styles.energyRing1}></div>
            <div className={styles.energyRing2}></div>
            <div className={styles.energyRing3}></div>
            <div className={styles.particle1}></div>
            <div className={styles.particle2}></div>
            <div className={styles.particle3}></div>
            <div className={styles.particle4}></div>
            <div className={styles.particle5}></div>
            <div className={styles.particle6}></div>
            <div className={styles.particle7}></div>
            <div className={styles.particle8}></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  )
}

export default Hero

