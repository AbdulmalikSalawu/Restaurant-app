import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	show: true,
	navbar: false,
	isLoggedin: false
}

export const navbarSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		setShow: (state) => {
			state.show = true
		},
		removeShow: (state) => {
			state.show = false
		},
		setnavbar: (state) => {
			state.navbar = true
		},
		removenavbar: (state) => {
			state.navbar = false
		},
		setLogIn: (state) => {
			state.isLoggedin = true
		},
		setLogout: (state) => {
			state.isLoggedin = false
		},
		neutralUser: (state) => {
			state.isLoggedin = null
		}
	},
})

export const {
	setShow, removeShow,
	setnavbar, removenavbar,
	setLogIn,setLogout,neutralUser} = navbarSlice.actions

export default navbarSlice.reducer