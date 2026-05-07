import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h3 className={styles.wordmark}>Ecom Therapy</h3>
          <p className={styles.tagline}>Your eCommerce Growth Partner — Strategy, Tech & Scale</p>
        </div>
        <div className={styles.columns}>
          <div>
            <h4>Services</h4>
            <p>Shopify & Headless</p>
            <p>Storefront Engineering</p>
            <p>Performance Marketing</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Process</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Connect</h4>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>WhatsApp</p>
            <p>GitHub</p>
          </div>
        </div>
        <form className={styles.newsletter}>
          <label htmlFor="newsletter">Get eCommerce insights in your inbox</label>
          <div className={styles.row}>
            <input id="newsletter" type="email" placeholder="Email address" />
            <button type="button">Subscribe</button>
          </div>
        </form>
      </div>
      <div className={styles.bottom}>© 2025 Ecom Therapy · www.ecomtherapy.co.in · All rights reserved</div>
    </footer>
  )
}

export default Footer
