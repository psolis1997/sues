import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>©2023
        <img src="./src/assets/sue's-light-logo.png" alt=""
          style={{
            width: '50px',
            marginLeft: '10px',
            marginRight: '10px'
          }}
        />™</div>
      <div className='footer-links'>
        <Link to="/services">Gallery</Link>
        <Link to="/about#testimonials">Testimonials</Link>
        <Link to="/about#faq">FAQ</Link>
      </div>
    </div>
  )
}

export default Footer