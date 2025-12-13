import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCode, FaLaptop, FaMobile, FaPalette, FaSearch, FaRocket, FaCloud } from 'react-icons/fa'
import styles from './Service3D.module.css'

const Service3D = ({ service, activeFeature }) => {
  const containerRef = useRef(null)
  const [animationPhase, setAnimationPhase] = useState(0) // 0 = first animation, 1 = second animation

  useEffect(() => {
    // Switch between animation phases
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev === 0 ? 1 : 0))
    }, 4000) // Switch every 4 seconds
    return () => clearInterval(interval)
  }, [])

  const getServiceAnimation = () => {
    const title = service.title.toLowerCase()
    
    if (title.includes('web development') || title.includes('web')) {
      return {
        phase1: <WebDevPhase1 />,
        phase2: <WebDevPhase2 />
      }
    } else if (title.includes('mobile')) {
      return {
        phase1: <MobilePhase1 />,
        phase2: <MobilePhase2 />
      }
    } else if (title.includes('design') || title.includes('ui') || title.includes('ux')) {
      return {
        phase1: <DesignPhase1 />,
        phase2: <DesignPhase2 />
      }
    } else if (title.includes('seo')) {
      return {
        phase1: <SEOPhase1 />,
        phase2: <SEOPhase2 />
      }
    } else if (title.includes('performance')) {
      return {
        phase1: <PerformancePhase1 />,
        phase2: <PerformancePhase2 />
      }
    } else if (title.includes('cloud')) {
      return {
        phase1: <CloudPhase1 />,
        phase2: <CloudPhase2 />
      }
    }
    
    return {
      phase1: <DefaultPhase1 />,
      phase2: <DefaultPhase2 />
    }
  }

  const animations = getServiceAnimation()

  return (
    <div className={styles.container3D} ref={containerRef}>
      <div className={styles.scene3D} style={{ '--gradient': service.gradient }}>
        <AnimatePresence mode="wait">
          {animationPhase === 0 ? (
            <motion.div
              key="phase1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={styles.animationPhase}
            >
              {animations.phase1}
            </motion.div>
          ) : (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={styles.animationPhase}
            >
              {animations.phase2}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Web Development Animations
const WebDevPhase1 = () => (
  <div className={styles.codingAnimation}>
    <div className={styles.codeEditor}>
      <div className={styles.codeHeader}>
        <div className={styles.codeDots}>
          <span></span><span></span><span></span>
        </div>
        <div className={styles.codeTitle}>app.jsx</div>
      </div>
      <div className={styles.codeLines}>
        {['import React', 'const App = () => {', '  return (', '    <div>', '      <h1>Hello</h1>', '    </div>', '  )', '}'].map((line, i) => (
          <motion.div
            key={i}
            className={styles.codeLine}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.3 }}
          >
            <span className={styles.lineNumber}>{i + 1}</span>
            <span className={styles.codeText}>{line}</span>
            {i === 0 && <motion.span className={styles.cursor} animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>|</motion.span>}
          </motion.div>
        ))}
      </div>
    </div>
    <div className={styles.codingGlow}></div>
  </div>
)

const WebDevPhase2 = () => (
  <div className={styles.webAppAnimation}>
    <div className={styles.browserWindow}>
      <div className={styles.browserHeader}>
        <div className={styles.browserDots}>
          <span></span><span></span><span></span>
        </div>
        <div className={styles.browserUrl}>https://nutronweb.com</div>
      </div>
      <div className={styles.webContent}>
        <motion.div
          className={styles.webElement}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.webHeader}>Header</div>
        </motion.div>
        <motion.div
          className={styles.webElement}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.webContentArea}>Content</div>
        </motion.div>
        <motion.div
          className={styles.webElement}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className={styles.webFooter}>Footer</div>
        </motion.div>
      </div>
    </div>
  </div>
)

// Mobile App Animations
const MobilePhase1 = () => (
  <div className={styles.mobileDevAnimation}>
    <div className={styles.phoneFrame}>
      <div className={styles.phoneScreen}>
        <motion.div
          className={styles.appIcon}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <FaMobile />
        </motion.div>
        <motion.div
          className={styles.codeSnippet}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.mobileCode}>React Native</div>
          <div className={styles.mobileCode}>Components</div>
        </motion.div>
      </div>
    </div>
  </div>
)

const MobilePhase2 = () => (
  <div className={styles.mobileAppAnimation}>
    <div className={styles.phoneFrame}>
      <div className={styles.phoneScreen}>
        <motion.div
          className={styles.mobileApp}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.mobileHeader}>App</div>
          <div className={styles.mobileContent}>
            <div className={styles.mobileCard}></div>
            <div className={styles.mobileCard}></div>
            <div className={styles.mobileCard}></div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
)

// UI/UX Design Animations
const DesignPhase1 = () => (
  <div className={styles.designAnimation}>
    <div className={styles.designCanvas}>
      <motion.div
        className={styles.designElement}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className={styles.designElement}
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className={styles.colorPalette}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        {['#00f0ff', '#ff00ff', '#00ff88'].map((color, i) => (
          <motion.div
            key={i}
            className={styles.colorSwatch}
            style={{ background: color }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  </div>
)

const DesignPhase2 = () => (
  <div className={styles.uiAnimation}>
    <div className={styles.uiMockup}>
      <motion.div
        className={styles.uiComponent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.uiHeader}>Navigation</div>
      </motion.div>
      <motion.div
        className={styles.uiComponent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className={styles.uiContent}>Hero Section</div>
      </motion.div>
      <motion.div
        className={styles.uiComponent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className={styles.uiFooter}>Footer</div>
      </motion.div>
    </div>
  </div>
)

// SEO Animations
const SEOPhase1 = () => (
  <div className={styles.seoAnimation}>
    <div className={styles.searchEngine}>
      <motion.div
        className={styles.searchBar}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8 }}
      >
        <FaSearch className={styles.searchIcon} />
        <motion.div
          className={styles.searchText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Searching...
        </motion.div>
      </motion.div>
    </div>
    <div className={styles.seoMetrics}>
      {['Keywords', 'Backlinks', 'Ranking'].map((metric, i) => (
        <motion.div
          key={i}
          className={styles.metric}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 + i * 0.2, type: 'spring' }}
        >
          {metric}
        </motion.div>
      ))}
    </div>
  </div>
)

const SEOPhase2 = () => (
  <div className={styles.rankingAnimation}>
    <div className={styles.rankingList}>
      {[1, 2, 3].map((rank, i) => (
        <motion.div
          key={i}
          className={styles.rankingItem}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.2 }}
        >
          <div className={styles.rankNumber}>{rank}</div>
          <div className={styles.rankBar} style={{ width: `${100 - i * 20}%` }}></div>
        </motion.div>
      ))}
    </div>
    <motion.div
      className={styles.trendArrow}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      ↗
    </motion.div>
  </div>
)

// Performance Animations
const PerformancePhase1 = () => (
  <div className={styles.performanceAnimation}>
    <div className={styles.speedMeter}>
      <motion.div
        className={styles.speedNeedle}
        initial={{ rotate: -90 }}
        animate={{ rotate: 45 }}
        transition={{ duration: 1.5 }}
      />
      <div className={styles.speedLabels}>
        <span>Slow</span>
        <span>Fast</span>
      </div>
    </div>
    <div className={styles.performanceStats}>
      <motion.div
        className={styles.statBar}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Load Time: 0.5s
      </motion.div>
    </div>
  </div>
)

const PerformancePhase2 = () => (
  <div className={styles.optimizationAnimation}>
    <div className={styles.optimizationSteps}>
      {['Compress', 'Cache', 'Optimize'].map((step, i) => (
        <motion.div
          key={i}
          className={styles.optimizationStep}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.3, type: 'spring' }}
        >
          <FaRocket />
          <span>{step}</span>
        </motion.div>
      ))}
    </div>
    <motion.div
      className={styles.speedBoost}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      ⚡
    </motion.div>
  </div>
)

// Cloud Solutions Animations
const CloudPhase1 = () => (
  <div className={styles.cloudAnimation}>
    <div className={styles.cloudInfrastructure}>
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={styles.cloudServer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * i }}
        >
          <FaCloud />
          <div className={styles.serverLabel}>Server {i}</div>
        </motion.div>
      ))}
    </div>
  </div>
)

const CloudPhase2 = () => (
  <div className={styles.cloudDeployAnimation}>
    <div className={styles.deploymentFlow}>
      <motion.div
        className={styles.deployStep}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Build
      </motion.div>
      <motion.div
        className={styles.deployArrow}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5 }}
      >
        →
      </motion.div>
      <motion.div
        className={styles.deployStep}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        Deploy
      </motion.div>
      <motion.div
        className={styles.deployArrow}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.1 }}
      >
        →
      </motion.div>
      <motion.div
        className={styles.deployStep}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        Live
      </motion.div>
    </div>
  </div>
)

// Default Animations
const DefaultPhase1 = () => (
  <div className={styles.defaultAnimation}>
    <motion.div
      className={styles.defaultIcon}
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    >
      ⚡
    </motion.div>
  </div>
)

const DefaultPhase2 = () => (
  <div className={styles.defaultAnimation}>
    <motion.div
      className={styles.defaultIcon}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ✨
    </motion.div>
  </div>
)

export default Service3D

