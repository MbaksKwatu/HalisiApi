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
import Sidebar from "@/components/sli/Sidebar";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsEnvelopePaper } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { TbPhotoCheck } from "react-icons/tb";
import { HiOutlineArrowDownOnSquare } from "react-icons/hi2";
import { BiArrowFromBottom } from "react-icons/bi";
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { getJobs, getJobsStats } from "@/redux/slices/sliceActions";
import useAuth from '@/hooks/useAuth'


const Dashboard = () => {
  useAuth();
  const dispatch = useDispatch()
  const profileRef = useRef();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const {user} = useSelector(state => state.customer);
  const token = user?.accessToken
  const jobs = useSelector(state => state.customer.jobs);
  const stats = useSelector(state => state.customer.jobsstats);

  const [statusFilter, setStatusFilter] = useState([])

  const handleNewFilter = () => {
    setStatusFilter('new')
  }
  const handleInProgress = () => {
    setStatusFilter('claimed')
  }



  const resultsPerPage = 10;
  const totalResults = jobs?.metadata?.total;

  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    dispatch(getJobs({token,statusFilter}))
    dispatch(getJobsStats({token}))
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
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
              <h1 className="text-2xl font-semibold text-gray-800 ">
                Overview
              </h1>

              <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                <div className="flex items-center w-full space-x-4">
                  <div className="w-1/2 ">
                    <div className="relative w-full px-4 py-6 bg-teal-50 rounded-md shadow-lg ">
                      <p className="text-xl font-bold text-black ">New</p>
                      <p className="text-xl font-bold text-black ">{stats?.new}</p>
                      
                      <span className="absolute hidden lg:flex  p-4 border border-cyan-500  rounded-md top-4 right-4">
                        <BsEnvelopePaper className="text-cyan-500 h5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-orange-100 rounded-md shadow-lg ">
                      <p className="text-xl font-bold text-black ">Booked</p>
                      <p className="text-xl font-bold text-black ">{stats?.booked}</p>
                      
                      <span className="absolute hidden lg:flex  p-4 border border-purple-500  rounded-md top-4 right-4">
                        <MdLockOutline className="text-purple-500 h5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-green-200 rounded-md shadow-lg ">
                      <p className="text-xl font-bold text-black ">Completed</p>
                      <p className="text-xl font-bold text-black ">{stats?.completedJobs}</p>
                      
                      <span className="absolute hidden lg:flex  p-4 border border-teal-500 rounded-md top-2 right-4">
                        <TbPhotoCheck className="text-teal-500 h5 w-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="flex justify-between">
              <div className="inline-flex space-x-2">
                <LuFileSpreadsheet className="w-6 h-6 text-yellow-500" />
                <h1 className="text-xl font-bold text-gray-800 ">Jobs List</h1>
              </div>
              <div className="inline-flex space-x-4 mb-2">
                <button 
                onClick={handleNewFilter}
                 className="flex space-x-2  bg-teal-50 text-teal-400 px-2 rounded-lg py-2">
                  <HiOutlineArrowDownOnSquare className="w-5 h-5"/>
                 <p className="">New</p>
                </button>
                   
                <button 
                onClick={handleInProgress} 
                className="flex space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg">
                  <MdLockOutline className="w-5 h-5"/>
                <p className="">In progress</p>
                </button>
                    
              </div>

              </div>

              <TableContainer>
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>Job Title</TableCell>
                      <TableCell>Details</TableCell>
                      <TableCell>Industry</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Mode</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {jobs?.jobs?.map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{user.description}</p>
                              
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm"> {user.description}</span>
                        </TableCell>
                        <TableCell>
                          <Badge type={user.status}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm"> {user.location}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm"> {user.mode}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {new Date(user.createdAT).toLocaleDateString()}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge type={user.status == 'COMPLETED' ? 'success': 'primary'}>{user.status}</Badge>
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

export default Dashboard;
