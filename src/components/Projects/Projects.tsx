import React from 'react'
import './Projects.scss'
import { projects } from '../../assets/projects'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
