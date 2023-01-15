import React,{useEffect} from 'react'
// import Nav from './Nav'
// import Nav2 from './Nav2';
import { useDispatch, useSelector } from 'react-redux';
import { setnavbar } from '../features/navbarSlice';
import xyz from '../Assets/jollofRice.jpg'

function About() {
  // const showNav2 = useSelector((state) => state.navbar.navbar)
  // const isLoggedin = useSelector((state) => state.navbar.isLoggedin)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setnavbar())
  }, [])
  
  return (
    <div>
      {/* {showNav2 && isLoggedin===true ? (<Nav2 />) : showNav2 && isLoggedin===false ? (<Nav />):  ""} */}
      
        <h2 className='fs-1 text-center mt-4'>About Us</h2>
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
    </div>
  )
}

export default About