import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaSearch,
  FaRocket,
  FaCloud,
} from 'react-icons/fa'
import ServiceDetail from '../ServiceDetail/ServiceDetail'
import styles from './Services.module.css'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices',
      detailedDescription: 'Transform your business with cutting-edge web applications that deliver exceptional user experiences. Our team specializes in building scalable, performant, and secure web solutions using the latest technologies and industry best practices.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'API Integration',
        'Real-time Features',
        'E-commerce Solutions',
        'Custom CMS Development'
      ],
      benefits: [
        'Increased user engagement and conversion rates',
        'Scalable architecture for future growth',
        'Enhanced security and data protection',
        'Improved performance and load times',
        'Mobile-first responsive design'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS']
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      detailedDescription: 'Create powerful mobile experiences that engage users and drive business growth. We develop both native and cross-platform applications that deliver native performance with faster development cycles.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Biometric Authentication'
      ],
      benefits: [
        'Reach users on their preferred devices',
        'Enhanced user engagement and retention',
        'Access to device-specific features',
        'Improved brand visibility',
        'Higher conversion rates'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux']
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Stunning interfaces that combine aesthetics with exceptional user experience',
      detailedDescription: 'Design beautiful, intuitive interfaces that users love. Our design process focuses on understanding user needs, creating seamless experiences, and delivering visually stunning solutions that drive engagement.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'Accessibility Compliance',
        'Animation & Micro-interactions'
      ],
      benefits: [
        'Improved user satisfaction and retention',
        'Reduced development time and costs',
        'Higher conversion rates',
        'Enhanced brand perception',
        'Better accessibility and usability'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'After Effects', 'Framer']
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description: 'Boost your visibility and rankings with our proven SEO strategies',
      detailedDescription: 'Dominate search engine results with our comprehensive SEO services. We combine technical expertise with data-driven strategies to improve your rankings, drive organic traffic, and increase conversions.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      features: [
        'Technical SEO Audit',
        'Keyword Research & Strategy',
        'On-page Optimization',
        'Link Building',
        'Content Strategy',
        'Local SEO'
      ],
      benefits: [
        'Increased organic traffic and visibility',
        'Higher search engine rankings',
        'Better user experience',
        'Long-term sustainable growth',
        'Improved ROI on marketing efforts'
      ],
      technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush', 'Schema Markup']
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Lightning-fast websites optimized for speed and efficiency',
      detailedDescription: 'Achieve blazing-fast load times and optimal performance. We optimize every aspect of your website to ensure it loads quickly, runs smoothly, and provides an exceptional user experience across all devices.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      features: [
        'Performance Auditing',
        'Code Optimization',
        'Image & Asset Optimization',
        'CDN Integration',
        'Caching Strategies',
        'Lighthouse Optimization'
      ],
      benefits: [
        'Faster page load times',
        'Improved user experience',
        'Better search engine rankings',
        'Reduced bounce rates',
        'Lower server costs'
      ],
      technologies: ['Webpack', 'Vite', 'Cloudflare', 'AWS CloudFront', 'Redis', 'Next.js']
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions',
      detailedDescription: 'Leverage the power of cloud computing to scale your business. We design and implement robust cloud architectures that provide reliability, scalability, and cost-effectiveness for your applications.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      features: [
        'Cloud Architecture Design',
        'Serverless Solutions',
        'Auto-scaling Infrastructure',
        'DevOps & CI/CD',
        'Cloud Migration',
        'Monitoring & Analytics'
      ],
      benefits: [
        'Scalable infrastructure',
        'Reduced operational costs',
        'Improved reliability and uptime',
        'Enhanced security',
        'Faster deployment cycles'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.title}>
            What We <span className={styles.highlight}>Offer</span>
          </h2>
          <p className={styles.subtitle}>
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              variants={cardVariants}
              whileHover={{ y: -15, rotateY: 5 }}
              style={{ '--gradient': service.gradient }}
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.iconContainer}>
                <div className={styles.iconWrapper}>{service.icon}</div>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <motion.button
                className={styles.learnMore}
                whileHover={{ x: 5 }}
                onClick={() => setSelectedService(service)}
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  )
}

export default Services

