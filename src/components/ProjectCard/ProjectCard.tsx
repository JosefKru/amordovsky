import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    category: string;
    image: string;
  };
}

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // const projectName = project.name.replace(/\s+/g, '').toLocaleLowerCase()

  return (
    <motion.div
      ref={ref}
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.category}</p>
    </motion.div>
  );
};

export default ProjectCard;
