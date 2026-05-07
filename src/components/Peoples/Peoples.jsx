import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import {
  FaUserTie,
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaCog,
  FaRocket,
} from 'react-icons/fa'
import PeopleDetail from '../PeopleDetail/PeopleDetail'
import styles from './Peoples.module.css'

const Peoples = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedPerson, setSelectedPerson] = useState(null)

  // Sample data structure - user will provide actual images and roles
  // To add images: Place them in public/images/people/ folder and reference as '/images/people/filename.jpg'
  const people = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/images/people/john-doe.jpg', // Add your image to public/images/people/ folder
      icon: <FaUserTie />,
      description: 'Visionary leader with 15+ years of experience in technology and business strategy',
      bio: 'John Doe is a seasoned eCommerce operator with over 15 years of experience in building and scaling digital brands. He founded Ecom Therapy with a vision to align strategy, tech, and growth execution.',
      expertise: ['Strategic Planning', 'Business Development', 'Leadership'],
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      image: '/images/people/jane-smith.jpg', // Add your image to public/images/people/ folder
      icon: <FaCode />,
      description: 'Expert in software architecture and emerging technologies',
      bio: 'Jane Smith brings extensive technical expertise in software architecture, cloud computing, and AI/ML technologies. She leads our technical team in building scalable and innovative solutions.',
      expertise: ['Software Architecture', 'Cloud Computing', 'AI/ML'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Lead Designer',
      image: '/images/people/mike-johnson.jpg', // Add your image to public/images/people/ folder
      icon: <FaPaintBrush />,
      description: 'Creative director specializing in UX/UI design and brand identity',
      bio: 'Mike Johnson is a creative visionary with a passion for designing intuitive and beautiful user experiences. His designs have won multiple awards and transformed digital products.',
      expertise: ['UX/UI Design', 'Brand Identity', 'Design Systems'],
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Data Scientist',
      image: '/images/people/sarah-williams.jpg', // Add your image to public/images/people/ folder
      icon: <FaChartLine />,
      description: 'AI/ML specialist focused on predictive analytics and machine learning',
      bio: 'Sarah Williams is a data science expert with a deep understanding of machine learning algorithms and predictive analytics. She develops AI solutions that drive business value.',
      expertise: ['Machine Learning', 'Data Analytics', 'AI Research'],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    },
    {
      id: 5,
      name: 'David Brown',
      role: 'DevOps Engineer',
      image: '/images/people/david-brown.jpg', // Add your image to public/images/people/ folder
      icon: <FaCog />,
      description: 'Infrastructure specialist ensuring scalable and reliable deployments',
      bio: 'David Brown is a DevOps expert who ensures our infrastructure is scalable, secure, and reliable. He automates deployment processes and maintains our cloud infrastructure.',
      expertise: ['DevOps', 'Cloud Infrastructure', 'CI/CD'],
      gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    },
    {
      id: 6,
      name: 'Emily Davis',
      role: 'Product Manager',
      image: '/images/people/emily-davis.jpg', // Add your image to public/images/people/ folder
      icon: <FaRocket />,
      description: 'Product strategist driving innovation and user-centric solutions',
      bio: 'Emily Davis is a product management expert who bridges the gap between business needs and technical solutions. She ensures our products deliver exceptional value to users.',
      expertise: ['Product Strategy', 'Agile Methodology', 'User Research'],
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
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
    <section className={styles.peoples} ref={ref}>
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
          {people.map((person) => (
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
                      // Fallback to icon if image fails to load
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
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
      </div>

      {selectedPerson && (
        <PeopleDetail person={selectedPerson} onClose={() => setSelectedPerson(null)} />
      )}
    </section>
  )
}

export default Peoples

