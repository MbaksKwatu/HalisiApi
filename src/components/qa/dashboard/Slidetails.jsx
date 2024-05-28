"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header"
import { useDispatch, useSelector } from 'react-redux';
import { getQaSli ,sendEvaluation } from "@/redux/slices/sliceActions";
import useAuth from '@/hooks/useAuth'
import { IoMdStarHalf } from "react-icons/io";
import { PiShootingStarThin } from "react-icons/pi";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";


const SliProfileDetail = ({params}) => {
  useAuth();
    const id = params?.sliId
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.customer);
    const sli = useSelector(state => state.customer?.qasli);
    const token = user?.accessToken
    
    const comment  = useRef(null)

    const handleSubmit = () => {
      details = {
        "slid" : id,
        "comment" : comment.current.value
      }
      dispatch(sendEvaluation({details, token}))
    }

    useEffect(() => {
      dispatch(getQaSli({token,id}))
    }, []);
   

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 ">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen  lg:block w-80">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <Header/>
            
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
            <div className="container mx-auto p-6">
              <div className="bg-white shadow rounded-lg p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-2xl font-semibold text-gray-700">{sli?.name}</h1>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={handleSubmit} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center">
                      <span className="mr-2">📝</span> Send Evaluation
                    </button>
                    <Link href={`/qa/dashboard`}>
                     <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
                      Dashboard
                    </button>
                    </Link>
                    
                  </div>
                </div>
                
                {/* Score and Rating Section */}
                <div className="flex space-x-8 mb-8">
                  <div className="flex-1 bg-yellow-50 p-4 rounded-lg shadow-sm">
                    <p className="text-gray-500">Panel Score</p>
                    <p className="text-2xl font-semibold text-gray-700">{sli?.panelScore}%</p>
                  </div>
                  <div className="flex-1 bg-yellow-50 p-4 rounded-lg shadow-sm">
                    <p className="text-gray-500">Panel Rating</p>
                    <p className="text-xl font-semibold ">{ sli?.status == 'ACCEPTED' ? 'Passed' : sli?.status == 'REJECTED' ? 'Rejected' : 'Training'}</p>
                  </div>
                </div>

                {/* Evaluation Notes Section */}
                <div>
                  <div className="border-b-2 border-yellow-500 pb-2 mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Evaluation Notes</h2>
                  </div>
                  <textarea
                    className="w-full p-4 border rounded-lg"
                    rows="10"
                    ref={comment}
                    placeholder="Type your Evaluation here..."
                  ></textarea>
                </div>
              </div>
            </div>
            {/* <div className="container mx-auto p-4">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="items-center  mb-4">
                  <h1 className="text-2xl font-semibold text-gray-700">{sli?.name}</h1>
                  <div className="flex space-x-2 mt-4">
                    {sli?.status == 'PENDING' ? (
                      <Link href={`/panel/add-ratings/1?id=${sli?.ID}`} >
                       <button className="bg-yellow-500 flex space-x-2 text-yellow-700 px-4 py-2 rounded-md hover:bg-yellow-600">
                        <IoMdStarHalf className="w-5 h-5" />
                        <p> Rate Now</p>
                      </button>
                      </Link>
                      

                    ):
                    <button className="bg-teal-400 flex space-x-2 text-teal-700 px-4 py-2 rounded-md hover:bg-teal-600">
                    <PiShootingStarThin className="w-5 h-5" />
                    <p> Rated</p>
                 </button>
                    }
                   
                   <Link href={`/panel/dashboard`}>
                     <button className="border border-yellow-500 flex space-x-2 text-yellow-700 px-4 py-2 rounded-md">
                       <IoIosArrowRoundBack className="w-5 h-5"/>
                        Dashboard
                      </button>
                   </Link>
                    

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
                      <a href={sli?.cv} className="text-lg font-semibold text-blue-500 hover:underline">
                        {'Certificate'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            </div>
          </div>
        </div>
      </main>
  )
}

export default SliProfileDetail