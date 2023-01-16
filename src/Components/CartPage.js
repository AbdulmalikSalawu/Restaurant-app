import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Styles/cart.css'
import carti from '../Assets/cart2.svg';
import { setLogIn } from '../features/navbarSlice';

function CartPage() {

    const cart = useSelector((state) => state.cart)
    const showNav = useSelector((state) => state.navbar.show)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setLogIn())
    }, [])

  return (
    <div>
      {showNav ? (
          <div>
            {cart.cartItems.length === 0 ? (
                <p>Your cart is currently empty</p>
            ) : (
              <div className='cart-container px-4 py-3 mb-5 col-sm-10 col-md-10 col-lg-8 d-block m-auto mt-4 shadow'>
                <h3 className='text-center mb-5'>Shopping Cart<span><img className='cartIcon2 ms-2' src={carti} alt='cart icon'></img></span></h3>
                <hr />
                {
                cart.cartItems?.map(myCart => (
                  <div className='wholeItem'>
                    <div className='cart-body py-2 shado'>
                        <img className='cartImg' src={myCart.imageURL} alt='error' />
                        
                        <div className='cartItemName ms-md-3 ms-lg-5 fw-bold'>{myCart.itemName}</div>
                        <span className='cartPrice ms-md-3 ms-lg-5'>${myCart.itemPrice}</span>
                        <span className='cartQty ms-md-3 ms-lg-5'><i>QTY</i><input className='ms-3 cartInp fw-bold fs-2' value={myCart.cartQuantity} type='number' /></span>
                        <span className='cartTotal fw-bold'>${myCart.itemPrice*myCart.cartQuantity}</span>
                        <button className='removeBtn'>Remove</button>
                        <hr/>
                    </div>
                    <div className='optionBtns d-md-none d-block m-auto text-center'>
                          <button className='deleteFood px-2 py-1 mt-2'>Delete</button>
                          <button className='orderFood px-3 py-1'>Order</button>
                    </div>
                    <hr className='d-sm-none d-lg-block' />
                  </div>
                  ))
                }
              </div>
              )}
      </div>
      ) : ""}
    </div>
  )
}

export default CartPage