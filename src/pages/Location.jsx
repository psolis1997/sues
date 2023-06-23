import React from 'react'
import background from '../assets/background.png'

const Location = () => {
  return (
    <div className='location'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='location-box'>
        <h2>location</h2>
        <p>
          Shop G03, 18 Willis Street
          (Inside 18 Willis Street Shopping Centre)
          Wellington Central, 6011, New Zealand
        </p>
      </div>

      <div className='location-column'>
        <div className='map-box'>
          <h4>map</h4>
          <div>
            <p>location map</p>
          </div>
        </div>

        <div className='hours-box'>
          <h4>hours</h4>
          <p>
            Monday to Friday 8:30am - 5:30pm
            <br />
            Saturday 10am - 2pm
            <br />
            Sunday Closed
          </p>
        </div>
      </div>
    </div>
  )
}

export default Location