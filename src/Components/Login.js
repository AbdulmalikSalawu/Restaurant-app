import React from 'react'
import {useFormik} from 'formik';
import {basicSchema} from '../Schemas/schema';
// import {signInWithEmailAndPassword} from 'firebase/auth'
// import {auth} from './firebase-config'
import { useNavigate } from 'react-router-dom';
import '../Styles/Signup.css'

function Login() {

    const navigate=useNavigate()

    const onSubmit = async (values, actions) => {
      console.log(values);
      console.log("Submitted");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      navigate('/dashboard')
  }

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    // const login = async () => {
    //   try {
    //     const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    //     navigate('/dashboard')
    //     console.log(user);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    const signup = () => {
      navigate('/signup')
  }

  return (
    <div className='signupbody'>
      <div className='inputcont2 col-lg-4 mt-5  text-center pt-4 pb-3'>
      <div className='mt-4 fs-4 fw-bold text-black'><span>Welcome</span> Back</div>

        <input type='email' value={values.email} placeholder='email' onChange={handleChange} onBlur={handleBlur} name='email' /><br />
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}

        <input type='password' value={values.password} placeholder='password' name='password' onChange={handleChange} onBlur={handleBlur} /><br />
        {errors.password && touched.password && <p className='error'>{errors.password}</p>}

        <button disabled={isSubmitting} type='submit' onClick={handleSubmit} className='signupbtn2 mt-5'>Login</button>
        <div className='mt-2'>No account yet? <span onClick={signup} className='fw-bold'>Sign up</span></div>
      </div>
    </div>
  )
}

export default Login