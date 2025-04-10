import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import "../Projects/Projects.scss";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    nameRu: string;
    category: string;
    image: string;
    imageRu: string;
    isStub?: boolean;
  };
}

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {i18n: {language}} = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <img src={language === "ru" ? project.imageRu : project.image} alt={project.name} />
      <h3>{language === "ru"  ? project.nameRu : project.name}</h3>
      <p>{project.category}</p>
    </motion.div>
  );
};

export default ProjectCard;
