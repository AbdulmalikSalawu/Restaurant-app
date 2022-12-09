import React, {useState} from 'react'
import '../Styles/Signup.css'

function Signup() {
  return (
    <div className='signupbody'>
      <div className='col-lg-4 ms-5 mt-5 inputcont text-center py-5'>
        <div className='mt-4'>Create an account with us</div>
        <input type='text' placeholder='firstname' /><br />
        <input type='text' placeholder='firstname' /><br />
        <input type='text' placeholder='firstname' />
       </div>
    </div>
  )
}

export default Signup