import {configureStore} from '@reduxjs/toolkit'
import navbarReducer from '../features/navbarSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
	reducer: {
		navbar: navbarReducer,
		cart: cartReducer
	},
})