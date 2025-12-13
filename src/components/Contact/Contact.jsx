import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'hello@nutronweb.com',
      link: 'mailto:hello@nutronweb.com',
      color: '#00f0ff',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#ff00ff',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco+CA',
      color: '#00ff88',
    },
  ]

  const socialLinks = [
    { icon: <FaLinkedin />, link: 'https://linkedin.com/company/nutronweb', color: '#0077b5' },
    { icon: <FaTwitter />, link: 'https://twitter.com/nutronweb', color: '#1da1f2' },
    { icon: <FaGithub />, link: 'https://github.com/nutronweb', color: '#ffffff' },
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
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>Get In Touch</span>
          <h2 className={styles.title}>
            Let's Build Something <span className={styles.highlight}>Amazing</span>
          </h2>
          <p className={styles.subtitle}>
            Ready to transform your digital presence? Let's start a conversation.
          </p>
        </motion.div>

        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.contactInfo} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            <p className={styles.sectionDescription}>
              We're here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>

            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.infoCard}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{ '--icon-color': info.color, '--i': index }}
                >
                  <div className={styles.iconWrapper}>{info.icon}</div>
                  <h4 className={styles.infoTitle}>{info.title}</h4>
                  <p className={styles.infoValue}>{info.value}</p>
                </motion.a>
              ))}
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className={styles.contactForm}
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <motion.div
              className={styles.formGroup}
              whileFocus={{ scale: 1.02 }}
            >
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </motion.div>

            <motion.div
              className={styles.formGroup}
              whileFocus={{ scale: 1.02 }}
            >
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </motion.div>

            <motion.div
              className={styles.formGroup}
              whileFocus={{ scale: 1.02 }}
            >
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows="6"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

