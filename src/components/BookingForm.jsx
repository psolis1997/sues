import { useState } from 'react'
import axios from 'axios'

const bookingEndpoint = import.meta.env.VITE_APP_WP_BOOKING_ENDPOINT

const BookingForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [service, setService] = useState('')
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        const testForm = new FormData();
        testForm.append('your-name', name)
        testForm.append('your-email', email)
        testForm.append('your-mobile', mobile)
        testForm.append('your-service', service)
        testForm.append('your-date', date)
        testForm.append('your-notes', notes)

        axios.post(bookingEndpoint, testForm, {
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
                <h3>Thank you, booking received.</h3>
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
                    <label htmlFor="mobile">Mobile*</label>
                    <input
                        type="tel"
                        name="mobile"
                        onChange={event => setMobile(event.target.value)}
                        value={mobile}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="service">Service*</label>
                    <select name="service"
                        onChange={event => setService(event.target.value)}
                        value={service}
                        required>

                        <option value={"Bridal Alteration"}>Bridal Alteration</option>
                        <option value={"Dry Cleaning"}>Dry Cleaning</option>
                        <option value={"Sleeve Adjustments"}>Sleeve Adjustments</option>
                        <option value={"Seam Changes"}>Seam Changes</option>
                        <option value={"Changing Hems"}>Changing Hems</option>
                        <option value={"Re-fitting"}>Re-fitting</option>
                        <option value={"Embellishments"}>Embellishments</option>
                        <option value={"Take in/Let out"}>Take in/Let out</option>
                        <option value={"Shortening"}>Shortening</option>
                        <option value={"Lengthening"}>Lengthening</option>
                        <option value={"Zip Replacement"}>Zip Replacement</option>
                        <option value={"Button Replacement"}>Button Replacement</option>
                        <option value={"Torn Seams"}>Torn Seams</option>
                        <option value={"Re-hemming"}>Re-hemming</option>
                        <option value={"New Domes"}>New Domes</option>
                        <option value={"Elbow Patches"}>Elbow Patches</option>
                        <option value={"Mending"}>Mending</option>
                        <option value={"Tailoring"}>Tailoring</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="date">Date*</label>
                    <input
                        type="date"
                        name="date"
                        onChange={event => setDate(event.target.value)}
                        value={date}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        name="notes"
                        onChange={event => setNotes(event.target.value)}
                        value={notes}
                    />
                </div>
                <div>
                    <button
                        className="regular-button"
                        type="submit"
                    >
                        Book Now
                    </button>
                </div>
            </form>
        </>
    )
}

export default BookingForm