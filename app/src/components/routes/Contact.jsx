import ContactForm from "../ContactForm"

export default function Contact() {
  return (
    <div className="container">
      <div className="inner-container" id="contact">
        <h2 className="tac">Contact me</h2>
        <ContactForm />
        <table>
          <tbody>
            <tr>
              <td>Github:</td>
              <td>
                <a href="https://github.com/jkp1990/">jkp1990</a>
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <a href="mailto://Jessicapourawal@gmail.com">Jessicapourawal@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td>Linkedin:</td>
              <td>
                <a href="https://linkedin.com/in/jessica-pourawal-654727176">jessica-pourawal-654727176</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}