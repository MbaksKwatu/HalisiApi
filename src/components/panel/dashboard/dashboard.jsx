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
import Header from "./Header"
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsEnvelopePaper } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { TbPhotoCheck } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { getSLIs, getDashboardStats } from "@/redux/slices/sliceActions";
import useAuth from '@/hooks/useAuth'



const Dashboard = () => {
  useAuth();
  const profileRef = useRef();
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.customer);
  const slis = useSelector(state => state.customer?.slis)
  const stats = useSelector(state => state.customer?.dstats)
 
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isProfileActive, setIsProfileActive] = useState(false);

  const resultsPerPage = 10;
  const totalResults = slis?.metadata?.total;

  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    dispatch(getSLIs({page}))
    dispatch(getDashboardStats())
  }, [page]);

  return (
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100 ">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen  lg:block w-80">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:space-y-4 ">
            <Header/>
            
            <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
              <h1 className="text-xl font-semibold text-gray-800 ">
                Overview
              </h1>

              <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                <div className="flex items-center w-full space-x-4">
                  <div className="w-1/2 ">
                    <div className="relative w-full px-4 py-6 bg-teal-50 rounded-md shadow-lg ">
                      <p className="text-md font-bold text-black ">Interviews</p>
                      <p className="text-xl font-bold text-black ">{stats?.upcoming} Upcoming</p>
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
                      <p className="text-md font-bold text-black ">Resources</p>
                      <p className="text-xl font-bold text-black ">Files</p>
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
                      <p className="text-md font-bold text-black ">SLI Profiles</p>
                      <p className="text-xl font-bold text-black ">{stats?.sliProfiles}</p>
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
                <LuFileSpreadsheet className="w-6 h-6 text-yellow-500" />
                <h1 className="text-xl font-bold text-gray-800 ">SLI List</h1>
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
                      <TableCell>Status</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
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
                          <span className="text-sm capitalize"> {user?.county}</span>
                        </TableCell>
                        <TableCell>
                          <Badge type={user?.status}>{user.gender}</Badge>
                        </TableCell>
                       
                        <TableCell>
                          <span className="text-sm">
                            {new Date(user?.createdAT).toLocaleDateString()}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge type={user?.status == 'PENDING' ? 'primary' : user?.status == 'REJECTED' ? 'warning' :'success' }>{user.status}</Badge>
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
