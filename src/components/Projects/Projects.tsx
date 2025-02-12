import React from 'react'
import './Projects.scss'
import { projects } from '../../assets/projects'

const Projects: React.FC = () => {
  return (
    <section className='projects'>
      <div className='container'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
