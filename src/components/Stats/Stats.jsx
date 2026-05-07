import styles from './Stats.module.css'

const Stats = () => {
  const brands = ['NorthRoot', 'Velora', 'UrbanCart', 'Aster Skin', 'Bloom Pantry', 'Lune Home']

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Trusted by growing eCommerce brands</h3>
        <div className={styles.statsGrid}>
          {brands.map((brand) => (
            <div key={brand} className={styles.badge}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats



