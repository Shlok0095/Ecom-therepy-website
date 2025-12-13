import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'Quantum Dashboard',
      category: 'Web App',
      description: 'Advanced analytics dashboard with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      link: 'https://nutronweb.com/portfolio/quantum-dashboard',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tech: ['React', 'TypeScript', 'D3.js'],
    },
    {
      title: 'Nexus E-Commerce',
      category: 'E-Commerce',
      description: 'Modern shopping platform with AI-powered recommendations',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      link: 'https://nutronweb.com/portfolio/nexus-ecommerce',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tech: ['Next.js', 'Stripe', 'MongoDB'],
    },
    {
      title: 'Cyber Finance',
      category: 'FinTech',
      description: 'Secure financial management platform with blockchain integration',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      link: 'https://nutronweb.com/portfolio/cyber-finance',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Aurora Social',
      category: 'Social Media',
      description: 'Next-generation social networking platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      link: 'https://nutronweb.com/portfolio/aurora-social',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      tech: ['React Native', 'GraphQL', 'AWS'],
    },
    {
      title: 'Nebula CMS',
      category: 'CMS',
      description: 'Headless CMS with intuitive content management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      link: 'https://nutronweb.com/portfolio/nebula-cms',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tech: ['Gatsby', 'Contentful', 'Netlify'],
    },
    {
      title: 'Stellar Learning',
      category: 'EdTech',
      description: 'Interactive learning platform with VR integration',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      link: 'https://nutronweb.com/portfolio/stellar-learning',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      tech: ['React', 'Three.js', 'WebRTC'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="portfolio" className={styles.portfolio} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>Our Work</span>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            Showcasing our best work and innovative solutions
          </p>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              style={{ '--gradient': project.gradient }}
            >
              <div className={styles.imageContainer}>
                <div
                  className={styles.projectImage}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                      <motion.a
                        href={`https://github.com/nutronweb/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        whileHover={{ scale: 1.2, rotate: -90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className={styles.categoryBadge}>{project.category}</div>
              </div>

              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={styles.techTag}
                      style={{ '--i': techIndex }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardGlow}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

