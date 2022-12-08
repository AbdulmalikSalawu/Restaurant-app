import React from 'react'
import '../Styles/Home.css'
import mainfood from '../Assets/mainfood.jpg'

function Home() {
  return (
    <div className='row '>
      <div className='col-sm-12 col-md-10 col-lg-7'>
          <h1>Cooking gone wrong?, <span>Order food </span>you <span> love</span> delivered now!</h1>
          <p className='pe-lg-5'>Anything, anytime, anywhere, we've got you!. Helping you enjoy confortable and health food on the go</p>
          <button className='orderButton px-3 py-2 fs-5'>Order now</button>
      </div>
      <div className='col-lg-5'>
          <img className='mainfood ms-lg-4' src={mainfood} alt='jollof picture' />
      </div>
    </div>
  )
}

export default Home