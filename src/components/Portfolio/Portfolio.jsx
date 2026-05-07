import styles from './Portfolio.module.css'

const Portfolio = () => {
  const projects = [
    {
      title: 'Aster Skin',
      year: '2025',
      result: '+120% Revenue in 6 months',
      category: 'D2C Skincare',
    },
    {
      title: 'NorthRoot',
      year: '2024',
      result: '2.3x ROAS at 30% lower CAC',
      category: 'Home & Living',
    },
    {
      title: 'Bloom Pantry',
      year: '2025',
      result: '+41% Checkout Conversion',
      category: 'Grocery Commerce',
    },
  ]

  return (
    <section id="work" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>OUR WORK</span>
          <h2 className={styles.title}>Transforming eCommerce brands with results that speak</h2>
          <p className={styles.subtitle}>
            Strategy, storefront engineering, and growth execution under one roof.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article
              key={index}
              className={styles.projectCard}
            >
              <div className={styles.meta}>
                <span>{project.year}</span>
                <span className={styles.categoryBadge}>{project.category}</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectResult}>{project.result}</p>
              <a href="/portfolio" className={styles.link}>View Case Study →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

