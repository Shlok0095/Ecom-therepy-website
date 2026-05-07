import { useState } from 'react'
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: '',
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
      setFormData({ name: '', email: '', storeUrl: '', message: '' })
      alert('Thanks! We will reach out shortly.')
    }, 1500)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>GET IN TOUCH</span>
          <h2 className={styles.title}>Let's grow your store together.</h2>
          <p className={styles.subtitle}>
            Book a free 30-minute strategy call with our team. No fluff — just honest insights
            about what will move the needle for your business.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.split}>
            <a className={styles.calendly} href="https://calendly.com" target="_blank" rel="noreferrer">
              <FaCalendarAlt /> Schedule a Call →
            </a>
            <div className={styles.contactCard}>
              <p><FaEnvelope /> hello@ecomtherapy.co.in</p>
              <p><FaGlobe /> www.ecomtherapy.co.in</p>
              <p><FaMapMarkerAlt /> India (Remote-first, serving global brands)</p>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.linkedin.com/in/ecom-therapy-pvt-ltd-704768238/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/ecom_therapy_pvt_ltd/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a href="https://wa.me/919122872786" target="_blank" rel="noreferrer" aria-label="WhatsApp Business">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="storeUrl" className={styles.label}>Brand/Store URL</label>
              <input
                type="url"
                id="storeUrl"
                name="storeUrl"
                value={formData.storeUrl}
                onChange={handleChange}
                className={styles.input}
                placeholder="https://"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

