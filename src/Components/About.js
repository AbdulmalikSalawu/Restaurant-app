import React,{useEffect} from 'react'
// import Nav from './Nav'
// import Nav2 from './Nav2';
import { useDispatch, useSelector } from 'react-redux';
import { setnavbar } from '../features/navbarSlice';
import xyz from '../Assets/jollofRice.jpg'
import myApp from '../Assets/homelyapp.svg'
import { useNavigate } from 'react-router';
import arrow from '../Assets/arrow-left.svg'
import iosstore from '../Assets/appstore.svg'
import playstore from '../Assets/playstore.svg'

function About() {
  // const showNav2 = useSelector((state) => state.navbar.navbar)
  // const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  const backIcon = useSelector((state) => state.navbar.backIcon)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setnavbar())
  }, [])
  
  return (
    <div className='mt-5 pt-3'>
      {/* {showNav2 && isLoggedin===true ? (<Nav2 />) : showNav2 && isLoggedin===false ? (<Nav />):  ""} */}
      {backIcon ? ( <img src={arrow} onClick={()=>navigate(-1)} className='ms-3 col-1 mt-1' alt='back' />) : ""}
        <h2 className='fs-1 text-center'>About Us</h2>
        <div className='container bg-white'>
            <div className='row'>
              <div className='mt-3 col-sm-12 col-md-10 col-lg-6 px-4 fs-4'>
              We make delicious healthy meals for busy people who want to enjoy home made food without the hassle of cooking. Why would you cook when you don't have to? The Hot Plate makes it easy to eat your favorite home cooked food anywhere you want. You deserve to eat great food, whether you're at home or on the go.
              </div>
              <div className='col-md-10 col-lg-6'>
                  <img className='w-75 d-block m-auto mt-5' src={xyz} alt='error' />
              </div>
            </div>
        </div>

        <h2 className='fs-1 text-center mt-5'>Get our Mobile App</h2>
        <div className='container bg-white'>
            <div className='row'>
              <div className='col-md-10 col-lg-6'>
                  <img className='w-75 d-block m-auto mt-5' src={myApp} alt='error' />
              </div>
              <div className='mt-3 col-sm-12 col-md-10 col-lg-6 px-4 fs-4'>
              With our app, you never have to settle for unhealthy, expensive takeaway food again. From spicy noodles to fresh salads, we'll deliver anywhere in your city. Get tasty meals in just 30 minutes. It's simple. We make it easy for you to make smart business decisions fast. Whether you have a busy schedule or just enjoy home-cooked food,
              <div>
                <img className='col-4' src={iosstore} />
                <img className='col-4 ms-4' src={playstore} />
              </div>
              </div>
            </div>
        </div>

        <h2 className='fs-1 text-center mt-5'>Testimonials</h2>
        <div className='container mt-5 mb-5 py-5 px-5'>
                <div className='row'>
                    <div className='cardcontainer'>
                    <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow testi">
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold">John Paul</h5>
                            <p class="card-text text-center">Rivers State</p>
                            <p class="card-text text-center">Be it a small gathering of friends or a large event with hundreds of people, you'll always be prepared. whether you're at home or on the go.</p>
                        </div>
                    </div>
                    <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow testi">
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold">Chukwudi Vincent</h5>
                            <p class="card-text text-center">Anambra State</p>
                            <p class="card-text text-center">No need to worry about any of this anymore with your app. Homely Eats are made with the highest quality ingredients for you and your family.</p>
                        </div>
                    </div>
                    <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow testi">
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold">Balogun Aina</h5>
                            <p class="card-text text-center">Lagos State</p>
                            <p class="card-text text-center">With a Homely Eats meal, you can serve delectable, home-cooked meals to your family and friends in any location, anytime. anyday!</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
    
  )
}

export default About