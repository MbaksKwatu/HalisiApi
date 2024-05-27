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
import { BsPersonAdd,BsPersonCheck  } from "react-icons/bs";
import { HiOutlineArrowDownOnSquare } from "react-icons/hi2";
import { BiArrowFromBottom } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { getSLIs, getProfileStats } from "@/redux/slices/sliceActions";
import Link from "next/link";
import Header from "./Header";
import useAuth from '@/hooks/useAuth'
import { ClipLoader, BarLoader } from 'react-spinners';

const Sliprofiles = () => {
  useAuth();
  const profileRef = useRef();
  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer)
  const slis = useSelector(state => state.customer?.slis)
  const stats = useSelector(state => state.customer?.stats)
  

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [statusFilter, setStatusFilter] = useState([])

  const resultsPerPage = 10;
  const totalResults = slis?.metadata?.total;

  function onPageChange(p) {
    setPage(p);
  }

  const handleFilter1 = () => {
    setStatusFilter('PENDING')
  }
  const handleFilter2 = () => {
    setStatusFilter('ACCEPTED')
  }

  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    dispatch(getSLIs({page,statusFilter}))
    dispatch(getProfileStats())
  }, [page,statusFilter]);

  return (
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100 ">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen  lg:block w-80">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:space-y-4">
            <Header/>
            
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
              <h1 className="text-xl font-semibold text-gray-800 ">
                SLI Profiles
              </h1>

              <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                <div className="flex items-center w-full space-x-4">
                  <div className="w-1/2 ">
                    <div className="relative w-full px-4 py-6 bg-teal-50 rounded-md shadow-lg ">
                      <p className="text-md font-semibold text-gray-600 ">{stats[0]?.count ? stats[0]?.count : 0 }</p>
                      <p className="text-xl font-bold text-black "> New Profiles</p>
                      {/* <p className="text-sm text-gray-400">
                        View all 
                      </p> */}
                      <span className="absolute hidden lg:flex  p-4 border border-cyan-500  rounded-md top-4 right-4">
                        <BsPersonAdd className="text-cyan-500 h6 w-6" />
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-green-100 rounded-md shadow-lg ">
                      <p className="text-md font-bold text-black ">{stats[2]?.count ? stats[2]?.count : 0 }</p>
                      <p className="text-xl font-bold text-black ">Completed</p>
                      {/* <p className="text-sm text-gray-400">
                        View all 
                      </p> */}
                      <span className="absolute hidden lg:flex  p-4 border border-purple-500  rounded-md top-4 right-4">
                        <BsPersonCheck  className="text-purple-500 h5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    {/* <div className="relative w-full px-4 py-6 bg-orange-200 rounded-md shadow-lg ">
                      <p className="text-md font-bold text-black ">SLI Profiles</p>
                      <p className="text-xl font-bold text-black ">0</p>
                      <p className="text-sm text-gray-400">
                        View all SLI profiles
                      </p>
                      <span className="absolute hidden lg:flex  p-4 border border-teal-500 rounded-md top-2 right-4">
                        <TbPhotoCheck className="text-teal-500 h5 w-5" />
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
              <div className="inline-flex space-x-2">
                <LuFileSpreadsheet className="w-6 h-6 text-yellow-500" />
                <h1 className="text-xl font-bold text-gray-800 ">SLI List</h1>
              </div>
              <div className="inline-flex space-x-4 mb-2">
                <button onClick={handleFilter1} className="flex space-x-2  bg-teal-50 text-teal-400 px-2 rounded-lg py-2">
                  <HiOutlineArrowDownOnSquare className="w-5 h-5"/>
                 <p className="">Unrated</p>
                </button>
                   
                <button onClick={handleFilter2} className="flex space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-lg">
                  <BiArrowFromBottom className="w-5 h-5"/>
                <p className="">Completed</p>
                </button>
                    
              </div>

              </div>
              <TableContainer>
                <Table>
                  <TableHeader>
                    <tr>
                     <TableCell>Name</TableCell>
                      <TableCell>Level of education</TableCell>
                      <TableCell>County</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Action</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {slis?.data?.length > 0 ? (
                      <>
                      {slis?.data?.map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>
                        <div className="flex items-center text-sm">
                            <div>
                              <a href={`/panel/sli-profiles/${user.ID}`} className="font-semibold hover:underline decoration-orange-500">{user?.name}</a>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                        <span className="text-sm"> {user?.levelOfEducation}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm capitalize"> {user.county}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm"> {user.gender}</span>
                        </TableCell>
                       
                        <TableCell>
                          <span className="text-sm">
                            {new Date(user.createdAT).toLocaleDateString()}
                          </span>
                        </TableCell>
                        <TableCell>
                          {user.status == 'PENDING' ? (
                            <Link href={`/panel/add-ratings/1?id=${user.ID}`} >
                            <Badge className="hover:underline decoration-orange-500" type={'primary'}>{'Rate' }</Badge>
                            </Link>
                            
                          ):
                          <Badge type={'success'}>{'Completed'}</Badge>
                          }
                          
                        </TableCell>
                      </TableRow>
                    ))}
                      </>
                    ): 
                    customer?.loading ?   <BarLoader color='yellow'  /> : <p className="ml-3">No data found</p>
                    }
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

export default Sliprofiles;
