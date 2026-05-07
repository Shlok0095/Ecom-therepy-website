import { useNavigate } from 'react-router-dom'
import styles from './FeaturedServices.module.css'

const FeaturedServices = () => {
  const navigate = useNavigate()

  const services = [
    {
      title: 'Shopify & Headless Commerce Development',
      description: 'Conversion-first storefront builds for modern eCommerce operations.',
      detail: 'Built for scale, speed, and measurable growth.',
    },
    {
      title: 'React / Next.js Storefront Engineering',
      description: 'Front-end architecture designed for speed, SEO, and flexibility.',
      detail: 'Composable UI systems that ship quickly.',
    },
    {
      title: 'Node.js Backend & API Integrations',
      description: 'Reliable services connecting your stack end-to-end.',
      detail: 'Clean APIs, robust data flows, fewer bottlenecks.',
    },
    {
      title: 'AWS Infrastructure & Performance Optimization',
      description: 'Scalable cloud architecture with ruthless performance tuning.',
      detail: 'Lower latency, better uptime, better margins.',
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Insights-led optimization across product pages and checkout.',
      detail: 'We test, measure, and iterate continuously.',
    },
    {
      title: 'Email & Retention Marketing Automation',
      description: 'Lifecycle journeys that recover revenue and increase LTV.',
      detail: 'Automations tailored to your customer behavior.',
    },
    {
      title: 'Performance Marketing & Paid Ads Strategy',
      description: 'Cross-channel paid media systems tied to profitability.',
      detail: 'Creative and data loops built for scale.',
    },
    {
      title: 'SEO & Organic Growth',
      description: 'Technical and content systems that compound search visibility.',
      detail: 'Long-term growth with stronger acquisition efficiency.',
    },
  ]

  return (
    <section className={styles.featuredServices} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>WHAT WE DO</span>
          <h2 className={styles.title}>End-to-end eCommerce solutions that move the needle</h2>
          <p className={styles.subtitle}>
            Strategy, engineering, and growth systems delivered by one integrated team.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
            >
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <p className={styles.detail}>{service.detail} <span>→</span></p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={styles.viewAllBtn} onClick={() => navigate('/services')}>View All Services</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices



