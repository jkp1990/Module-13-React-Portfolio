// npm i @emailjs/browser
const SERVICE_KEY = "service_k4zayvu"
const TEMPLATE_KEY = "template_bu3ya9g"
const PUBLIC_KEY = "SjRgclfj7vHHu91Hg"

import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'


export default function ContactForm() {

    const form = useRef()
    const [sending, setSending] = useState(false)

    const handleForm = e => {
        e.preventDefault()
        if (sending) return
        setSending(true)
        const data = Object.fromEntries(new FormData(e.target))
        // console.log(data)
        emailjs.send(
            SERVICE_KEY,
            TEMPLATE_KEY,
            data,
            {
                publicKey: PUBLIC_KEY
            }
        ).then(()=>{
            alert("Email sent.")
            location.reload()
            setSending(false)
        }).catch(()=>{
            alert("Something went wrong.")
            setSending(false)
        })
    }

  return (
    <div id="contact-form">
      <form onSubmit={handleForm} ref={form}>
        <label className="field">
          <span>Your name</span>
          <input type="text" required name="name" />
        </label>
        <label className="field">
          <span>Your email address</span>
          <input type="email" name="email" required />
        </label>
        <label className="field">
          <span>Subject</span>
          <input type="text" required name="subject"/>
        </label>
        <label className="field">
          <span>Message</span>
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
