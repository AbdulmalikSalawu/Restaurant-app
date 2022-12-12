import React from 'react'
import {useFormik} from 'formik';
import {basicSchema} from '../Schemas/schema';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
// import {auth} from './firebase-config'
// import {ref, set, onValue} from 'firebase/database'
// import { db } from './firebase-config'
import { useNavigate } from 'react-router-dom';
import '../Styles/Signup.css'

function Signup() {
  
    const navigate=useNavigate()

    const onSubmit = async (values, actions) => {
      console.log(values);
      console.log("Submitted");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      navigate('/login')
  }

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
        username: "",
        email: "",
        phoneNumber: "",
        password: ""
    },
    validationSchema: basicSchema,
    onSubmit,
})

  // let userId = 0;
  //     let userRef = ref(db,"users");
  //     onValue(userRef, (snapshot) => {
  //       let userArray = [snapshot.val()];
  //       if(userArray){
  //         userId = userArray.length
  //       }
  //       else {
  //         userId = 0;
  //       }
  //       })

  //   const register = async () => {
  //       try {
  //         await createUserWithEmailAndPassword(auth, userEmail, userPassword, userName)
  //         .then((credentials)=> {
  //             let user_id = credentials.user.uid
  //             let userObj = {userEmail, userName, user_id};
  //             let dbRef = ref (db, `users/${userId}`)
  //             set (dbRef, userObj);
  //             console.log(user_id);
  //         })
  //         navigate('/login')
  //       } catch (error) {
  //         alert (error.message);
  //       }
  //     };

    const login = () => {
      navigate('/login')
  }

  return (
    <div className='signupbody'>
      <div className='col-lg-4 mt-5 inputcont text-center pt-4 pb-3'>
        <div className='mt-4 fs-4 fw-bold text-black'><span> Create</span> an Account with Us</div>

        <input type='text' value={values.username} placeholder='username' onChange={handleChange} onBlur={handleBlur} name='username' className={errors.username && touched.username ? "input-error" : ""} /><br />
        {errors.username && touched.username && <p className='error'>{errors.username}</p>}

        <input type='text' value={values.email} placeholder='Email' onChange={handleChange} onBlur={handleBlur} name='email' className={errors.email && touched.email ? "input-error" : ""} /><br />
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}

        <input type='text' value={values.phoneNumber} placeholder='phone number' onChange={handleChange} onBlur={handleBlur} name='phoneNumber' className={errors.phoneNumber && touched.phoneNumber ? "input-error" : ""} /><br />
        {errors.phoneNumber && touched.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}

        <input type='password' value={values.password} placeholder='password' onChange={handleChange} onBlur={handleBlur} name='password' className={errors.phoneNumber && touched.phoneNumber ? "input-error" : ""}  /><br />
        {errors.password && touched.password && <p className='error'>{errors.password}</p>}

        <button disabled={isSubmitting} type='submit' onClick={handleSubmit} className='mt-4 signupbtn2'>Sign Up</button>
        <div className='mt-2'>Already have an account? <span onClick={login} className='fw-bold'>Login</span></div>
       </div>
    </div>
  )
}

export default Signup