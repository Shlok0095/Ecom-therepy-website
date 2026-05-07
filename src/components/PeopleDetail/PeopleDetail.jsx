import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import styles from './PeopleDetail.module.css'

const PeopleDetail = ({ person, onClose }) => {
  if (!person) return null

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
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            className={styles.closeBtn}
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes />
          </motion.button>

          <div className={styles.content}>
            <div className={styles.leftSection}>
              <div className={styles.imageSection}>
                <div 
                  className={styles.imageContainer}
                  style={{ '--gradient': person.gradient }}
                >
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className={styles.personImage}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex'
                      }
                    }}
                  />
                  <div className={styles.iconFallback}>
                    {person.icon}
                  </div>
                </div>
                <div className={styles.iconWrapper} style={{ '--gradient': person.gradient }}>
                  {person.icon}
                </div>
              </div>
            </div>

            <div className={styles.rightSection}>
              <div className={styles.headerInfo}>
                <h2 className={styles.title}>{person.name}</h2>
                <p className={styles.role}>{person.role}</p>
              </div>

              <div className={styles.bioSection}>
                <h3 className={styles.sectionTitle}>About</h3>
                <p className={styles.bio}>{person.bio}</p>
              </div>

              <div className={styles.expertiseSection}>
                <h3 className={styles.sectionTitle}>Areas of Expertise</h3>
                <div className={styles.expertiseList}>
                  {person.expertise.map((skill, index) => (
                    <span key={index} className={styles.expertiseTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PeopleDetail


