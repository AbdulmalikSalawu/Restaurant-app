import React from 'react'
import '../Styles/Home.css'
import mainfood from '../Assets/mainmeal.png'
import WhyChoose from './WhyChoose'
import About from './About'
import OurDishes from './OurDishes'
import { useNavigate } from 'react-router'
import { showBackIcon } from '../features/navbarSlice'
import { useDispatch } from 'react-redux'
import Footer from './Footer'

function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const order = () => {
    dispatch(showBackIcon())
    navigate('/ourdishes')
  }

  return (
    <div>
        <div className='row '>
        <div className='col-sm-12 col-md-10 col-lg-7'>
            <h1>Cooking gone wrong?, <span className='ord'>Order food </span>you <span className='ord'> love</span> delivered now!</h1>
            <p className='pe-lg-5'>Anything, anytime, anywhere, we've got you!. Helping you enjoy confortable and health food on the go</p>
            <button onClick={order} className='orderButton px-4 py-2 fs-5'>Order now</button>
        </div>
        <div className='col-lg-5'>
            <img className='mainfood ms-lg-5' src={mainfood} alt='jollof picture' />
        </div>
      </div>
      <div className='row mt-5'>
          <div className='impressions mt-5'>
              <div className='col-sm-12 col-md-12 col-lg-3 text-center'>
                <p className='fw-bold fs-2'>100+</p>
                <p className='partners'>food partners</p>
              </div>
              <div className='col-md-12 col-lg-3 text-center'>
               <p className='fw-bold fs-2'>500+</p>
                <p className='partners'>orders delivered</p>
              </div>
              <div className='col-md-12 col-lg-3 text-center'>
                <p className='fw-bold fs-2'>1K+</p>
                <p className='partners'>happy customers</p>
              </div>
          </div>
      </div>
      <WhyChoose />
      <About />
      <OurDishes />
      <Footer />
    </div>
  )
}

export default Main