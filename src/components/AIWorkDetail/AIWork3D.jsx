import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBrain, FaRobot, FaChartLine, FaMagic, FaEye, FaCog } from 'react-icons/fa'
import styles from './AIWork3D.module.css'

const AIWork3D = ({ project }) => {
  const containerRef = useRef(null)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev === 0 ? 1 : 0))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const getProjectAnimation = () => {
    const title = project.title.toLowerCase()
    
    if (title.includes('analytics')) {
      return {
        phase1: <AnalyticsPhase1 />,
        phase2: <AnalyticsPhase2 />
      }
    } else if (title.includes('chatbot')) {
      return {
        phase1: <ChatbotPhase1 />,
        phase2: <ChatbotPhase2 />
      }
    } else if (title.includes('predictive') || title.includes('modeling')) {
      return {
        phase1: <PredictivePhase1 />,
        phase2: <PredictivePhase2 />
      }
    } else if (title.includes('content') || title.includes('generation')) {
      return {
        phase1: <ContentPhase1 />,
        phase2: <ContentPhase2 />
      }
    } else if (title.includes('vision') || title.includes('computer')) {
      return {
        phase1: <VisionPhase1 />,
        phase2: <VisionPhase2 />
      }
    } else if (title.includes('automation')) {
      return {
        phase1: <AutomationPhase1 />,
        phase2: <AutomationPhase2 />
      }
    }
    
    return {
      phase1: <DefaultAIPhase1 />,
      phase2: <DefaultAIPhase2 />
    }
  }

  const animations = getProjectAnimation()

  return (
    <div className={styles.container3D} ref={containerRef}>
      <div className={styles.scene3D} style={{ '--gradient': project.gradient }}>
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

// AI Analytics Animations
const AnalyticsPhase1 = () => (
  <div className={styles.dataProcessing}>
    <div className={styles.dataFlow}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.dataPacket}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 300, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'linear'
          }}
        >
          <FaChartLine />
        </motion.div>
      ))}
    </div>
    <div className={styles.processingCenter}>
      <FaBrain className={styles.brainIcon} />
      <motion.div
        className={styles.processingRing}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  </div>
)

const AnalyticsPhase2 = () => (
  <div className={styles.insightsDisplay}>
    <div className={styles.chartContainer}>
      <motion.div
        className={styles.chartBar}
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div
        className={styles.chartBar}
        initial={{ height: 0 }}
        animate={{ height: '80%' }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.div
        className={styles.chartBar}
        initial={{ height: 0 }}
        animate={{ height: '120%' }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.div
        className={styles.chartBar}
        initial={{ height: 0 }}
        animate={{ height: '90%' }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
    <div className={styles.insightLabels}>
      {['Q1', 'Q2', 'Q3', 'Q4'].map((label, i) => (
        <motion.div
          key={i}
          className={styles.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + i * 0.1 }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  </div>
)

// Chatbot Animations
const ChatbotPhase1 = () => (
  <div className={styles.chatbotTraining}>
    <div className={styles.neuralNetwork}>
      {[...Array(9)].map((_, i) => {
        const row = Math.floor(i / 3)
        const col = i % 3
        return (
          <motion.div
            key={i}
            className={styles.neuralNode}
            style={{
              left: `${30 + col * 40}%`,
              top: `${20 + row * 30}%`
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        )
      })}
    </div>
    <div className={styles.connectionLines}>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.connection}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
        />
      ))}
    </div>
  </div>
)

const ChatbotPhase2 = () => (
  <div className={styles.chatInterface}>
    <div className={styles.chatWindow}>
      <motion.div
        className={styles.userMessage}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        Hello, how can you help?
      </motion.div>
      <motion.div
        className={styles.botMessage}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <FaRobot className={styles.botIcon} />
        I'm here to assist you!
      </motion.div>
      <motion.div
        className={styles.typingIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
      >
        <span></span><span></span><span></span>
      </motion.div>
    </div>
  </div>
)

// Predictive Modeling Animations
const PredictivePhase1 = () => (
  <div className={styles.modelTraining}>
    <div className={styles.trainingProgress}>
      <motion.div
        className={styles.progressBar}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className={styles.progressLabel}>Training Model...</div>
    </div>
    <div className={styles.dataPoints}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.dataPoint}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  </div>
)

const PredictivePhase2 = () => (
  <div className={styles.predictionDisplay}>
    <div className={styles.timeline}>
      <div className={styles.pastData}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.dataPoint}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 * i }}
          />
        ))}
      </div>
      <motion.div
        className={styles.predictionLine}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <div className={styles.futurePrediction}>
        <motion.div
          className={styles.predictedPoint}
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className={styles.predictionLabel}>Future</div>
      </div>
    </div>
  </div>
)

// Content Generation Animations
const ContentPhase1 = () => (
  <div className={styles.contentCreation}>
    <div className={styles.creationCanvas}>
      <motion.div
        className={styles.textGeneration}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {['Generating', 'Creative', 'Content', '...'].map((word, i) => (
          <motion.span
            key={i}
            className={styles.word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.3 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        className={styles.magicSparkles}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.sparkle}
            style={{
              '--angle': `${(i * 360) / 8}deg`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>
    </div>
  </div>
)

const ContentPhase2 = () => (
  <div className={styles.contentResult}>
    <div className={styles.contentPreview}>
      <motion.div
        className={styles.contentBlock}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className={styles.contentTitle}>Generated Title</div>
        <div className={styles.contentBody}>
          <div className={styles.contentLine}></div>
          <div className={styles.contentLine}></div>
          <div className={styles.contentLine}></div>
        </div>
      </motion.div>
      <motion.div
        className={styles.imagePreview}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        <FaMagic className={styles.magicIcon} />
      </motion.div>
    </div>
  </div>
)

// Computer Vision Animations
const VisionPhase1 = () => (
  <div className={styles.imageAnalysis}>
    <div className={styles.imageFrame}>
      <motion.div
        className={styles.scanLine}
        animate={{ y: [0, 300, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className={styles.detectionBoxes}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.detectionBox}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.3, type: 'spring' }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`
            }}
          >
            <div className={styles.boxLabel}>Object {i + 1}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

const VisionPhase2 = () => (
  <div className={styles.recognitionResults}>
    <div className={styles.recognitionGrid}>
      {['Person', 'Car', 'Building'].map((item, i) => (
        <motion.div
          key={i}
          className={styles.recognitionItem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.2 }}
        >
          <FaEye className={styles.eyeIcon} />
          <div className={styles.itemLabel}>{item}</div>
          <motion.div
            className={styles.confidenceBar}
            initial={{ width: 0 }}
            animate={{ width: `${80 + i * 5}%` }}
            transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }}
          />
        </motion.div>
      ))}
    </div>
  </div>
)

// Automation Animations
const AutomationPhase1 = () => (
  <div className={styles.workflowDesign}>
    <div className={styles.workflowSteps}>
      {['Input', 'Process', 'Output'].map((step, i) => (
        <motion.div
          key={i}
          className={styles.workflowStep}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.3, type: 'spring' }}
        >
          <FaCog className={styles.cogIcon} />
          <div className={styles.stepLabel}>{step}</div>
        </motion.div>
      ))}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`arrow-${i}`}
          className={styles.workflowArrow}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6 + i * 0.3 }}
        >
          →
        </motion.div>
      ))}
    </div>
  </div>
)

const AutomationPhase2 = () => (
  <div className={styles.automationRunning}>
    <div className={styles.automationFlow}>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={styles.automationTask}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 300, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'linear'
          }}
        >
          <FaCog className={styles.taskIcon} />
          <span>Task {i + 1}</span>
        </motion.div>
      ))}
    </div>
    <motion.div
      className={styles.successIndicator}
      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ✓
    </motion.div>
  </div>
)

// Default AI Animations
const DefaultAIPhase1 = () => (
  <div className={styles.defaultAI}>
    <motion.div
      className={styles.aiBrain}
      animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <FaBrain />
    </motion.div>
  </div>
)

const DefaultAIPhase2 = () => (
  <div className={styles.defaultAI}>
    <motion.div
      className={styles.aiPulse}
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ⚡
    </motion.div>
  </div>
)

export default AIWork3D


