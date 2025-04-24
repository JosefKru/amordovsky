import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "../Projects/Projects.scss";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    categories: string[];
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
  const { name, imageRu, image, categories } = project;

  const {
    i18n: { language, t },
  } = useTranslation();

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
      <img src={language === "ru" ? imageRu : image} alt={name} />
      <h3>{t(name)}</h3>
      <div className="project-tags">
        {categories.map((tag, index) => (
          <span key={tag} className="tag-item">
            <span>{tag}</span>
            {index < categories.length - 1 && (
              <span className="tag-dot">•</span>
            )}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
