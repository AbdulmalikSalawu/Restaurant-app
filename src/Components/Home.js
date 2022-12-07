import React from 'react'
import '../Styles/Home.css'
import mainfood from '../Assets/mainfood.jpg'

function Home() {
  return (
    <div className='row'>
      <div className='col-sm-12 col-md-10 col-lg-7'>
          <h1>Cooking gone wrong?, <span>Order food </span>you <span> love</span> delivered now!</h1>
      </div>
      <div className='col-lg-5'>
          <img src={mainfood} alt='jollof picture' />
      </div>
    </div>
  )
}

export default Home