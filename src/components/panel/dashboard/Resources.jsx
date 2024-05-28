"use client";
import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useDispatch, useSelector } from 'react-redux';

const Resources = () => {
    const profileRef = useRef();
    const {user} = useSelector(state => state.customer);
    const [isProfileActive, setIsProfileActive] = useState(false);
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 ">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen  lg:block w-80">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <Header/>
           
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
              <h1 className="text-2xl font-semibold text-gray-800 ">
                Halisi Notes
              </h1>

              <p className="text-gray-700 mt-4 lg:text-sm lg:max-w-2xl">
                Hali Halisi strives to ensure we get qualified sign interpreters on the platform
               <br />
               <br />
               <span className="py-2 font-semibold"> HOW TO RATE</span>
             
              <br />
              <br />
              Click on a the SLI name to access their details and rate them. <br />
              You will not be allowed to Re-Rate an SLI you rated before.
              The star ratings are compulsory so ensure you do fill them in.
              The stars are 4 in total with 1 as the least rating and 4 as the maximum rating.
              Comments are Optional during Rating
              Submitted Ratings cant be changed on submission
              <br />
              <br />
              <span className="font-semibold">HOW TO READ RATINGS</span>
              
              <br />
              <br />
              80% above: Onboarded onto the Hali Halisi digital platform
              <br />
              60% - 80%: Interpreter training program
              <br />
              60% below: Referred to a Kenyan sign language course
              </p>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Resources