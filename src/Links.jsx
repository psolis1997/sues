import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Booking from './pages/Booking'

const Links = () => {
    return (
        <Routes>
            {/* PAGES */}
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/location' element={<Location />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/booking' element={<Booking />} />
        </Routes>
    )
}

export default Links