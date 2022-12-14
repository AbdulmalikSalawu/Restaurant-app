import React, { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../Assets/homely.svg';
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {ref, set, onValue} from 'firebase/database'
import {auth, db} from '../Schemas/firebase-config'
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import cart from '../Assets/cart2.svg';
import person from '../Assets/person.svg';
import '../Styles/Nav.css'

function Dashboard() {

    const [myUser, setMyUser] = useState({})
    const navRef = useRef();
    const navigate = useNavigate()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      if (user){
        setMyUser(user)
          }
          else {
            navigate(-1)
         }
     });
    }, [])

    const logout = () => {
      signOut(auth);
      navigate(-1, {replace: true})
      .catch((error)=>{
          console.log(error);
      })
  };

  return (
    <div>
        <header>
            <h4 className='ms-lg-5'><img className='mt-5' src={logo} alt="svg image" /></h4>
            <nav ref={navRef} className='pb-2'>
                <NavLink className='ms-lg-5 ps-lg-5' onClick={showNavbar} to ='/'>Home</NavLink>
                <NavLink onClick={showNavbar} to='/about'>About Us</NavLink>
                <NavLink className='me-lg-3' onClick={showNavbar} to='/testimonials'>Our Dishes</NavLink>
                <button className='ms-lg-5 px-2 py-1 text-white loginbtn cartBtn'>
                    <NavLink onClick={showNavbar}>
                        <img className='cartIcon' src={cart} alt='cart icon'></img> Cart <span>8</span>
                    </NavLink>
                </button>
                <NavLink className='userEmail'>
                    <img src={person} alt="icon" className='person'></img>
                    <i>{myUser?.email}</i>
                </NavLink>
                <button onClick={logout} className='ms-lg-5 text-white signupbtn'>
                    <NavLink onClick={showNavbar} to='/login'>Logout</NavLink>
                </button>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

        <h3 className='text-center mt-5'>Hi, {myUser?.email}, Welcome to your dashboard</h3>
    </div>
  )
}

export default Dashboard