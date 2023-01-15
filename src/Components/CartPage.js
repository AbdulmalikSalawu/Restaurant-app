import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {

    const userCart = useSelector((state) => state.cart.cartItems)

  return (
    <div>
        {
            userCart.map((item, index) => (
                <div key={index}>
                    <img src={item.imageURL} alt='error' />,
                    {item.itemPrice},
                    {item.itemName}
                </div>
        ))
        }
    </div>
  )
}

export default CartPage