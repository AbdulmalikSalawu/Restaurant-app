import React,{useState,useEffect} from 'react'
import {useFormik} from 'formik';
import {basicSchema} from '../Schemas/loginSchema';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Schemas/firebase-config'
import { useNavigate } from 'react-router-dom';
import {neutralUser,setLogout,setShow} from '../features/navbarSlice'
import '../Styles/Signup.css'
import { useDispatch, useSelector } from 'react-redux';
import arrow from '../Assets/arrow-left.svg'

function Login() {

    const navigate=useNavigate();
    const dispatch = useDispatch();
    const backIcon = useSelector((state) => state.navbar.backIcon)
    const [firebaseError, setFirebaseError] = useState("")

    useEffect(() => {
      dispatch(neutralUser())
      dispatch(setShow())
    }, []) 

    const onSubmit = async (values, actions) => {
      setFirebaseError("")
      console.log(values);
      new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password)
        actions.resetForm();
        navigate('/dashboard')
      } catch (error) {
        setFirebaseError(error.message)
      }
  }

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    const signup = () => {
      navigate('/signup')
  }

  return (
    <div className='signupbody'>
       {backIcon ? ( <img src={arrow} onClick={()=>navigate(-1)} className='ms-3 col-1 mt-1 backIcon bg-white rounded-pill px-1 py-1' alt='back' />) : ""}  
      <div className='inputcont2 col-lg-4 mt-5  text-center pt-4 pb-3'>
      <div className='mt-4 fs-4 fw-bold text-black'><span>Welcome</span> Back</div>

      {firebaseError ? <p className='error'>{firebaseError.replace("auth/", "")}</p> : ""}

        <input type='text' name='email' value={values.email} placeholder='email' onChange={handleChange} onBlur={handleBlur} /><br />
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}

        <input type='password' name='password' value={values.password} placeholder='password'  onChange={handleChange} onBlur={handleBlur} /><br />
        {errors.password && touched.password && <p className='error'>{errors.password}</p>}

        <button disabled={isSubmitting} type='submit' onClick={handleSubmit} className='signupbtn2 mt-5'>Login</button>
        <div className='mt-2'>No account yet? <span onClick={signup} className='fw-bold'>Sign up</span></div>
      </div>
    </div>
  )
}

export default Login