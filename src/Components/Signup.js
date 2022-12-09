import React, {useState} from 'react'
import '../Styles/Signup.css'

function Signup() {
  return (
    <div className='signupbody'>
      <div className='flexo'>
      <div className='col-lg-4 ms-5 mt-5 inputcont d-block m-auto text-center pt-4 pb-1'>
        <div className='mt-4 fs-4 fw-bold text-black'> Create an <i>Account</i> with Us</div>
        <input type='text' placeholder='firstname' /><br />
        <input type='text' placeholder='lastname' /><br />
        <input type='text' placeholder='email' /><br />
        <input type='text' placeholder='password' /><br />

        <button className='mt-4 signupbtn'>Sign Up</button>
        <div className='mt-2'>Already have an account? <span className='fw-bold'>Login</span></div>
       </div>
       </div>
    </div>
  )
}

export default Signup