import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaBrain, FaMicrochip, FaCloud } from 'react-icons/fa'
import BlogDetail from '../BlogDetail/BlogDetail'
import styles from './FeaturedBlog.module.css'

const FeaturedBlog = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedBlog, setSelectedBlog] = useState(null)
  const navigate = useNavigate()

  const featuredPosts = [
    {
      icon: <FaBrain />,
      title: 'The Agentic Era: How AI Agents Are Transforming Software Development',
      description: 'Exploring the paradigm shift from traditional programming to autonomous AI agents',
      author: 'Tech Insights Team',
      date: '2024-12-15',
      category: 'AI/ML',
      readTime: '8 min read',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      tags: ['AI Agents', 'Software Development', 'Future of Tech'],
      detailedDescription: 'The software development landscape is undergoing a revolutionary transformation with the advent of the "Agentic Era." Pioneered by visionaries like Andrew Ng and Geoffrey Hinton, this new paradigm represents a fundamental shift from human-written code to AI agents capable of autonomous software creation.\n\n**What is the Agentic Era?**\n\nThe Agentic Era refers to a new phase in software development where AI agents—autonomous systems powered by large language models—can independently understand requirements, design architectures, write code, test applications, and deploy solutions.',
    },
    {
      icon: <FaMicrochip />,
      title: 'Vision-Language Large Models (VLLMs): The Next Frontier in AI',
      description: 'Understanding how VLLMs combine visual understanding with language processing',
      author: 'AI Research Team',
      date: '2024-12-10',
      category: 'AI/ML',
      readTime: '10 min read',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      tags: ['VLLMs', 'Computer Vision', 'Multimodal AI'],
      detailedDescription: 'Vision-Language Large Models (VLLMs) represent one of the most exciting developments in artificial intelligence, combining the power of computer vision with natural language processing to create systems that can truly "see" and "understand" the world.\n\n**What Are VLLMs?**\n\nVLLMs are multimodal AI systems that process both visual (images, videos) and textual information simultaneously. Unlike traditional models that handle vision and language separately, VLLMs create unified representations that enable deeper understanding of visual content in context.',
    },
    {
      icon: <FaCloud />,
      title: 'DevOps in the Age of AI: Automating Everything',
      description: 'How AI is revolutionizing DevOps practices and infrastructure management',
      author: 'DevOps Engineering Team',
      date: '2024-12-05',
      category: 'DevOps',
      readTime: '7 min read',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
      tags: ['DevOps', 'CI/CD', 'Automation'],
      detailedDescription: 'The integration of artificial intelligence into DevOps practices is creating unprecedented opportunities for automation, efficiency, and reliability. As organizations scale their operations, AI-powered DevOps tools are becoming essential for managing complex infrastructure.\n\n**AI-Powered CI/CD:**\n\nModern CI/CD pipelines leverage AI for intelligent test selection, automated code review, predictive deployment, and smart rollback capabilities.',
    },
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className={styles.featuredBlog} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Latest Insights</span>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Blog Posts</span>
          </h2>
          <p className={styles.subtitle}>
            Stay updated with the latest trends and technologies
          </p>
        </motion.div>

        <motion.div
          className={styles.blogsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {featuredPosts.map((blog, index) => (
            <motion.div
              key={index}
              className={styles.blogCard}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedBlog(blog)}
            >
              <div className={styles.iconWrapper} style={{ '--gradient': blog.gradient }}>
                {blog.icon}
              </div>
              <div className={styles.blogMeta}>
                <span className={styles.category}>{blog.category}</span>
                <span className={styles.date}>{formatDate(blog.date)}</span>
              </div>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.blogDescription}>{blog.description}</p>
              <div className={styles.readMore}>Read More →</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            className={styles.viewAllBtn}
            onClick={() => navigate('/blog')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Blog Posts
          </motion.button>
        </motion.div>
      </div>

      {selectedBlog && (
        <BlogDetail blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </section>
  )
}

export default FeaturedBlog

