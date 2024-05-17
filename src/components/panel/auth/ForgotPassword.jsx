import React from "react";

const ForgotPassword = () => {
  return (
    <div className="py-8 mt-6 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-xl">
      <div className="w-full px-6 py-8 md:px-8 ">
        <p className="mt-3 text-2xl font-bold text-center text-gray-600 ">
          Forgot your password?
        </p>

        <div className="text-center items-center justify-between mt-4">
          <p className="text-gray-400 text-xs">
            Enter your email so that we can send you a password reset link
          </p>
          <p className="text-gray-800 text-sm">
            Dont have an account?{" "}
            <span className="text-yellow-500 text-sm">Register Now</span>{" "}
          </p>
        </div>

        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="LoggingEmailAddress"
          >
            Email{" "}
          </label>
          <input
            placeholder="example@gmail.com"
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Send Email
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-gray-500 uppercase  hover:underline"
          >
            or sign in with
          </a>

          <span className="w-1/5 border-b  md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
