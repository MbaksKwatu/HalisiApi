'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserPanel } from '@/redux/slices/sliceActions'
import { useRouter } from 'next/navigation'
import SnackBar from '@/components/shared/SnackBar'
import { ClipLoader, BarLoader } from 'react-spinners';
import Image from 'next/image';
import BgImage from '@/images/bg1.jpg'

const Signup = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const name = useRef(null);
    const email = useRef(null);
    const phoneNumber = useRef(null);
    const password = useRef(null);
    const [loading, setLoading] = useState(false)
    const [show, setshow] = useState({
      open:false,
      text: '',
      mood: 'error'
    })

    const handleSignUp = (e) => {
      e.preventDefault()
      setLoading(true)
        const details = {
            "name":name.current.value,
            "email":email.current.value,
            "phoneNumber":phoneNumber.current.value,
            "password":password.current.value
        }
        dispatch(createUserPanel(details))
        .then((response)=>{
            if (response?.payload?.status === "Success"){
              setshow({open:true, text: 'Account created successfully', mood: 'success'})
              router.push('/panel/login') 
            }else{
              setshow({open:true, text: 'Failed, try again', mood: 'error'})
            }
        })
        .finally(setLoading(false))

    }

  return (
    <div className="flex py-4 w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <h2 className="font-semibold">Hali Halisi</h2>
          {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/> */}
        </div>

        <p className="mt-3 text-2xl font-semibold text-center text-gray-600 ">
          Get started now
        </p>

        {/* <a
          href="#"
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
        >
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
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

          <span className="w-5/6 px-4 py-3 font-semibold text-center">
            Sign up with Google
          </span>
        </a> */}

        {/* <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  lg:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase  hover:underline"
          >
            or sign up with email
          </a>

          <span className="w-1/5 border-b  lg:w-1/4"></span>
        </div> */}

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="Name"
          >
            Name
          </label>
          <input
            id="Name"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            ref={name}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            ref={email}
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="Phone"
          >
            Phone number
          </label>
          <input
            id="phone"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
            ref={phoneNumber}
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
          </div>

          <input
            id="loggingPassword"
            ref={password}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div>

        <div className="mt-6">
          <button onClick={handleSignUp} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
          {loading ?  ( <>Please wait <BarLoader color='white'  /></>) : "Sign up"}
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <a
            href="/panel/login"
            className="text-xs text-gray-500 uppercase  hover:underline"
          >
            or <span  className='text-yellow-500'>sign in</span>
          </a>

          <span className="w-1/5 border-b  md:w-1/4"></span>
        </div>
      </div>
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <Image src={BgImage} className='w-full h-full rounded-md' />
        {/* <img
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&auto=format&fit=crop"
          alt="bg"
          className='h-full'
        /> */}
      </div>
      <SnackBar value={show.open} text={show.text} mood={show.mood}/>
    </div>
  );
};

export default Signup;
