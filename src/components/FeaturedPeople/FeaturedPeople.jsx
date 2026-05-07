import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaUserTie, FaCode, FaPaintBrush } from 'react-icons/fa'
import PeopleDetail from '../PeopleDetail/PeopleDetail'
import styles from './FeaturedPeople.module.css'

const FeaturedPeople = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedPerson, setSelectedPerson] = useState(null)
  const navigate = useNavigate()

  const featuredPeople = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/images/people/john-doe.jpg',
      icon: <FaUserTie />,
      description: 'Visionary leader with 15+ years of experience in technology and business strategy',
      bio: 'John Doe is a seasoned entrepreneur and technology executive with over 15 years of experience in building and scaling innovative tech companies.',
      expertise: ['Strategic Planning', 'Business Development', 'Leadership'],
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      image: '/images/people/jane-smith.jpg',
      icon: <FaCode />,
      description: 'Expert in software architecture and emerging technologies',
      bio: 'Jane Smith brings extensive technical expertise in software architecture, cloud computing, and AI/ML technologies.',
      expertise: ['Software Architecture', 'Cloud Computing', 'AI/ML'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Lead Designer',
      image: '/images/people/mike-johnson.jpg',
      icon: <FaPaintBrush />,
      description: 'Creative director specializing in UX/UI design and brand identity',
      bio: 'Mike Johnson is a creative visionary with a passion for designing intuitive and beautiful user experiences.',
      expertise: ['UX/UI Design', 'Brand Identity', 'Design Systems'],
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className={styles.featuredPeople} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Our Team</span>
          <h2 className={styles.title}>
            Meet Our <span className={styles.highlight}>People</span>
          </h2>
          <p className={styles.subtitle}>
            The talented individuals driving innovation and excellence
          </p>
        </motion.div>

        <motion.div
          className={styles.peopleGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {featuredPeople.map((person) => (
            <motion.div
              key={person.id}
              className={styles.personCard}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPerson(person)}
            >
              <div className={styles.imageWrapper}>
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
              <div className={styles.personInfo}>
                <h3 className={styles.personName}>{person.name}</h3>
                <p className={styles.personRole}>{person.role}</p>
                <p className={styles.personDescription}>{person.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            className={styles.viewAllBtn}
            onClick={() => navigate('/peoples')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Team Members
          </motion.button>
        </motion.div>
      </div>

      {selectedPerson && (
        <PeopleDetail person={selectedPerson} onClose={() => setSelectedPerson(null)} />
      )}
    </section>
  )
}

export default FeaturedPeople

