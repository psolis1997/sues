import { useState } from 'react'
import axios from 'axios'

const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        const testForm = new FormData();
        testForm.append('your-name', name)
        testForm.append('your-email', email)
        testForm.append('your-mobile', mobile)
        testForm.append('your-message', message)

        axios.post(formEndpoint, testForm, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(function (response) {
                console.log(response);
                setSubmitted(true);
            })
            .catch(function (error) {
                console.log(error);
                setError(true);
            })
    }

    if (submitted) {
        return (
            <>
                <h3>Thank you!</h3>
                <p>We'll be in touch soon.</p>
            </>
        )
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <p>Sorry, there was an error. Please try again.</p>
            </>
        )
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                method="POST"
            >
                <div>
                    <label htmlFor="name">Full Name*</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        name="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input
                        type="mobile"
                        name="mobile"
                        onChange={event => setMobile(event.target.value)}
                        value={mobile}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        onChange={event => setMessage(event.target.value)}
                        value={message}
                        required
                    />
                </div>
                <div>
                    <button
                        className="regular-button"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm