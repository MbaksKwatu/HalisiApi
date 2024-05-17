"use client";
import React, { useState, useEffect, useRef } from "react";
import response from "@/utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";
import Sidebar from "./Sidebar";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsEnvelopePaper } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { TbPhotoCheck } from "react-icons/tb";

const TeamRatings = () => {
  const profileRef = useRef();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isProfileActive, setIsProfileActive] = useState(false);

  const resultsPerPage = 10;
  const totalResults = response.length;

  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen  lg:block w-80">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <header className="z-40 flex items-center justify-between w-full h-16">
              <div className="block ml-6 lg:hidden">
                <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
                  <svg
                    width="20"
                    height="20"
                    className="text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
              <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                <div className="relative flex items-center justify-end w-full p-1 space-x-4">
                  <button className="flex items-center p-2 text-gray-800 bg-yellow-500 rounded-md shadow hover:text-gray-700 text-md">
                    Logout
                  </button>
                  <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="https://plus.unsplash.com/premium_photo-1664303232497-69fd12425fe1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <button
                    ref={profileRef}
                    className="flex items-center text-gray-500 dark:text-white text-md"
                    onClick={() => setIsProfileActive(!isProfileActive)}
                  >
                    Samm
                    <svg
                      width="20"
                      height="20"
                      className="ml-2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                    </svg>
                  </button>
                  {isProfileActive ? (
                    <div className="absolute z-10 top-12 right-0 w-64 rounded-lg bg-white shadow-md border text-sm text-gray-600">
                      <div className="p-2 text-left">
                        <span className="block text-gray-500/80 p-2">
                          {"user@gmail.com"}
                        </span>
                        <a
                          href="/profile"
                          className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                        >
                          Profile
                        </a>

                        <button className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </header>
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
              <h1 className="text-2xl font-semibold text-gray-800 ">
                Overview
              </h1>

              <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                <div className="flex items-center w-full space-x-4">
                  <div className="w-1/2 ">
                    <div className="relative w-full px-4 py-6 bg-teal-50 rounded-md shadow-lg ">
                      <p className="text-md font-bold text-gray-500 ">Maximum SLI Score </p>
                      <p className="text-xl font-bold text-cyan-300 ">40</p>
                      {/* <p className="text-sm text-gray-400">
                        View all Upcoming Interviews
                      </p> */}
                      <span className="absolute hidden lg:flex  p-4 border border-cyan-500  rounded-md top-4 right-4">
                        <BsEnvelopePaper className="text-cyan-500 h5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-purple-100 rounded-md shadow-lg ">
                      <p className="text-md font-bold text-gray-500 ">Performance Score</p>
                      <p className="text-xl font-bold text-black ">70</p>
                      {/* <p className="text-sm text-gray-400">
                        View all Rating Process
                      </p> */}
                      <span className="absolute hidden lg:flex  p-4 border border-purple-500  rounded-md top-4 right-4">
                        <MdLockOutline className="text-purple-500 h5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-orange-200 rounded-md shadow-lg ">
                      <p className="text-md font-bold text-gray-500 ">Rating</p>
                      <p className="text-xl font-bold text-black ">Pass</p>
                      {/* <p className="text-sm text-gray-400">
                        View all SLI profiles
                      </p> */}
                      <span className="absolute hidden lg:flex  p-4 border border-teal-500 rounded-md top-2 right-4">
                        <TbPhotoCheck className="text-teal-500 h5 w-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                {/* <LuFileSpreadsheet className="w-6 h-6 text-yellow-500" /> */}
                <h1 className="text-xl font-bold text-gray-800 ">Rated Profiles</h1>
              </div>

              <TableContainer>
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>SLI Names</TableCell>
                      <TableCell>Performance SLI Score</TableCell>
                      
                      <TableCell>SLI Rating</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {data.map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{user.name}</p>
                              
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm"> {user.job}</span>
                        </TableCell>
                        
                        <TableCell>
                          <Badge type={user.status}>{user.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TableFooter>
                  <Pagination
                    totalResults={totalResults}
                    resultsPerPage={resultsPerPage}
                    label="Table navigation"
                    onChange={onPageChange}
                  />
                </TableFooter>
              </TableContainer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TeamRatings;
