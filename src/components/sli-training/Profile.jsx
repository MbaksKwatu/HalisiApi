'use client'
import React, {useEffect} from "react";
import { IoMdContact } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getPanelistProfile } from "@/redux/slices/sliceActions";

const Profile = () => {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer)
  const profile = useSelector(state => state.customer.profile)
  
  useEffect(() => {
    dispatch(getPanelistProfile(customer?.user?.id))
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* <div className="container mx-auto p-4">
        <p>home</p>
      <div className="flex space-x-8">
      
        <div className="w-1/4 bg-white shadow rounded-lg p-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-white text-4xl">
              <span className="text-4xl">👤</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-700">James Mboya</h2>
            <p className="text-gray-500">Parachichi Panelist</p>
          </div>
        </div>

      
        
        <div className="w-3/4 bg-white shadow rounded-lg p-6">
          <div className="border-b-2 border-yellow-500 pb-2 mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">General</h2>
          </div>
          <div className="space-y-6">
          
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Profile</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-500">Names</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
           
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Account</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-500">Email</label>
                  <input
                    type="email"
                    placeholder="example.email@gmail.com"
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-500">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
           
            <div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> */}


      <div className="flex space-x-8">
        <div className="w-1/4 rounded-md  px-4 py-6">
          <a href="/sli/dashboard" className="text-sm  hover:underline decoration-orange-500 ">Home</a>
          <p className="text-2xl font-semibold mb-3">Profile</p>
          <div className="border border-gray-200 rounded-md px-4 py-6">
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
              Parachichi Panelist
            </p>
            
          </div>
          </div>
        </div>

        <div className="w-3/4   px-4 py-6">
        <h2 className="w-20 mb-5  text-lg font-bold tracking-tight text-gray-900  sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            
            General
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-yellow-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        
          <div className="border border-gray-200 rounded-md px-4 py-6">
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
                  placeholder="full name"
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

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
