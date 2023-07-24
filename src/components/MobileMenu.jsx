import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'react-bootstrap-icons'



const MobileMenu = ({ closeMethod }) => {

    return (
        <>
            <div className='mobileMenu'>
                <button id='close-nav-menu' onClick={closeMethod}>
                    <X />
                </button>
                <ul id='mobile-menu'>
                    <li>
                        <Link to='/' onClick={closeMethod}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={closeMethod}>About</Link>
                    </li>
                    <li>
                        <Link to='/location' onClick={closeMethod}>Location</Link>
                    </li>
                    <li>
                        <Link to='/contact' onClick={closeMethod}>Contact</Link>
                    </li>
                    <li>
                        <Link to='/Services' onClick={closeMethod}>Services</Link>
                    </li>
                    <button className='cta'>
                        <Link to="/booking">Book Now</Link>
                    </button>
                </ul>
            </div>

        </>
    )
}

export default MobileMenu