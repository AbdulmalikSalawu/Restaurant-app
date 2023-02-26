import React from 'react'
import insta from '../Assets/igicon.svg'
import fb from '../Assets/fbicon.svg'
import twi from '../Assets/twittericon.svg'
import logo from '../Assets/homely.svg';
import '../Styles/footer.css'

function Footer() {

  return (
    <div className='whole mt-5 pb-5'>
        {/* <div className='container mt-5'> */}
        <div className='row footcont'>
            <div className='col-md-4 text-center mt-5'>
            <img src={logo} /> <br />
            <p className='px-5'>Solution for easy and flexible getting meals for the household.You can trust us anywhere through this platform</p>
            </div>
            <div className='col-md-4 text-center mt-5 about'>
                <ul>
                    <li className='fs-2'><h2>About</h2></li>
                    <li className='mt-2'>Our company</li>
                    <li className='mt-2'>Career</li>
                    <li className='mt-2'>Social impact</li>
                </ul>
            </div>
            <div className='col-md-4 text-center mt-5'>
                <h2>Socials</h2>
                    <img src={insta} alt='fb' /><br />
                    <img className='mt-2' src={twi} /><br />
                    <img className='mt-2' src={fb} />
            </div>
        {/* </div> */}
        </div>
    </div>
  )
}

export default Footer