import React from "react";
import "./Projects.scss";
import { projects } from "../../assets/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="container">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
