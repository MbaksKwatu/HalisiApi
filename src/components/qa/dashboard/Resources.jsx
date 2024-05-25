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
                Class is dead, says Foucault; however, according to Reicher, it is
                not so much class that is dead, but rather the absurdity, and some
                would say the paradigm, of class. However, the subject is interpolated
                into a postpatriarchialist dialectic theory that includes
                consciousness as a totality.
              </p>

              

    
            </div>
          </div>
        </div>
      </main>
  )
}

export default Resources