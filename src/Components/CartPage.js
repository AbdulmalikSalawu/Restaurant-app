import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import {ref, onValue} from 'firebase/database';
import '../Styles/cart.css'
import carti from '../Assets/cart2.svg';
import plus from '../Assets/plus-square.svg'
import dash from '../Assets/dash-square.svg'
import checkIcon from '../Assets/check.svg'
import { setLogIn } from '../features/navbarSlice';
import { decreaseQuantity, increaseQuantity, purchaseAll, removeAllItems, removeFromCart } from '../features/cartSlice';
import arrow from '../Assets/arrow-left.svg'
import { onAuthStateChanged } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { auth, db } from '../Schemas/firebase-config';
import Checkout from './Checkout';

function CartPage() {

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
      
    const makeOrder = (myCart) => {
       setShow(true)
       dispatch(removeFromCart(myCart))
    }
    const removeCartItem = (myCart) => {
        dispatch(removeFromCart(myCart))
    }
    const removeItemLarge = (myCart) => {
        dispatch(removeFromCart(myCart))
    }
    const increaseQty = (myCart) => {
      dispatch(increaseQuantity(myCart))
    }
    const decreaseItem = (myCart) => {
      dispatch(decreaseQuantity(myCart))
    }
    const removeAll = () => {
      dispatch(removeAllItems())
    }
    const buyAll = () => {
      setShow(true)
      dispatch(purchaseAll())
    }
    const clarifyC = () => {console.log(cart)}
    
  return (
    <div className='mt-5 pt-3'>
      {showNav ? (
          <div className='cartBody'>
            {cart.cartItems.length === 0 ? (
              <div className='d-block m-auto'>
                  <p className='text-center mt-5 fs-3 fw-bold'>Your cart is currently empty</p>
                  <p className='text-center mt-5'><img src={arrow} onClick={()=>navigate('/ourdishes')} className='me-3 col-1 mt-1' alt='back' />Start Shopping</p>
                </div>
                ) : (
                  <div>
                    {backIcon ? ( <img src={arrow} onClick={()=>navigate(-1)} className='ms-3 col-1 mt-1' alt='back' />) : ""}         
                   
                <h3 className='text-center mb-5 fw-bold'>Your Cart<span><img className='cartIcon2 ms-2' src={carti} alt='cart icon'></img></span></h3>
                
                  <div className='cart-container px-2 py- mb-5 col-sm-10 col-md-10 col-lg-8 d-block m-auto mt- shadow'>
                {
                cart.cartItems?.map((myCart) => (
                  <div className='wholeItem'>
                    <div className='cart-body py-2'>
                        <img className='cartImg ms-1 mt-1' src={myCart.imageURL} alt='error' />
                        <div className='qtyBtns ms-2 mt-3'>
                          <img onClick={() => increaseQty(myCart)} src={plus} />
                          <img onClick={() => decreaseItem(myCart)} src={dash} />
                        </div>
                        
                        <div className='cartItemName ms-md-3 ms-lg-5 fw-bold'>{myCart.itemName}</div>
                        <span className='cartPrice lg-hidden ms-md-3 ms-lg-5 d-md-      
                         none'>${myCart.itemPrice*myCart.cartQuantity}</span> 
                        <span className='cartQty ms-md-3 ms-lg-5'><i className='fs-5'>QTY</i><input className='ms-3 cartInp fw-bold fs-3' value={myCart.cartQuantity} type='number' /></span>
                        <span className='cartTotal fw-bold d-none d-md-block'>${myCart.itemPrice*myCart.cartQuantity}</span>
                        <button onClick={() => removeItemLarge(myCart)} className='removeBtn'>Remove</button>
                        <button className='d-sm-none d-md-block makeOrder text-white ms-1' onClick={()=>makeOrder(myCart)}>Order</button>
                        {/* <Checkout itemInCart = {myCart.itemName} className='buyAll text-white border-0 d-block m-auto text-center col-sm-10 col-md-8 col-lg-3' /> */}

                        <hr/>
                    </div>
                    <div className='optionBtns d-md-none d-block m-auto text-center'>
                          <button onClick={() => removeCartItem(myCart)} className='deleteFood px-2 py-1 mt-2'>Remove</button>
                          <button type='button' data-toggle="modal" data-target="#exampleModal" onClick={()=>makeOrder(myCart)} className='orderFood px-3 py-1'>Order</button>
                    </div>
                    {/* <Checkout /> */}
                    <hr className='d-sm-none d-md-block' />
                  </div>
                  ))
                }</div>
              </div>
              )}
              {cart.cartItems.length===0 ? (
                ""
              ) : (
                
                <span className='btn-contain'>
                  <button onClick={removeAll} className='removeAll mb-3 text-white border-0 d-block m-auto text-center col-sm-10 col-md-8 col-lg-3 mt-'>Remove All</button>
                  <Checkout itemInCart={cart.cartItems}/>
                  {/* <button onClick={buyAll} className='buyAll text-white border-0 d-block m-auto text-center col-sm-10 col-md-8 col-lg-3'>Purchase All</button> */}
                </span>
               )}
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

export default CartPage