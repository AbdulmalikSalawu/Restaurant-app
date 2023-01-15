import React, {useState, useEffect, useRef} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../Assets/homely.svg';
import {onAuthStateChanged, signOut} from 'firebase/auth'
// import {ref, set, onValue} from 'firebase/database'
import {auth, db} from '../Schemas/firebase-config'
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import cart from '../Assets/cart2.svg';
import person from '../Assets/person.svg';
import '../Styles/Nav.css'
import {useDispatch} from 'react-redux'
import {setShow, removeShow,setnavbar,removenavbar} from '../features/navbarSlice'

function Nav2() {

    const [myUser, setMyUser] = useState({})
    const navRef = useRef();
    const navigate = useNavigate()
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const dispatch = useDispatch();

    const logout = () => {
      signOut(auth);
      navigate(-1, {replace: true})
      .catch((error)=>{
          console.log(error);
      })
  };
  
  const toggle = () => {
    dispatch(removeShow())
  }
  const toggle2 = () => {
    dispatch(setShow())
    dispatch(setnavbar())
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
                <NavLink className='ms-lg-5 ps-lg-5' onClick={showNavbar} to ='/dashboard'><small className='fs-7' onClick={toggle3}>Home</small></NavLink>
                <NavLink onClick={showNavbar} to='/about'><small className='fs-7' onClick={toggle2}>About us</small></NavLink>
                <NavLink className='me-lg-3' onClick={showNavbar} to='/ourdishes'><small className='fs-7' onClick={toggle2}>Our dishes</small></NavLink>
                <button className='ms-lg-5 px-2 py-1 text-white loginbtn cartBtn'>
                    <NavLink onClick={showNavbar}>
                        <img className='cartIcon' src={cart} alt='cart icon'></img><small className='fs-7' onClick={toggle2}>Cart</small> <span>8</span>
                    </NavLink>
                </button>
                <NavLink className='userEmail'>
                    <img src={person} alt="icon" className='person'></img>
                    <i>{myUser?.email}</i>
                </NavLink>
                <button onClick={logout} className='ms-lg-1 text-white signupbtn dashLog'>
                    <NavLink onClick={showNavbar}>Logout</NavLink>
                </button>
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

export default Nav2