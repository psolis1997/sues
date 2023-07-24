import { useState } from "react"
import { Link } from "react-router-dom"
import { List } from "react-bootstrap-icons"
import MobileMenu from "./MobileMenu"

const Header = () => {

    // Declare on/off state for mobile menu
    const [menuIsOpen, openMenu] = useState(false);
    // toggle state of open menu
    const toggleMobileMenu = () => {
        openMenu(!menuIsOpen);
        document.body.classList.toggle('no-scroll');
    }

    return <div className="header-nav">
        <div className="topnav">
            <div className="logo">
                <Link to='/'>
                    <img src="./assets/sue's-logo.png" alt=""
                        style={{
                            width: '218px',
                            marginLeft: '20px',
                            marginRight: '40px'
                        }}
                    />
                </Link>
                <nav>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/location'>Location</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                </nav>
            </div>

            <div className="cta"
                style={{
                    marginRight: '20px'
                }}
            >
                <button>
                    <Link to="/booking">Book Now</Link>
                </button>
            </div>
        </div>

        {/* HAMBURGER ICON */}
        <div id='menu-container'>
            <div className="logo">
                <Link to='/'>
                    <img src="./assets/sue's-logo.png" alt=""
                        style={{
                            width: '218px',
                            marginLeft: '20px',
                            marginRight: '40px'
                        }}
                    />
                </Link>
            </div>
            <button id='menu-button' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                <List id='hamburger-icon' />
            </button>
        </div>
        {/* If menuIsOpen is true, show the mobile menu */}
        {/* Gives the mobile menu our close method */}
        {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
    </div>

}

export default Header