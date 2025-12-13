import { useEffect } from 'react'
import Services from '../components/Services/Services'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <Services />
    </div>
  )
}

export default ServicesPage

