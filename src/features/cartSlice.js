import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    moreDetails: localStorage.getItem("more-details") ? JSON.parse(localStorage.getItem("more-details")) : [],
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
                state.cartItems[itemIndex].cartQuantity += 1;
                alert(`${state.cartItems[itemIndex].cartQuantity} plates of ${action.payload.itemName} added😋`)
            } else {
                const tempProduct = {...action.payload, cartQuantity:1};
                state.cartItems.push(tempProduct);
                alert(`${action.payload.itemName} added to cart 😋`)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        
        viewMore(state, action){
                state.moreDetails.push(action.payload)
                localStorage.setItem("more-details", JSON.stringify(state.moreDetails))
        },

        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(cartItem => cartItem.itemName !== action.payload.itemName);

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            // alert(`${action.payload.itemName} removed from cart `)
        },

        increaseQuantity(state, action){
            const itemIndex = state.cartItems.findIndex(items => items.itemName === action.payload.itemName);
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQuantity = state.cartItems[itemIndex].cartQuantity + 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            } 
        },

        decreaseQuantity(state, action){
            const itemIndex = state.cartItems.findIndex(items => items.itemName === action.payload.itemName);
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQuantity =  state.cartItems[itemIndex].cartQuantity - 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            } 
        },
        removeAllItems(state, action){
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        purchaseAll(state, action){
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    removeAllItems,
    purchaseAll,
    viewMore
} = cartSlice.actions;

export default cartSlice.reducer;