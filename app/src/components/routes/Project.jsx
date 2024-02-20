import { useParams, Link } from 'react-router-dom'
import projects from '../../lib/projects.js'

export default function Project() {
    const {name} = useParams()
    const project = projects.find(p => p.name.replaceAll(' ','-') === name)
  return project ? (
    <div id="project-page" className="container">
        <div className="project inner-container">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="screenshot">
            <img src={"/images/" + project.screenshot + ".png"} alt={project.name + " screenshot"} />
          </div>
          <div className="concepts card">
            <h4>Featured concepts</h4>
            <ul>
              {project.concepts.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <ul className="links card">
            <li>
              <a href={project.github}>Github repository</a>
            </li>
            {project.deployment && (
              <li>
                <a href={project.deployment}>Deployment</a>
              </li>
            )}
          </ul>
        </div>
        <Link to="/projects">&larr; Go back</Link>
    </div>
  ) : (
    <div>Project not found</div>
  )
}