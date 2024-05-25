'use client'
import React, { useState, useRef, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { FaIndustry } from "react-icons/fa";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getTrainingTask } from "@/redux/slices/sliceActions";

const Taskdetail = ({params}) => {
    const id = params?.taskId
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.customer);
    const task = useSelector(state => state.customer?.trainingtask);
    const token = user?.accessToken

    useEffect(() => {
        dispatch(getTrainingTask({id,token}))
    }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        <div className='hover:underline decoration-orange-500'>
            <Link href={`/sli/training/dashboard`}> Dashboard</Link>
        </div>
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
          <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points=" 8,5 8,1 16,1 16,5"
              strokeLinejoin="round"
            />
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="9,15 1,15 1,5 23,5 23,15 15,15"
              strokeLinejoin="round"
            />
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="22,18 22,23 2,23 2,18"
              strokeLinejoin="round"
            />
            <rect
              x="9"
              y="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              width="6"
              height="4"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Task description

          </h2>

          <h3 className="text-2xl font-semibold">{task?.name}</h3>
          <p className="text-base text-gray-700 md:text-lg">
            {task?.description}
          </p>
        </div>
        <div className='flex space-x-2'>
        <MdOutlineLocationOn className='text-teal-500 w-5 h-5'/>
          <a
            href="/"
            aria-label=""
            className=" items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            
            On site
          </a>
        </div>
        <div className='flex space-x-2'>
        <AiOutlineLink className='text-purple-500 w-5 h-5'/>
          <a
            href="/"
            aria-label=""
            className="items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
           
            Link
          </a>
        </div>
        <div className='flex space-x-2'>
        <FaIndustry className='text-rose-500 w-5 h-5'/>
          <a
            href="/"
            aria-label=""
            className=" items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            
            Industry
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center -mx-4 lg:pl-8">
        <div className="flex flex-col items-end px-3">
          <img
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="px-3">
          <img
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
            src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
        </div>
        
      </div>
      {/* <div className='flex justify-end'>book</div> */}
    </div>
  </div>

  )
}

export default Taskdetail