import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './AnimatedText.module.css'

const AnimatedText = ({ text, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span className={styles.animatedText}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className={styles.char}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default AnimatedText

