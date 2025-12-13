import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaRocket, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa'
import styles from './About.module.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    {
      icon: <FaRocket />,
      title: 'Innovation First',
      description: 'Cutting-edge solutions that push boundaries',
      color: '#00f0ff',
    },
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Production-ready, maintainable codebase',
      color: '#ff00ff',
    },
    {
      icon: <FaLightbulb />,
      title: 'Creative Solutions',
      description: 'Unique approaches to complex problems',
      color: '#00ff88',
    },
    {
      icon: <FaUsers />,
      title: 'Team Excellence',
      description: 'Expert team delivering world-class results',
      color: '#00f0ff',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={styles.content}
        >
          <motion.div variants={itemVariants} className={styles.header}>
            <span className={styles.badge}>About Us</span>
            <h2 className={styles.title}>
              Building the <span className={styles.highlight}>Future</span> of Web
            </h2>
            <p className={styles.description}>
              At NeUTRON Web, we don't just build websites—we craft digital experiences
              that transport users into the future. Our team combines cutting-edge
              technology with creative vision to deliver solutions that are both
              beautiful and functional.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className={styles.featuresGrid}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={styles.featureCard}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div
                  className={styles.iconWrapper}
                  style={{ '--icon-color': feature.color, '--i': index }}
                >
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={styles.statsContainer}
          >
            <motion.div
              className={styles.stat}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={styles.statNumber}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
              >
                500+
              </motion.div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </motion.div>
            <motion.div
              className={styles.stat}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={styles.statNumber}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                98%
              </motion.div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </motion.div>
            <motion.div
              className={styles.stat}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={styles.statNumber}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                50+
              </motion.div>
              <div className={styles.statLabel}>Team Members</div>
            </motion.div>
            <motion.div
              className={styles.stat}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={styles.statNumber}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                10+
              </motion.div>
              <div className={styles.statLabel}>Years Experience</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

