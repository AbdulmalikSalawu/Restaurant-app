import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	show: true,
	navbar: false,
	isLoggedin: false,
	backIcon: false,
	userEmail: "",
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
		},
		showBackIcon: (state) => {
			state.backIcon = true
		},
		removeBackIcon: (state) => {
			state.backIcon = false
		},
		sendEmail: (state,action) =>{
			state.userEmail = action.payload
		}
	},
})

export const {
	setShow, removeShow,
	setnavbar, removenavbar,
	setLogIn,setLogout,neutralUser,
	showBackIcon, removeBackIcon,
	sendEmail
		} = navbarSlice.actions

export default navbarSlice.reducer