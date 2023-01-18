import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Styles/cart.css'
import carti from '../Assets/cart2.svg';
import plus from '../Assets/plus-square.svg'
import dash from '../Assets/dash-square.svg'
import { setLogIn } from '../features/navbarSlice';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../features/cartSlice';

function CartPage() {

    const cart = useSelector((state) => state.cart)
    const showNav = useSelector((state) => state.navbar.show)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setLogIn())
    }, [])

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

  return (
    <div>
      {showNav ? (
          <div className='cartBody'>
            {cart.cartItems.length === 0 ? (
                <p>Your cart is currently empty</p>
                ) : (
                  <div>
                <h3 className='text-center mb-5 mt-3 fw-bold'>Your Cart<span><img className='cartIcon2 ms-2' src={carti} alt='cart icon'></img></span></h3>
                  <div className='cart-container px-2 py-3 mb-5 col-sm-10 col-md-10 col-lg-8 d-block m-auto mt-1 shadow'>
                {
                cart.cartItems?.map(myCart => (
                  <div className='wholeItem'>
                    <div className='cart-body py-2'>
                        <img className='cartImg ms-1 mt-1' src={myCart.imageURL} alt='error' />
                        <div className='qtyBtns ms-2 mt-3'>
                          <img onClick={() => increaseQty(myCart)} src={plus} />
                          <img onClick={() => decreaseItem(myCart)} src={dash} />
                        </div>
                        
                        <div className='cartItemName ms-md-3 ms-lg-5 fw-bold'>{myCart.itemName}</div>
                        <span className='cartPrice ms-md-3 ms-lg-5 d-md-none'>${myCart.itemPrice*myCart.cartQuantity}</span> 
                        <span className='cartQty ms-md-3 ms-lg-5'><i className='fs-5'>QTY</i><input className='ms-3 cartInp fw-bold fs-3' value={myCart.cartQuantity} type='number' /></span>
                        <span className='cartTotal fw-bold d-none d-md-block'>${myCart.itemPrice*myCart.cartQuantity}</span>
                        <button onClick={() => removeItemLarge(myCart)} className='removeBtn'>Remove</button>
                        <hr/>
                    </div>
                    <div className='optionBtns d-md-none d-block m-auto text-center'>
                          <button onClick={() => removeCartItem(myCart)} className='deleteFood px-2 py-1 mt-2'>Remove</button>
                          <button className='orderFood px-3 py-1'>Order</button>
                    </div>
                    <hr className='d-sm-none d-md-block' />
                  </div>
                  ))
                }</div>
              </div>
              )}
              <button className='removeAll mb-3 text-white border-0 d-block m-auto text-center col-sm-10 col-md-8 col-lg-3 mt-'>Remove All</button>
              <button className='buyAll text-white border-0 d-block m-auto text-center col-sm-10 col-md-8 col-lg-3'>Purchase All</button>
      </div>
      ) : ""}
    </div>
  )
}

export default CartPage