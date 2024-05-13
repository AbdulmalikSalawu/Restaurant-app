import React, {useEffect, useState} from 'react'
import axios from "axios"
// import { removeFromCart } from '../features/cartSlice';
// import {useSelector,useDispatch} from "react-redux"; 
// import {loadStripe} from "@stripe/stripe-js"
// import URL from 

const Checkout = ({itemInCart}) => {
    const apiKey = "pk_test_51PBFE62KbV1mFm0DOvwfDrMqE8iF8TIrAG8Djv4gxnIzbWIGm7Dw9qIbzpWr5qg6wMXmpkdJPHY0xIB2vK0xDmK600gSfcUtsz"
    // const cart = useSelector((state) => state.cart)
    // const [newCart, setNewCart] = useState("")
    // setNewCart(cart.cartItems)
    // const dispatch = useDispatch()
    
    // METHOD 1
    // const handleCheckout = async () => {
    //         const stripe = await(loadStripe)("pk_test_51PBFE62KbV1mFm0DOvwfDrMqE8iF8TIrAG8Djv4gxnIzbWIGm7Dw9qIbzpWr5qg6wMXmpkdJPHY0xIB2vK0xDmK600gSfcUtsz")
    //         const body = itemInCart
    //         const headers = {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${apiKey}`
    //         }

    //    const response = await fetch(`http://localhost:5000/createCheckoutSession`, {
    //     // const response = await fetch(`https://abdulmalikyinka.onrender.com/createCheckoutSession`,{
    //         method: "POST",
    //         headers: headers,
    //         body:JSON.stringify(body)
    //     })
    //         const session = await response.json();
    //         const result = stripe.redirectToCheckout({
    //         sessionId:session.id
    //     })
    //     if(result.error){
    //         console.log(result.error)
    //     }
        
    // }

    //METHOD 2
    const handleCheckout = () => {
        axios.post(`https://abdulmalikyinka.onrender.com/createCheckoutSession`, {itemInCart})
        .then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((error)=>{
            console.log(error.message)
        })
        // dispatch(removeFromCart(newCart))
    }

  return (
    <span>
      <button className='buyAll text-white border-0 d-block m-auto text-center col-sm-10 col-md-8 col-lg-3 fw-bold' onClick={()=> handleCheckout()}>MAKE YOUR PAYMENT</button>
    </span>
  )
}

export default Checkout