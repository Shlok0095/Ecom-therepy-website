import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>ABOUT</span>
          <h2 className={styles.title}>Built for operators, founders, and growth teams.</h2>
          <p className={styles.description}>
            Ecom Therapy partners with ambitious eCommerce brands to align strategy, tech, and performance.
            We go beyond execution and build repeatable systems that scale.
          </p>
        </div>
      </div>
      <div className={styles.quoteWrap}>
        <blockquote className={styles.quote}>
          "Ecom Therapy didn't just build our store — they rebuilt our entire growth engine. We hit 3x revenue within the first quarter."
        </blockquote>
        <p className={styles.attribution}>— BRAND NAME, Founder</p>
      </div>
    </section>
  )
}

export default About

