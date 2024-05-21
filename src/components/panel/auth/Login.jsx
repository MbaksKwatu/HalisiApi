'use client'
import React, { useState, useEffect, useRef } from 'react';
import SnackBar from '@/components/shared/SnackBar'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/redux/slices/sliceActions';
import { ClipLoader, BarLoader } from 'react-spinners';


const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const email = useRef(null);
  const password = useRef(null);
  
  const [show, setshow] = useState({
    open:false,
    text: '',
    mood: 'error'
  })

  const customer = useSelector(state => state.customer)

  const handleSignIn = (e) => {
    e.preventDefault()
    const details = {
      "email":email.current.value,
      "password":password.current.value
    }
    dispatch(loginUser(details))
  //   .then((response)=>{
  //     console.log(response)
  //     if (response?.payload?.status === "Success"){
  //       setshow({open:true, text: 'Login was successful', mood: 'success'})
  //       router.push('/panel/dashboard') 
  //     }else{
  //       setshow({open:true, text: 'Failed, try again', mood: 'error'})
  //     }
  // })
  
  }

  useEffect(() => {
    if(customer?.loading === false && customer.message === 'login successful'){
        setshow({open:true, text: 'Login was successful', mood: 'success'})
       router.push('/panel/dashboard')
      }
}, [customer]);


  return (
    <div className="py-8 mt-6 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-xl">
      <div className="w-full px-6 py-8 md:px-8 ">
        <p className="mt-3 text-2xl font-bold text-center text-gray-600 ">
          Welcome back
        </p>

        <div className="text-center items-center justify-between mt-4">
          <p className="text-gray-400 text-xs">
            Enter your details to sign in your account
          </p>
          <p className="text-gray-800 text-sm">
            Dont have an account?{" "}
            <a href='/panel/signup' className="text-yellow-500 text-sm">Register Now</a>{" "}
          </p>
        </div>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="LoggingEmailAddress"
          >
            Email{" "}
          </label>
          <input
          ref={email}
            placeholder="Example@gmail.com"
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            required
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <a href="#" className="text-xs text-yellow-500  hover:underline">
              Forgot Password?
            </a>
          </div>

          <input
          ref={password}
            placeholder="Enter your password"
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            required
          />
        </div>

        <div className="mt-6">
          <button onClick={handleSignIn} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
          {customer?.loading?  ( <>Logging you in <BarLoader color='white'  /></>) : "Continue"}
          </button>
        </div>

        {/* <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-gray-500 uppercase  hover:underline"
          >
            or sign in with
          </a>

          <span className="w-1/5 border-b  md:w-1/4"></span>
        </div> */}
        {/* <div className="flex justify-center text-center">
          <a
            href="#"
            className="flex items-center w-40 justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
          >
            <div class="px-4 py-2">
              <svg class="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span class="w-3/6 px-4 py-3 font-semibold text-center">
              Google
            </span>
          </a>
        </div> */}
      </div>
      <SnackBar value={show.open} text={show.text} mood={show.mood}/>
    </div>
  );
};

export default Login;
