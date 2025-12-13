import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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

  const navItems = [
    { name: 'Home', path: '/', isRoute: true },
    { name: 'About', path: '#about', isRoute: false },
    { name: 'Services', path: '/services', isRoute: true },
    { name: 'AIWorks', path: '/aiworks', isRoute: true },
    { name: 'Portfolio', path: '#portfolio', isRoute: false },
    { name: 'Contact', path: '#contact', isRoute: false },
  ]

  const handleNavClick = (item) => {
    if (item.isRoute) {
      navigate(item.path)
      setIsMobileMenuOpen(false)
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const sectionId = item.path.replace('#', '')
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        const sectionId = item.path.replace('#', '')
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <span className={styles.logoText}>NeUTRON</span>
          <span className={styles.logoWeb}>WEB</span>
        </motion.div>

        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            item.isRoute ? (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ) : (
              <motion.a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item)
                }}
                className={styles.navLink}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#00f0ff' }}
              >
                {item.name}
              </motion.a>
            )
          ))}
        </nav>

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
              item.isRoute ? (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`${styles.mobileNavLink} ${location.pathname === item.path ? styles.active : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item)
                  }}
                  className={styles.mobileNavLink}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, color: '#00f0ff' }}
                >
                  {item.name}
                </motion.a>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

