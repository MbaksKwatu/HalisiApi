'use client'
import React from 'react'

const Login = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-6">
            <div className="max-w-md w-full text-gray-600 bg-gray-300 px-8 py-6  rounded-md">
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
                            placeholder='enter your password'
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-white outline-none border border-gray-400 focus:border-gray-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-600 rounded-lg duration-150"
                    >
                        Continue
                    </button>
                    
                </form>
            </div>
        </main>
  )
}

export default Login