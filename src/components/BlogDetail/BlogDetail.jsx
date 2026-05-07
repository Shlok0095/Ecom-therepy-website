import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaCalendar, FaUser, FaClock, FaTag } from 'react-icons/fa'
import styles from './BlogDetail.module.css'

const BlogDetail = ({ blog, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!blog) return null

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

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
                <div className={styles.iconContainer} style={{ '--gradient': blog.gradient }}>
                  {blog.icon}
                </div>
              </motion.div>

              <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {blog.title}
              </motion.h1>

              <motion.div
                className={styles.metaInfo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className={styles.metaItem}>
                  <FaUser className={styles.metaIcon} />
                  <span>{blog.author}</span>
                </div>
                <div className={styles.metaItem}>
                  <FaCalendar className={styles.metaIcon} />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className={styles.metaItem}>
                  <FaClock className={styles.metaIcon} />
                  <span>{blog.readTime}</span>
                </div>
                <div className={styles.metaItem}>
                  <FaTag className={styles.metaIcon} />
                  <span>{blog.category}</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.tags}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {blog.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </motion.div>

              <motion.div
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className={styles.contentText}>
                  {blog.detailedDescription.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      const text = paragraph.slice(2, -2)
                      return (
                        <h3 key={index} className={styles.subheading}>
                          {text}
                        </h3>
                      )
                    }
                    if (paragraph.startsWith('**')) {
                      const parts = paragraph.split('**')
                      return (
                        <p key={index} className={styles.paragraph}>
                          {parts.map((part, i) => 
                            i % 2 === 1 ? (
                              <strong key={i} className={styles.bold}>{part}</strong>
                            ) : (
                              <span key={i}>{part}</span>
                            )
                          )}
                        </p>
                      )
                    }
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(item => item.startsWith('- '))
                      return (
                        <ul key={index} className={styles.list}>
                          {items.map((item, i) => {
                            const text = item.substring(2)
                            // Check if it has format "**Bold Text**: Description"
                            const boldMatch = text.match(/^\*\*(.+?)\*\*:\s*(.+)$/)
                            if (boldMatch) {
                              const [, boldText, description] = boldMatch
                              return (
                                <li key={i} className={styles.listItem}>
                                  <span className={styles.listItemTitle}>{boldText}</span>
                                  <span className={styles.listItemDesc}>: {description}</span>
                                </li>
                              )
                            }
                            return (
                              <li key={i} className={styles.listItem}>
                                {text}
                              </li>
                            )
                          })}
                        </ul>
                      )
                    }
                    return (
                      <p key={index} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BlogDetail

