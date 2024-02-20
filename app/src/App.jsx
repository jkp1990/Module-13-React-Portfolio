// npm i react-router-dom

import Header from './components/Header.jsx'
import Home from './components/routes/Home.jsx'
import Contact from './components/routes/Contact.jsx'
import ProjectGallery from './components/routes/ProjectGallery.jsx'
import Project from './components/routes/Project.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<ProjectGallery />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/project/:name" element={<Project />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
