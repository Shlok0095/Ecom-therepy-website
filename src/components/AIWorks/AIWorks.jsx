import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaMagic,
  FaEye,
  FaCog,
} from 'react-icons/fa'
import AIWorkDetail from '../AIWorkDetail/AIWorkDetail'
import styles from './AIWorks.module.css'

const AIWorks = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const aiProjects = [
    {
      icon: <FaBrain />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning models for predictive analytics and business intelligence',
      detailedDescription: 'Transform your data into actionable insights with our cutting-edge AI analytics platform. Leverage machine learning algorithms to predict trends, identify patterns, and make data-driven decisions that drive business growth.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tech: ['TensorFlow', 'Python', 'React'],
      features: [
        'Real-time Data Processing',
        'Predictive Analytics',
        'Automated Reporting',
        'Custom ML Models',
        'Data Visualization',
        'Anomaly Detection'
      ],
      useCases: [
        'Sales forecasting and revenue prediction',
        'Customer behavior analysis',
        'Risk assessment and fraud detection',
        'Market trend analysis',
        'Operational efficiency optimization'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Python', 'Pandas', 'NumPy', 'React', 'D3.js', 'MongoDB']
    },
    {
      icon: <FaRobot />,
      title: 'Intelligent Chatbots',
      description: 'Natural language processing chatbots that understand and respond intelligently',
      detailedDescription: 'Create intelligent conversational AI that understands context, learns from interactions, and provides human-like responses. Our chatbots handle complex queries, support multiple languages, and integrate seamlessly with your existing systems.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tech: ['OpenAI', 'NLP', 'Node.js'],
      features: [
        'Natural Language Understanding',
        'Multi-language Support',
        'Context Awareness',
        'Sentiment Analysis',
        'Voice Integration',
        'Custom Training'
      ],
      useCases: [
        'Customer support automation',
        'Lead qualification and nurturing',
        'E-commerce product recommendations',
        'FAQ handling',
        'Appointment scheduling'
      ],
      technologies: ['OpenAI GPT', 'BERT', 'Node.js', 'WebSocket', 'Redis', 'MongoDB', 'Dialogflow']
    },
    {
      icon: <FaChartLine />,
      title: 'Predictive Modeling',
      description: 'Deep learning models for forecasting trends and making data-driven decisions',
      detailedDescription: 'Build sophisticated predictive models that forecast future trends, behaviors, and outcomes. Our deep learning solutions analyze historical data to provide accurate predictions that help you stay ahead of the competition.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tech: ['PyTorch', 'Pandas', 'Scikit-learn'],
      features: [
        'Time Series Forecasting',
        'Regression Analysis',
        'Classification Models',
        'Ensemble Methods',
        'Model Optimization',
        'A/B Testing'
      ],
      useCases: [
        'Demand forecasting',
        'Price optimization',
        'Churn prediction',
        'Inventory management',
        'Financial market analysis'
      ],
      technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'LightGBM']
    },
    {
      icon: <FaMagic />,
      title: 'Content Generation',
      description: 'AI-powered content creation tools for automated writing and design',
      detailedDescription: 'Revolutionize content creation with AI that generates high-quality text, images, and multimedia content. Our solutions combine GPT models with creative AI to produce engaging, original content at scale.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      tech: ['GPT-4', 'DALL-E', 'Stable Diffusion'],
      features: [
        'Text Generation',
        'Image Creation',
        'Video Generation',
        'Content Personalization',
        'SEO Optimization',
        'Multi-format Support'
      ],
      useCases: [
        'Marketing copy generation',
        'Social media content creation',
        'Product descriptions',
        'Blog post writing',
        'Visual asset creation'
      ],
      technologies: ['GPT-4', 'DALL-E', 'Stable Diffusion', 'Midjourney API', 'Claude', 'Python', 'Node.js']
    },
    {
      icon: <FaEye />,
      title: 'Computer Vision',
      description: 'Image recognition and processing systems for automated visual analysis',
      detailedDescription: 'Harness the power of computer vision to analyze images and videos at scale. Our solutions enable object detection, facial recognition, image classification, and automated visual quality control.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tech: ['OpenCV', 'YOLO', 'CNN'],
      features: [
        'Object Detection',
        'Facial Recognition',
        'Image Classification',
        'Video Analysis',
        'OCR (Optical Character Recognition)',
        'Quality Control'
      ],
      useCases: [
        'Security and surveillance',
        'Medical image analysis',
        'Retail inventory management',
        'Autonomous vehicles',
        'Quality assurance in manufacturing'
      ],
      technologies: ['OpenCV', 'YOLO', 'TensorFlow', 'PyTorch', 'CNN', 'R-CNN', 'Python', 'CUDA']
    },
    {
      icon: <FaCog />,
      title: 'Automation Systems',
      description: 'Intelligent automation solutions that learn and adapt to your workflows',
      detailedDescription: 'Streamline operations with intelligent automation that learns from your processes and adapts to changing conditions. Our AI-powered automation reduces manual work, increases efficiency, and scales with your business.',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      tech: ['RPA', 'ML', 'API Integration'],
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Decision Making',
        'Self-learning Systems',
        'API Integration',
        'Error Handling'
      ],
      useCases: [
        'Document processing automation',
        'Email and communication automation',
        'Data entry and migration',
        'Report generation',
        'Workflow orchestration'
      ],
      technologies: ['RPA', 'Machine Learning', 'Python', 'Node.js', 'API Integration', 'Zapier', 'Make.com']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="aiworks" className={styles.aiWorks} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.badge}>AI Innovation</span>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>AI Works</span>
          </h2>
          <p className={styles.subtitle}>
            Cutting-edge artificial intelligence solutions transforming businesses
          </p>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {aiProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.05 }}
              style={{ '--gradient': project.gradient }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.cardGlow}></div>
              <motion.div
                className={styles.iconContainer}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className={styles.iconWrapper}>{project.icon}</div>
              </motion.div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className={styles.techTag}
                    style={{ '--i': techIndex }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.button
                className={styles.viewProject}
                whileHover={{ x: 5 }}
              >
                View Project →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <AIWorkDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default AIWorks

