import React from 'react'
import BookingForm from '../components/BookingForm'

const Booking = () => {
  return (
    <div className='booking'>
      <div className='booking-box'>
        <h2>booking</h2>
        <p>
          Book an appointment with Sue's!
          <br />
          <br />
          Bookings are not required for general alterations, repairs and dry cleaning but can be made if you wish to do so.
          <br />
          Bookings for bridal alterations are required.
        </p>
      </div>

      <div className='booking-form'>
        <h4>make a booking</h4>
        <p>Select a service and a date, and we will contact you to arrange a suitable time.</p>
        <BookingForm />
      </div>
    </div>
  )
}

export default Booking