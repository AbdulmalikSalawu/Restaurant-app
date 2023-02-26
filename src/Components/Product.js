import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import {ref, onValue} from 'firebase/database';
import '../Styles/cart.css'
import carti from '../Assets/cart2.svg';
import checkIcon from '../Assets/check.svg'
import { setLogIn } from '../features/navbarSlice';
import arrow from '../Assets/arrow-left.svg'
import { onAuthStateChanged } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { auth, db } from '../Schemas/firebase-config';

function Product() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

    const [myUser, setMyUser] = useState({})
    const cart = useSelector((state) => state.cart)
    const showNav = useSelector((state) => state.navbar.show)
    const backIcon = useSelector((state) => state.navbar.backIcon)
    // const [uniqueCart, setUniqueCart] = useState(cart.cartItems)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setLogIn())
    }, [])

    useEffect(() => {
      onAuthStateChanged(auth, (user)=> {
        if (user){
          setMyUser(user)
            }
            else {
              navigate("/login")
           }
       });
      }, [])

      let orderId = 0;

      let orderDb = ref(db, "orders");
      let orderArray = [];
          onValue(orderDb, (snapshot)=> {
          orderArray = snapshot.val();
              if (orderArray) {
                orderId = orderArray.length
                // cart.cartItems = orderArray.filter(each => each.uniqueId == myUser.uid)
              }
              else {
                orderId = 0;
              }
          })

  return (
    <div className='mt-5 pt-3'>
      {showNav ? (
          <div className='cartBody'>
                  <div>
                    {backIcon ? ( <img src={arrow} onClick={()=>navigate(-1)} className='ms-3 col-1 mt-1' alt='back' />) : ""}         
                <h3 className='text-center mb-5 fw-bold'>Products page<span><img className='cartIcon2 ms-2' src={carti} alt='cart icon'></img></span></h3>
                  <div>
                  <div className='wholeItem'>
                    <div>
                        {cart.moreDetails.filter((myCart,index)=>index==cart.moreDetails.index).map((myCart) => (
                            <div className='d-block m-auto text-center'>
                                <img className='cartImg d-block m-auto' src={myCart.imageURL} alt='error' />
                                <div className='fs-2 d-block m-auto mt-5'>{myCart.itemName}</div>
                                <button className='btn btn-success py-1 px-3'>Order</button>
                            </div>
                         ))} 
                        <hr/>
                    </div>
                  </div>
                </div>
              </div>
      </div>
      ) : ""}

    <Modal show={show} onHide={handleClose} className='mt-5 py-5'>
      <Modal.Body>
        <img src={checkIcon} alt='success' className='d-block m-auto checkIcon' />
        <h2 className='text-center mt-5 text-black'>Your Order is successful! 🙂</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button className='modalSave text-white py-2 px-5 d-block m-auto text-center fs-5'  onClick={handleClose}>
           Close
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Product