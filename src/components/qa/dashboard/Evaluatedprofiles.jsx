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
import { BsEnvelopePaper } from "react-icons/bs";


import { useDispatch, useSelector } from 'react-redux';
import { getSLIRatingStats , getQaStats , getQaSlis } from "@/redux/slices/sliceActions";
import Header from "./Header";
import useAuth from '@/hooks/useAuth'

const EvaluatedProfiles = () => {
  useAuth();
  const profileRef = useRef();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.customer);
  const token = user?.accessToken
  const stats = useSelector(state => state.customer?.qastats);
  const ratings = useSelector(state => state.customer?.qaslis);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const statusFilter = 'COMPLETED'

  const resultsPerPage = 10;
  const totalResults = ratings?.metadata?.total;

  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    dispatch(getQaStats ({token}))
    dispatch(getQaSlis({page,token, statusFilter}))
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
              <h1 className="text-2xl font-semibold text-gray-800 ">
                Overview
              </h1>

              <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                <div className="flex items-center w-full space-x-4">
                  
                <div className="w-1/2 ">
                    <div className="relative w-full px-4 py-6 bg-green-200 rounded-md shadow-lg ">
                      <p className="text-xl font-bold text-black ">Completed</p>
                      <p className="text-xl font-bold text-black ">{stats[1]?.count}</p>
                     
                      <span className="absolute hidden lg:flex  p-4 border border-cyan-500  rounded-md top-4 right-4">
                        <BsEnvelopePaper className="text-cyan-500 h5 w-5" />
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                  
                  </div>
                  <div className="w-1/2 ">
                   
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
                      <TableCell>Performance Score</TableCell>
                      <TableCell>Panel Rating</TableCell>
                      <TableCell>Evaluation</TableCell>
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
                        <Badge type={user?.status == 'PENDING' ? 'primary' : user.status == 'REJECTED' ? 'warning' : 'success'}>{user.status == 'PENDING' ? 'PENDING' : user.status == 'ACCEPTED' ? 'ACCEPTED' : user.status == 'REJECTED' ? 'REJECTED' : user.status == 'ACCEPTED_TRAINING' ? 'ACCEPTED_TRAINING' : 'PENDING'}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge type={user?.qaCheckStatus == 'PENDING' ? 'primary' : 'success'}>{user.qaCheckStatus}</Badge>
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

export default EvaluatedProfiles;
