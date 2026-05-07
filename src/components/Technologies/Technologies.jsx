import styles from './Technologies.module.css'

const Technologies = () => {
  const steps = [
    {
      title: 'Discovery & Audit',
      description: 'We map your current funnel, stack, and growth bottlenecks.',
    },
    {
      title: 'Strategy & Roadmap',
      description: 'We prioritize high-impact actions with a clear execution plan.',
    },
    {
      title: 'Design & Engineering',
      description: 'Our team ships experience and infrastructure with precision.',
    },
    {
      title: 'Launch & Optimize',
      description: 'We release with measurement baked in and optimize quickly.',
    },
    {
      title: 'Scale & Retain',
      description: 'Retention, automation, and growth loops for long-term value.',
    },
  ]

  return (
    <section className={styles.technologies} id="process">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>HOW WE WORK</span>
          <h2 className={styles.title}>A battle-tested process for eCommerce growth</h2>
        </div>
        <div className={styles.categoriesGrid}>
          {steps.map((step, index) => (
            <div key={step.title} className={styles.categoryCard}>
              <span className={styles.stepNo}>Step {index + 1}</span>
              <h3 className={styles.categoryTitle}>{step.title}</h3>
              <p className={styles.desc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies



