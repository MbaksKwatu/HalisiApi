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
    .unwrap()
    .then((res)=>{
      if(res.userGroup == 'SIGN INTERPRETER'){
        setshow({open:true, text: 'Login was successful', mood: 'success'})
        router.push('/sli/dashboard') 
      }else {
        setshow({open:true, text: 'That page is restricted', mood: 'error'}) 
      }
      
      
    })
    .catch((error)=>{
      setshow({open:true, text: 'Failed to login, please try again', mood: 'error'})
      console.error('Failed to login',error)
    })
  
  
  }


  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-6">
            <div className="max-w-md w-full text-gray-600 bg-gray-200 px-8 py-6  rounded-md">
                <div className="text-center">
                    
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Welcome</h3>
                        <p className="text-sm">Enter your shared credentials from your email to sign to your account</p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5 mb-8"
                >
                    <div>
                        <label className="font-semibold text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            ref={email}
                            placeholder='e.g username@kinety.com'
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg--white outline-none border border-gray-400 focus:border-gray-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-semibold text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            ref={password}
                            placeholder='enter your password'
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-white outline-none border border-gray-400 focus:border-gray-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                    onClick={handleSignIn}
                        className="w-full px-4 py-2 text-white font-medium bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-600 rounded-lg duration-150"
                    >
                         {customer?.loading?  ( <>Logging you in <BarLoader color='white'  /></>) : "Continue"}
                    </button>
                    
                </form>
            </div>
            <SnackBar value={show.open} text={show.text} mood={show.mood}/>
        </main>
  )
}

export default Login