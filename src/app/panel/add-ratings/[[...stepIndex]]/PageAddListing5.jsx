import React, { FC } from "react";
import ButtonPrimary from "@/components/shared/ButtonPrimary";
import Input from "@/components/shared/Input";



const PageAddListing5 = ({questions}) => {
 
    
  return (
    <>
    <div className="flex py-4 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <h2 className="font-semibold">Parachici SLI Rating</h2>
          {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/> */}
        </div>

        <p className="mt-3 text-2xl font-semibold text-center text-gray-600 ">
          Rate the SLI profile
        </p>

        <p className="mt-3 text-sm  text-center text-gray-600 ">
          1 start for What is your field of work
        </p>
        

        {questions?.map((question)=> (
          <div key={question.id} className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="loggingPassword"
            >
             {question.description}
            </label>
            <div className="flex justify-center items-center gap-x-4 text-yellow-600 text-sm">
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

          <input
            
            id="comment"
            placeholder="comments(optional)"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
        </div>

        ))}

        

        {/* <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="loggingPassword"
            >
             What is your field of work?
            </label>
            <div className="flex justify-center items-center gap-x-4 text-yellow-600 text-sm">
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

          <input
            
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div> */}

        {/* <div className="mt-6">
            <div className='flex space-x-3 space-between'>
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Go back 
                </button>
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Continue
                </button>

            </div>
         
        </div> */}

        
      </div>
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
          alt="bg"
        />
      </div>
    </div>
      {/* <div>
        <h2 className="text-2xl font-semibold">
          Set house rules for your guests{" "}
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Guests must agree to your house rules before they book.
        </span>
      </div> */}
      {/* <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div> */}
     
      {/* <div className="space-y-8">
       
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            General amenities
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Smoking", "Do", "Do not allow")}
            {renderRadio("Smoking", "Allow", "Allow", true)}
            {renderRadio("Smoking", "Charge", "Charge")}
          </div>
        </div>

       
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Pet
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Pet", "Do", "Do not allow")}
            {renderRadio("Pet", "Allow", "Allow", true)}
            {renderRadio("Pet", "Charge", "Charge")}
          </div>
        </div>

      
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Party organizing
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Partyorganizing", "Do", "Do not allow")}
            {renderRadio("Partyorganizing", "Allow", "Allow", true)}
            {renderRadio("Partyorganizing", "Charge", "Charge")}
          </div>
        </div>

       
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Cooking
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Cooking", "Do", "Do not allow")}
            {renderRadio("Cooking", "Allow", "Allow", true)}
            {renderRadio("Cooking", "Charge", "Charge")}
          </div>
        </div>

        
        <div className=" border-b border-neutral-200 dark:border-neutral-700"></div>
        <span className="block text-lg font-semibold">Additional rules</span>
        <div className="flow-root">
          <div className="-my-3 divide-y divide-neutral-100 dark:divide-neutral-800">
            {renderNoInclude("No smoking in common areas")}
            {renderNoInclude("Do not wear shoes/shoes in the house")}
            {renderNoInclude("No cooking in the bedroom")}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5">
          <Input className="!h-full" placeholder="No smoking..." />
          <ButtonPrimary className="flex-shrink-0">
            <i className="text-xl las la-plus"></i>
            <span className="ml-3">Add tag</span>
          </ButtonPrimary>
        </div>
      </div> */}
    </>
  );
};

export default PageAddListing5;
