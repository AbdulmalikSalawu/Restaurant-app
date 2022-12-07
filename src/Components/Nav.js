import React, {useRef} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'

function Nav() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
  return (
    <div>
        <header>
            <h4 className='ms-md-5'>Logo</h4>
            <nav ref={navRef} className='pb-2'>
                <NavLink className='ms-md-2 ms-lg-5 ps-lg-5' onClick={showNavbar} to ='/'>Home</NavLink>
                <NavLink onClick={showNavbar} to ='/'>Why Choose Us</NavLink>
                <NavLink onClick={showNavbar} to='/about'>About Us</NavLink>
                <NavLink onClick={showNavbar} to='/testimonials'>Testimonials</NavLink>
                <button className='ms-lg-5 text-white loginbtn'><NavLink onClick={showNavbar} to='/login'>Login</NavLink></button>
                <button className='ms-md-1 ms-lg-4 signupbtn'><NavLink onClick={showNavbar} to='/signup'>Register</NavLink></button>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    </div>
  )
}

export default Nav