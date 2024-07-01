import { useState } from 'react'
import { Link } from 'react-router-dom'
import Lg from '../comps/Header/logopng2-3-1.png';

import './Nav.css'

const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    {/* <Brand /> */}
                    <img src={Lg} alt="" />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    {/* <Hamburger /> */}

                    <i id='bar' className="bx bx-menu"></i>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>

                            <Link to={'http://logowithweb.com/landing-page1'}>Home</Link>

                        </li>
                        <li>

                            <Link to={'https://logowithweb.com/services/'}>Services</Link>

                        </li>
                        <li>

                            <Link to={'https://logowithweb.com/about/'}>About Us</Link>

                        </li>
                        <li>

                            <Link to={'https://logowithweb.com/portifolio/'}>Portfolio</Link>

                        </li>
                        <li>

                            <Link to={'https://logowithweb.com/price/'}>Packages</Link>

                        </li>

                        <li>

                            <button id='get'>
                                <Link to={'https://logowithweb.com/contact/'}>Get a quote</Link>
                            </button>



                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav