import React, {useEffect, useState} from 'react'
import axios from "axios"
// import { removeFromCart } from '../features/cartSlice';
// import {loadStripe} from "@stripe/stripe-js"
// import URL from 
import PaystackPop from '@paystack/inline-js'

const Checkout = ({itemInCart}) => {
    const apiKey = "pk_test_51PBFE62KbV1mFm0DOvwfDrMqE8iF8TIrAG8Djv4gxnIzbWIGm7Dw9qIbzpWr5qg6wMXmpkdJPHY0xIB2vK0xDmK600gSfcUtsz"

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

    //METHOD 2; I USED THIS ONE OOO!
    // const handleCheckout = () => {
    //     axios.post(`https://abdulmalikyinka.onrender.com/createCheckoutSession`, {itemInCart})
    //     .then((res)=>{
    //         if(res.data.url){
    //             window.location.href = res.data.url
    //         }
    //     }).catch((error)=>{
    //         console.log(error.message)
    //     })
    //     // dispatch(removeFromCart(newCart))
    // }


    //PAYSTACK CHECKOUT WITH REACT JS
    // const paywithpaystack = () =>{
    //    const payStack = new PaystackPop()
    //    payStack.newTransaction({
    //       key: "pk_test_d298bcbdff9d9e3decb001f49bf341f904059f15",
    //       amount: "200000",
    //       email: "salawuabdulmalik90@gmail.com",
    //       onSuccess(transaction){
    //         let message = `Payment Complete reference ${transaction.reference}`
    //         alert(message)
    //       },
    //       onCancel(){
    //         alert("cancelled transaction")
    //       }
    //    })
    // }

    //PAYSTACK CHECKOUT WITH NODE JS
    const paywithpaystack = () => {
        axios.get(`http://localhost:5000/paywithpaystack?email="salawu@gmail.com"&amount="20000"}`)
        .then((res)=>{
              let data = res.data
              window.location.href=data.data.authorization_url
        })
        // dispatch(removeFromCart(newCart))
    }


  return (
    <span>
      {/* <button className='buyAll text-white border-0 d-block m-auto text-center col-sm-10 col-md-8 col-lg-3 fw-bold' onClick={()=> handleCheckout()}>MAKE YOUR PAYMENT</button> */}
      <button className='buyAll text-white border-0 d-block m-auto text-center col-sm-10 col-md-8 col-lg-3 fw-bold' onClick={paywithpaystack}>PAYMENT</button>
    </span>
  )
}

export default Checkout