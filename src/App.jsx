import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ParticleBackground from './components/ParticleBackground/ParticleBackground'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/Services'
import AIWorksPage from './pages/AIWorks'
import BlogPage from './pages/Blog'
import PortfolioPage from './pages/Portfolio'
import PeoplesPage from './pages/Peoples'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="app">
      <ParticleBackground />
      <div className="cursor-glow" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/aiworks" element={<AIWorksPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/peoples" element={<PeoplesPage />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  )
}

export default App

