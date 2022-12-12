// import React, {useState} from 'react'
// // import {signInWithEmailAndPassword} from 'firebase/auth'
// // import {auth} from './firebase-config'
// import { useNavigate } from 'react-router-dom';
// import '../Styles/Signup.css'

// function Login() {

//   // const [loginEmail, setLoginEmail] = useState("");
//   // const [loginPassword, setLoginPassword] = useState("");

//     // const login = async () => {
//     //   try {
//     //     const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//     //     navigate('/dashboard')
//     //     console.log(user);
//     //   } catch (error) {
//     //     console.log(error.message);
//     //   }
//     // };

//     const navigate = useNavigate()
//     const signup = () => {
//       navigate('/signup')
//   }

//   return (
//     <div className='signupbody'>
//       <div className='inputcont2 col-lg-4 mt-5  text-center pt-4 pb-1'>
//       <div className='mt-4 fs-4 fw-bold text-black'><span>Welcome</span> Back</div>
//         <input type='email' placeholder='email' onChange={(e) => {setLoginEmail(e.target.value)}}  /><br />
//         <input type='password' placeholder='password' onChange={(e) => {setLoginPassword(e.target.value)}}  /><br />
//         <button onClick={login} className='signupbtn2 mt-5'>Login</button>
//         <div className='mt-2'>No account yet? <span onClick={signup} className='fw-bold'>Sign up</span></div>
//       </div>
//     </div>
//   )
// }

// export default Login