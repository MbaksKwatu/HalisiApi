import React from "react";

const ResetPassword = () => {
  return (
    <div className="py-8 mt-6 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-xl">
      <div className="w-full px-6 py-8 md:px-8 ">
        <p className="mt-3 text-2xl font-bold text-center text-gray-600 ">
          Reset password
        </p>

        <div className="text-center items-center justify-between mt-4">
          <p className="text-gray-400 text-xs">
            Please kindly set your new password
          </p>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="loggingPassword"
            >
              New password
            </label>
          </div>

          <input
            placeholder="enter your new password"
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="loggingPassword"
            >
              Re-enter password
            </label>
          </div>

          <input
            placeholder="re-enter your password"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-gray-700  transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
