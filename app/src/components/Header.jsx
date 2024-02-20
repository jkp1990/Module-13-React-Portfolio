import Nav from './Nav.jsx'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Jessica Pourawal</h1>
        </Link>
        <Nav />
      </div>
    </header>
  )
}