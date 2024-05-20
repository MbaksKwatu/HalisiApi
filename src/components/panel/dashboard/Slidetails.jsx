"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { getSLI } from "@/redux/slices/sliceActions";

const SliProfileDetail = ({params}) => {
  const id = params?.sliId
  
  const dispatch = useDispatch();
    const profileRef = useRef();
    const {user} = useSelector(state => state.customer);
    const sli = useSelector(state => state.customer?.sli);
    const [isProfileActive, setIsProfileActive] = useState(false);
    const token = user?.accessToken

    useEffect(() => {
      dispatch(getSLI({id, token}))
    }, []);
   

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 ">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen  lg:block w-80">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <header className="z-40 flex items-center justify-between w-full h-16 shadow-sm ">
              <div className="block ml-6 lg:hidden">
                <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
                  <svg
                    width="20"
                    height="20"
                    className="text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex text-2xl font-bold text-gray-900 space-x-3 ml-6 ">
                <p>Parachichi </p>
                <p>Dashboard</p>
                
              </div>
              <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div className="relative flex items-center justify-end w-full p-1 space-x-4">
                  <button className="flex items-center p-2 text-gray-800 bg-yellow-500 rounded-md shadow hover:text-gray-700 text-md">
                    Logout
                  </button>
                  <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="https://plus.unsplash.com/premium_photo-1664303232497-69fd12425fe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <button
                    ref={profileRef}
                    className="flex items-center text-gray-500  text-md"
                    onClick={() => setIsProfileActive(!isProfileActive)}
                  >
                   <p>{user?.name}</p>  
                    <svg
                      width="20"
                      height="20"
                      className="ml-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                    </svg>
                  </button>
                  {isProfileActive ? (
                    <div className="absolute z-10 top-12 right-0 w-64 rounded-lg bg-white shadow-md border text-sm text-gray-600">
                      <div className="p-2 text-left">
                        <span className="block text-gray-500/80 p-2">
                          {"user@gmail.com"}
                        </span>
                        <a
                          href="/profile"
                          className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                        >
                          Profile
                        </a>

                        <button className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </header>
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
            <div className="container mx-auto p-4">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="items-center  mb-4">
                  <h1 className="text-2xl font-semibold text-gray-700">{sli?.name}</h1>
                  <div className="flex space-x-2 mt-4">
                    <button className="bg-yellow-500 text-yellow-700 px-4 py-2 rounded-md hover:bg-yellow-600">Rate Now</button>
                    <button className="border border-yellow-500 text-yellow-700 px-4 py-2 rounded-md">Make an offer</button>
                  </div>
                </div>
                <div className="border-b-2 border-yellow-500 mb-4">
                      <h2 className="text-xl font-semibold text-gray-700 pb-2">About</h2>
                    </div>
                <div className="flex space-x-6">
                   
                  <div className="w-1/2">
                   
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border p-4 rounded-lg">
                        <p className="text-yellow-500">Years of Interpretation</p>
                        <p className="text-lg font-semibold text-gray-700">{sli?.yearsOfExperience}</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <p className="text-yellow-500">Age Group</p>
                        <p className="text-lg font-semibold text-gray-700">20 - 30</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <p className="text-yellow-500">Gender</p>
                        <p className="text-lg font-semibold text-gray-700">{sli?.gender}</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <p className="text-yellow-500  ">Level of Education</p>
                        <p className="text-lg font-semibold text-gray-700">{sli?.levelOfEducation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="border p-4 rounded-lg mb-4">
                      <p className="text-gray-500">Email</p>
                      <p className="text-lg font-semibold text-gray-700">{sli?.email}</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="text-gray-500">Certificate</p>
                      <p className="text-lg font-semibold text-blue-500 hover:underline">
                        {sli?.cv ? sli?.cv : 'Not Available'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </main>
  )
}

export default SliProfileDetail