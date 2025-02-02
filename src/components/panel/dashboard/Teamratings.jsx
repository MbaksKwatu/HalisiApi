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


import { useDispatch, useSelector } from 'react-redux';
import { getSLIRatingStats , getSLIRatings } from "@/redux/slices/sliceActions";
import Header from "./Header";
import useAuth from '@/hooks/useAuth'

const TeamRatings = () => {
  useAuth();
  const profileRef = useRef();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.customer);
  const token = user?.accessToken
  const stats = useSelector(state => state.customer?.ratingstats);
  const ratings = useSelector(state => state.customer?.ratings);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const resultsPerPage = 10;
  const totalResults = ratings?.metadata?.total;

  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    dispatch(getSLIRatingStats({token}))
    dispatch(getSLIRatings({page, token}))
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

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
                Team Ratings
              </h1>

              <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                <div className="flex items-center w-full space-x-4">
                  
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-purple-100 rounded-md shadow-lg ">
                      <p className="text-md font-bold text-gray-500 ">Individual Rating</p>
                      <p className="text-xl font-bold text-black ">{stats?.performanceScore}%</p>
                      
                      <span className="absolute hidden lg:flex  rounded-md top-2 right-4">
                      <div class="relative size-20 text-purple-400 ">
                        <svg class="size-full" width="38" height="38" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                         
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 " stroke-width="2"></circle>
                         
                          <g class="origin-center -rotate-90 transform">
                            <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-purple-400  " stroke-width="2" stroke-dasharray="100" stroke-dashoffset={100 - stats?.performanceScore}></circle>
                          </g>
                        </svg>
                      </div>
                      
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="relative w-full px-4 py-6 bg-blue-100 rounded-md shadow-lg ">
                      <p className="text-md font-bold text-gray-500 ">Overall Rating</p>
                      <p className="text-xl font-bold text-black ">{stats?.rating}%</p>
                     
                      <span className="absolute hidden lg:flex  rounded-md top-2 right-4">
                      <div class="relative size-20 text-blue-400 ">
                        <svg class="size-full" width="38" height="38" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                         
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 " stroke-width="2"></circle>
                         
                          <g class="origin-center -rotate-90 transform">
                            <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-400  " stroke-width="2" stroke-dasharray="100" stroke-dashoffset={100 - stats?.rating}></circle>
                          </g>
                        </svg>
                      </div>
                        {/* <TbPhotoCheck className="text-teal-500 h5 w-5" /> */}
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2 ">
                    
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
              
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
                    {ratings?.data?.map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <div>
                              <p className="font-semibold">{user.name}</p>
                              
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm"> {user.panelScore}%</span>
                        </TableCell>
                        
                        <TableCell>
                          <Badge type={user?.status == 'ACCEPTED' ? 'success' : user?.status == 'ACCEPTED_TRAINING' ? 'neutral' : 'warning' }>
                            {user?.status == 'ACCEPTED_TRAINING' ? 'TRAINING' : user?.status}
                            </Badge>
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
