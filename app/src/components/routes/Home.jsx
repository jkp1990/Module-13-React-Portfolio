export default function Home() {
  return (
    <div className="container">
      <div className="intro">
        <section className="profile-pic">
          <img src="/images/Profile Picture.png" alt="Photo of Jessica Pourawal" />
        </section>
        <section>
          <h2>Jessica Pourawal</h2>
          <h3>Frontend web developer</h3>
        </section>
      </div>
      <section className="bio inner-container">
        <p>I am a passionate and dedicated individual currently studying the Front-End Web Development Bootcamp on edX. With a strong foundation in HTML, CSS, JavaScript, Node.js, and React, I am eager to apply my skills and knowledge to create engaging and dynamic web experiences.</p>
        <br />
        <div className="card">
          <h4 className="tac">Skills</h4>
          <ul id="skills-list">
            <li><b>HTML:</b> Proficient in creating well-structured, semantic markup for web pages.</li>
            <li> <b>CSS:</b> Skilled in styling web content with CSS, including responsive design principles for various screen sizes.</li>
            <li><b>JavaScript:</b> Experienced in using JavaScript to add interactivity and functionality to web applications.</li>
            <li><b>Node.js:</b> Familiar with building server-side applications and RESTful APIs using Node.js.</li>
            <li> <b>React:</b> Knowledgeable in building user interfaces and single-page applications with React, utilizing its component-based architecture.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}