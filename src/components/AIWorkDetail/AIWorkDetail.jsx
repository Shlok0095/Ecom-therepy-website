import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaCheckCircle, FaRocket, FaBrain } from 'react-icons/fa'
import AIWork3D from './AIWork3D'
import styles from './AIWorkDetail.module.css'

const AIWorkDetail = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!project) return null

  const features = project.features || []
  const useCases = project.useCases || []
  const technologies = project.technologies || project.tech || []

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.detailContainer}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={onClose}>
            <FaTimes />
          </button>

          <div className={styles.content}>
            <div className={styles.leftSection}>
              <motion.div
                className={styles.iconWrapper}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <div className={styles.iconContainer} style={{ '--gradient': project.gradient }}>
                  {project.icon}
                </div>
              </motion.div>

              <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.detailedDescription || project.description}
              </motion.p>

              {features.length > 0 && (
                <motion.div
                  className={styles.features}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className={styles.sectionTitle}>
                    <FaBrain /> Key Features
                  </h3>
                  <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className={styles.featureItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                      >
                        <FaCheckCircle className={styles.checkIcon} />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {useCases.length > 0 && (
                <motion.div
                  className={styles.useCases}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className={styles.sectionTitle}>Use Cases</h3>
                  <ul className={styles.useCasesList}>
                    {useCases.map((useCase, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {useCase}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {technologies.length > 0 && (
                <motion.div
                  className={styles.technologies}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className={styles.sectionTitle}>Technologies</h3>
                  <div className={styles.techTags}>
                    {technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className={styles.techTag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.05, type: 'spring' }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.button
                className={styles.ctaButton}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                Explore Project
              </motion.button>
            </div>

            <div className={styles.rightSection}>
              <AIWork3D project={project} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AIWorkDetail

