'use client'
import React, {useEffect, useCallback, useState} from "react";
import { useDropzone } from 'react-dropzone';
import { CloudUploadIcon, CheckIcon, XIcon, DocumentIcon } from '@heroicons/react/outline';
import { MdCancel } from "react-icons/md";
import { IoCloudUploadOutline,IoDocumentOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { getPanelistProfile } from "@/redux/slices/sliceActions";
import Header from "../Header";

const Uploadtask = () => {

  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer)
  const profile = useSelector(state => state.customer.profile)
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      progress: Math.floor(Math.random() * 100),
      status: 'uploading'
    }));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  
  useEffect(() => {
    dispatch(getPanelistProfile(customer?.user?.id))
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  
  <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Upload tasks</h1>
      <p className="text-center text-gray-500 mb-8">PDF, text, images or videos. Max 50MB each.</p>

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 bg-yellow-50 rounded-lg p-12 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <IoCloudUploadOutline className="w-12 h-12 mx-auto text-blue-500 mb-4" />
        <p className="text-gray-700">Drag & drop your files here</p>
        <p className="text-gray-500">OR</p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Browse files</button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Uploading files</h2>
        {files.map((fileWrapper, idx) => (
          <div key={idx} className="flex items-center mb-4">
            <IoDocumentOutline className="w-8 h-8 text-gray-500 mr-4" />
            <div className="flex-1">
              <p className="text-gray-700">{fileWrapper.file.name}</p>
              <div className="bg-gray-200 rounded-lg h-2 mt-2">
                <div
                  className="bg-yellow-500 h-2 rounded-lg"
                  style={{ width: `${fileWrapper.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="ml-4">
              {fileWrapper.progress === 100 ? (
                <FaCheck  className="w-6 h-6 text-green-500" />
              ) : (
                <MdCancel
                  className="w-6 h-6 text-red-500 cursor-pointer"
                  onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* <div className="flex space-x-8">
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
      </div> */}
    </div>
  );
};

export default Uploadtask;
