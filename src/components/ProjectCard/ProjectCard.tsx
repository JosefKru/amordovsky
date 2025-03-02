import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ProjectCardProps {
  project: {
    id: number
    name: string
    category: string
    image: string
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 1, ease: "easeInOut" }} 
    >
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.category}</p>
    </motion.div>
  )
}

export default ProjectCard
