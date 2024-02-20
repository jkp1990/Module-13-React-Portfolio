import { Link } from "react-router-dom"

export default function ProjectLink({project}) {
  return (
    <Link className="project-link" to={"/project/"+project.name.replaceAll(' ','-')}>
      <h3>{project.name}</h3>
    </Link>
  )
}