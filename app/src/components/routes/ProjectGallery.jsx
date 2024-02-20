import ProjectLink from "../ProjectLink"
import projects from "../../lib/projects"

export default function ProjectGallery() {
  return (
    <div  className="container">
      <h2 className="tac">My projects</h2>
      <div id="project-gallery" className="inner-container">
        {projects.map(project => {
          return <ProjectLink project={project} key={project.name}/>
        })}
      </div>
    </div>
  )
}