import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../assets/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.scss";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="container">
        {projects.map((project) =>
          project.isStub ? (
            <ProjectCard project={project} />
          ) : (
            <Link key={project.id} to={`/project/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
