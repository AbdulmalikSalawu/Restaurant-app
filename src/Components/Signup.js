import React, {useState,useEffect} from 'react'
import {useFormik} from 'formik';
import {basicSchema} from '../Schemas/schema';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {ref, set, onValue} from 'firebase/database'
import {auth, db} from '../Schemas/firebase-config'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {neutralUser, setShow} from '../features/navbarSlice'
import '../Styles/Signup.css'

function Signup() {
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firebaseError, setFirebaseError] = useState("")

    useEffect(() => {
      dispatch(neutralUser())
      dispatch(setShow())
    }, []) 

    let userId = 0;
    let userDb = ref(db,"users");
    let userArray = [];
    onValue(userDb, (snapshot) => {
      userArray = snapshot.val();
        if(userArray){
          userId = userArray.length
        }
        else {
          userId = 0;
        }
        })

    const onSubmit = async (values, actions) => {
      console.log(values);
      new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password, values.phoneNumber, values.username)
        .then((credentials)=> {
            let user_id = credentials.user.uid
            let userObj = {email:values.email, phoneNumber:values.phoneNumber, username:values.username};
            let dbRef = ref (db, `users/${userId}`)
            set (dbRef, userObj);
            console.log(user_id);
          })
          navigate('/login')
          actions.resetForm();
      } catch (error) {
        setFirebaseError(error.message)
      }
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
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}{firebaseError ? <p className='error'>{firebaseError}</p> : ""}

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