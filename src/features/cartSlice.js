import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQty: 0,
    cartTotalAmt: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(items => items.itemName === action.payload.itemName);
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload, cartQuantity:1};
                state.cartItems.push(tempProduct);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;