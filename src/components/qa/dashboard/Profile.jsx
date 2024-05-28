'use client'
import React, {useEffect} from "react";
import { IoMdContact } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getPanelistProfile } from "@/redux/slices/sliceActions";

const Profile = () => {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer)
  const id = customer?.user?.id;
  const token = customer?.user?.accessToken
  const profile = useSelector(state => state.customer.profile)
  
  useEffect(() => {
    dispatch(getPanelistProfile({id, token}))
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2   px-4 py-6">
          <a href="/qa/dashboard" className="text-sm  hover:underline decoration-orange-500 ">Home</a>
          <p className="text-xl font-semibold mb-3">Profile</p>
          <div className="border border-gray-200 px-4 py-6">
          <div className="flex justify-center">
            <a href="/" aria-label="Author" className="item-center">
              <IoMdContact className="w-20 h-20 text-yellow-500" />
            </a>
          </div>
          <div className="text-center">
            <p
            
              
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {profile?.name}
            </p>
            <p className="text-sm font-medium  text-gray-600">
              Quality Assuarance
            </p>
            
          </div>
          </div>
        </div>

        <div className="flex flex-col  lg:col-span-3  px-4 py-6">
        <h2 className="w-20 mb-5  text-lg font-bold tracking-tight text-gray-900  sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            
            General
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-yellow-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        
          <div className="border border-gray-200 px-4 py-6">
            <p className="mb-2 text-xl font-semibold tracking-wide text-gray-900 ">
              Profile
            </p>
            
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">
                Names
                </label>
                <input
                  type="text"
                  value={profile?.name}
                  placeholder="your full name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              
            </div>

            <div className="border-b border-gray-200 px-2 mt-4 mb-2"></div>

            <p className="mb-2 text-xl font-semibold tracking-wide text-gray-900 ">
              Account
            </p>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 " for="username">
                  Email
                </label>
                <input
                  type="email"
                  value={profile?.email}
                  placeholder="example@gmail.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              
            </div>

            <div className="border-b border-gray-200 px-2 mt-4 mb-2"></div>

            {/* <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-gray-800 transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Update
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
