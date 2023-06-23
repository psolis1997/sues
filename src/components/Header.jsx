import { Link } from "react-router-dom"

const Header = () => {
    return <div className="header-nav">
        <div className="topnav">
            <div className="logo">
                <Link to='/'>
                    <img src="../assets/sue's-logo.png" alt=""
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
    </div>

}

export default Header