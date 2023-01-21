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
import {useDispatch,useSelector} from 'react-redux'
import {setShow, removeShow,setnavbar,removenavbar, showBackIcon} from '../features/navbarSlice'

function Nav2() {

    const [myUser, setMyUser] = useState({})
    const myCart = useSelector((state) => state.cart.cartItems)
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
                navigate("/login")
             }
         });
        }, [])

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
    dispatch(showBackIcon())
  }
  const toggle3 = () => {
    dispatch(setShow())
    dispatch(removenavbar())
}
    const goToCart = () => {
        navigate('/carts')
        dispatch(showBackIcon())
    }

  return (
    <div>
         <header>
            <h4 className='ms-lg-5'><img className='mt-5 pe-3 pe-lg-0 ' src={logo} alt="svg image" /></h4>
            <img onClick={goToCart} className='cartIcon navCart d-md-none mt-3' src={cart} alt='cart icon'></img><span onClick={goToCart} className='cartNavNo mt-3 fs-2 fw-bold d-md-none'>{myCart.length>=0 ? `${myCart.length}` : "0"}</span>
            <nav ref={navRef} className='pb-2'>
                <NavLink className='ms-lg-1 ps-lg-5' onClick={showNavbar} to ='/dashboard'><small className='fs-7' onClick={toggle3}>Home</small></NavLink>
                <NavLink onClick={showNavbar} to='/about'><small className='fs-7' onClick={toggle2}>About us</small></NavLink>
                <NavLink className='me-lg-3' onClick={showNavbar} to='/ourdishes'><small className='fs-7' onClick={toggle2}>Our dishes</small></NavLink>
                <button onClick={goToCart} className='ms-lg-4 px-2 py-1 text-white loginbtn cartBtn'>
                    <NavLink onClick={showNavbar}>
                        <img className='cartIcon' onClick={toggle2} src={cart} alt='cart icon'></img><small className='fs-7' onClick={toggle2}>Cart</small> <span>{myCart.length>=0 ? `${myCart.length}` : "0"}</span>
                    </NavLink>
                </button>
                <NavLink className='userEmail'>
                    <img src={person} alt="icon" className='person'></img>
                    <i>{myUser?.email}</i>
                    <span className='d-md-none'>{myUser?.email}</span>
                </NavLink>
                <button onClick={logout} className='ms-lg-1 px-3 text-white signupbtn dashLog'>
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