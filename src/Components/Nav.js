import React, {useRef} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../Assets/homely.svg';
// import house from '../Assets/house-door-fill.svg'
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
            <h4 className='ms-lg-5'><img className='mt-5' src={logo} alt="svg image" /></h4>
            <nav ref={navRef} className='pb-2'>
                {/* <p><img src={house} alt="house" /> */}
                <NavLink className='ms-lg-5 ps-lg-5' onClick={showNavbar} to ='/'>Home</NavLink>
                {/* </p> */}
                <NavLink onClick={showNavbar} to ='/'>Why Choose Us</NavLink>
                <NavLink onClick={showNavbar} to='/about'>About Us</NavLink>
                <NavLink className='me-lg-3' onClick={showNavbar} to='/testimonials'>Testimonials</NavLink>
                <button className='ms-lg-5 text-white loginbtn'><NavLink onClick={showNavbar} to='/login'>Login</NavLink></button>
                <button className='ms-lg-4 signupbtn'><NavLink onClick={showNavbar} to='/signup'>Register</NavLink></button>
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