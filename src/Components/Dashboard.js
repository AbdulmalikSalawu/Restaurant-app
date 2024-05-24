import React, { useState,useEffect,useRef } from 'react'
// import {ref, set, onValue} from 'firebase/database'
import {onAuthStateChanged} from 'firebase/auth'
import {auth, db} from '../Schemas/firebase-config'
import {useNavigate} from 'react-router-dom'
// import Nav2 from './Nav2';
import Main from './Main'
import { useDispatch, useSelector } from 'react-redux';
import { setLogIn,removenavbar, removeBackIcon,sendEmail } from '../features/navbarSlice'

function Dashboard() {

  const showNav = useSelector((state) => state.navbar.show)
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(removenavbar())
      dispatch(removeBackIcon())
    }, [])

    const [myUser, setMyUser] = useState({})
    // const [newUser, setNewUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
      dispatch(setLogIn())
    }, [])

    useEffect(() => {
      onAuthStateChanged(auth, (user)=> {
        if (user){
          setMyUser(user)
          dispatch(sendEmail(user?.email))
            }
            else {
              navigate("/login")
              // navigate("/home")
           }
       });
      }, [])

  return (
    <div className='mt-5'>
      {/* <Nav2 /> */}
      <h3 className='text-center mt-5'>Hi, {myUser?.email}</h3>
      {/* <h3 className='text-center mt-3'>Hi, {myUser?.email.replace("@gmail.com", "").toUpperCase()} 😃</h3> */}
      {showNav ? (<Main />) : ""}
    </div>
  )
}

export default Dashboard