import { useEffect } from 'react'
import AIWorks from '../components/AIWorks/AIWorks'

const AIWorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <AIWorks />
    </div>
  )
}

export default AIWorksPage

