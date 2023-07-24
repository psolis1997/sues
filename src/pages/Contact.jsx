import React from "react"
import ContactForm from "../components/ContactForm"
import background from '../assets/background.png'


const Contact = () => {
  return (
    <div className='contact'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='contact-box'>
        <h2>contact</h2>
        <div>
          <p>
            Phone: 04 499 9336
          </p>
          <p>
            Email: info@suesrepairs.co.nz
          </p>
          <p>
            Social: logo
          </p>
        </div>
      </div>

      <div className="enquiry-box">
        <h4>enquiry</h4>
        <p>
          Alternatively, you can use the form below to send us a <strong>message or enquiry</strong> and we will get back to you:
        </p>

        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact