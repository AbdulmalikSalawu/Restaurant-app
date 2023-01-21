import React, {useRef} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../Assets/homely.svg';
import { useNavigate } from 'react-router-dom';
// import house from '../Assets/house-door-fill.svg'
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'
import {useDispatch} from 'react-redux'
import {setShow, removeShow,setnavbar,removenavbar,showBackIcon} from '../features/navbarSlice'

function Nav() {
    const navRef = useRef();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    const register = () => {
        navigate('/signup')
    }
    const login = () => {
        navigate('/login')
    }
    const toggle = () => {
        dispatch(removeShow())
    }
      const toggle2 = () => {
        dispatch(setShow());
        dispatch(setnavbar())
        dispatch(showBackIcon())
    }
      const toggle3 = () => {
        dispatch(setShow())
        dispatch(removenavbar())
    }

  return (
    <div>
        <header>
            <h4 className='ms-lg-5'><img className='mt-5' src={logo} alt="svg image" /></h4>
            <nav ref={navRef} className='pb-2'>
                <NavLink className='ms-lg-5 ps-lg-5' onClick={showNavbar} to ='/'><small className='fs-7' onClick={toggle3}>Home</small></NavLink>
                {/* </p> */}
                <NavLink onClick={showNavbar} to ='/whychoose'><small className='fs-7' onClick={toggle2}>Why Choose Us</small></NavLink>
                <NavLink onClick={showNavbar} to='/about'><small className='fs-7' onClick={toggle2}>About us</small></NavLink>
                <NavLink className='me-lg-3' onClick={showNavbar} to='/ourdishes'><small className='fs-7' onClick={toggle2}>Our dishes</small></NavLink>
                <button onClick={login} className='ms-lg-5 text-white loginbtn'><NavLink onClick={showNavbar} to='/login'>Login</NavLink></button>
                <button onClick={register} className='ms-lg-4 signupbtn'><NavLink onClick={showNavbar} to='/signup'>Register</NavLink></button>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes onClick={toggle2}/>
                </button>
            </nav>
            <button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars onClick={toggle} />
            </button>
        </header>
    </div>
  )
}

export default Nav