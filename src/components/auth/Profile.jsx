import React from "react";
import { IoMdContact } from "react-icons/io";

const Profile = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2   px-4 py-6">
          <p className="text-sm">Home</p>
          <p className="text-xl font-semibold mb-3">Profile</p>
          <div className="border border-gray-200 px-4 py-6">
          <div className="flex justify-center">
            <a href="/" aria-label="Author" className="item-center">
              <IoMdContact className="w-20 h-20 text-yellow-500" />
            </a>
          </div>
          <div className="text-center">
            <a
              href="/"
              aria-label="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              James Mboya
            </a>
            <p className="text-sm font-medium  text-gray-600">
              Parachichi Panelist
            </p>
            <div className="flex mt-4 justify-center items-center gap-x-4 text-yellow-600 text-sm">
              <div className="flex">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
              </div>
            </div>
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
            <div className="w-64  mb-3">
              <label className="font-semibold text-gray-800">Names</label>
              <input
                type="email"
                required
                placeholder="Your full Name"
                className=" mt-2 px-3 py-2 text-gray-500 bg-gray-300 outline-none border border-gray-400 focus:border-gray-600 shadow-sm rounded-lg"
              />
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
                  placeholder="example@gmail.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-gray-700 "
                  for="emailAddress"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 border border-gray-200 rounded-md  dark:text-gray-300  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="border-b border-gray-200 px-2 mt-4 mb-2"></div>

            <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-gray-800 transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
