import React,{useEffect} from 'react'
import '../Styles/Whychoose.css'
import card1 from '../Assets/cardimg6.png';
import card2 from '../Assets/cardimg4.png';
import card3 from '../Assets/cardimg2.png'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setnavbar, setShow } from '../features/navbarSlice';
import arrow from '../Assets/arrow-left.svg'

function WhyChoose() {
    // const showNav2 = useSelector((state) => state.navbar.navbar)
    const showNav = useSelector((state) => state.navbar.show)
    const backIcon = useSelector((state) => state.navbar.backIcon)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setnavbar())
        dispatch(setShow())
      }, [])

  return (
    <div>
        {/* {showNav2? (<Nav />): ""} */}
        {showNav? (
        <div>
             {backIcon ? ( <img src={arrow} onClick={()=>navigate(-1)} className='ms-3 col-1 mt-1' alt='back' />) : ""}
            <div className='text-center mt-1'>
                <h2 className='fs-1'>Why Choose Us</h2>
                <div className='fs-5'>These are what makes our delicacies different</div>
            </div>

            <div className='container mt-5 mb-5 py-5 px-5'>
                <div className='row'>
                    <div className='cardcontainer'>
                    <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow">
                        <img class="card-img-top" src={card1}alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold">Easy to Order</h5>
                            <p class="card-text text-center">Order food at a single click and select all food to order at any poin in time and at ease and comfort.</p>
                        </div>
                    </div>
                    <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow">
                        <img class="card-img-top" src={card2} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold">Fast delivery</h5>
                            <p class="card-text text-center">food delivery fast and reliable and get delivered at deliivery time and location any day, any time.</p>
                        </div>
                    </div>
                    <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 shadow">
                        <img class="card-img-top" src={card3} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title text-center fw-bold">100% quality</h5>
                            <p class="card-text text-center">We provide quality food for you and your loved ones for health and so onnnnnn and for wellness.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        ) : ""}
        
    </div>
  )
}

export default WhyChoose