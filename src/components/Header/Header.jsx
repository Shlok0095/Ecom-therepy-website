import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Services', 'Work', 'Process', 'About', 'Contact']

  const handleNavClick = (id) => {
    const sectionId = id.toLowerCase()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <button className={styles.logo} onClick={() => navigate('/')}>Ecom Therapy</button>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button key={item} className={styles.navLink} onClick={() => handleNavClick(item)}>
              {item}
            </button>
          ))}
        </nav>
        <button className={styles.ctaBtn} onClick={() => handleNavClick('Contact')}>Book a Free Call</button>

        <motion.button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <button
                key={item}
                className={styles.mobileNavLink}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            ))}
            <button className={styles.ctaBtn} onClick={() => handleNavClick('Contact')}>Book a Free Call</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

