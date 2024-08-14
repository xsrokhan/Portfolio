import React from 'react'
import '../Projects.css'
import '../App.css'
import ProjectsCard from '../ProjectsCard'
import { projects } from '../projects_info'


const Projects = () => {
  return (
    <div className="projects">
      {projects.map((p, i) => (
        <ProjectsCard 
          title={p.title}
          description={p.description}
          img={p.image}
          stack={p.stack}
          code={p.code}
          demo={p.demo}
          i={i}
          key={i}
        />
      ))}
    </div>
  )
}


export default Projects