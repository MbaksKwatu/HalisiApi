import React, { FC } from "react";
import { FaBriefcase,FaRegStarHalfStroke  } from "react-icons/fa6";

export interface PageAddListing7Props {}

const PageAddListing7: FC<PageAddListing7Props> = () => {
  return (
    <>
      <div className="flex py-4 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          
        </div>

        <p className="mt-3 text-2xl font-semibold text-center text-gray-600 ">
          SLI Rating Completed!
        </p>

        <div className="flex space-x-4 mt-10">
          <div className="px-4 py-6 space-y-3 bg-teal-200 text-center rounded-lg">
             <div className="flex justify-center"><FaBriefcase className="w-6 h-6" /></div> 
            <p>Return to <br/> dashboard</p>
          </div>
          <div className="px-4 py-6 space-y-3 text-center bg-orange-100 rounded-lg">
            <div className="flex justify-center"><FaRegStarHalfStroke className="w-6 h-6" /></div>
            <p>Continue <br /> Rating </p>
          </div>
        </div>
        

      </div>
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
          alt="bg"
        />
      </div>
    </div>
    </>
  );
};

export default PageAddListing7;
