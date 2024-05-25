import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const baseUrl = process.env.NEXT_PUBLIC_API_URL


//panel
export const createUserPanel = createAsyncThunk(
    'panel/create',
    async (details) => {
      return axios
        .post(
          `${baseUrl}/api/v1/council`,
          { ...details },
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  export const fetchPanels = createAsyncThunk(
    'panel/fetch',
    async () => {
      return axios
        .get(
          `${baseUrl}/api/v1/council`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  export const createRatings = createAsyncThunk(
    'panel/create/rating',
    async (details) => {
     
      return axios
        .post(
          `${baseUrl}/api/v1/council/rate`,
          { ...details },
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )


  // export const loginUser = createAsyncThunk(
  //   'user/loginUser',
  //   async (details) => {
        
  //     return axios
  //       .post(
  //         `${baseUrl}/api/v1/auth/login`,
  //         { ...details },
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // ) 
  
  export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (details) => {
 
      const response = await axios.post(`${baseUrl}/api/v1/auth/login`, {
        ...details ,
        withCredentials: true,
      })
      return response.data
      
    },
  )

  export const logout = createAsyncThunk(
    'user/logout',
    async () => {
      return axios
        .post(
          `${baseUrl}/logout`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  // export const getSLIs = createAsyncThunk(
  //   'council/slis/fetch',
  //   async ({  token }) => {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //     const response = await axios.get(`${baseUrl}/api/v1/council/slis`, {
  //       ...config,
  //       withCredentials: true,
  //     })
  //     return response.data
  //   },
  // )

  export const getSLIs = createAsyncThunk(
    'council/slis/fetch',
    async (statusFilter) => {
      const statuss = statusFilter || ""
      return axios
        .get(
          `${baseUrl}/api/v1/council/slis?status=${statuss}`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )


  export const getSLI = createAsyncThunk(
    'sli/fetch',
    async ({ id, token }) => {
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/si/${id}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  export const getCPS = createAsyncThunk(
    'council/cps/fetch',
    async () => {
      return axios
        .get(
          `${baseUrl}/api/v1/cps`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  export const getProfileStats = createAsyncThunk(
    'profile/stats/fetch',
    async () => {
      return axios
        .get(
          `${baseUrl}/api/v1/council/sts`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  export const getDashboardStats = createAsyncThunk(
    'dashboard/stats/fetch',
    async () => {
      return axios
        .get(
          `${baseUrl}/api/v1/council/dsb/stats`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  export const getPanelistProfile = createAsyncThunk(
    'panel/profile/fetch',
    async (id) => {
      return axios
        .get(
          `${baseUrl}/api/v1/users/${id}`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  export const getSLIRatingStats = createAsyncThunk(
    'panel/sliratingstats/fetch',
    async () => {
      return axios
        .get(
          `${baseUrl}/api/v1/council/ratings/stats`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  export const getSLIRatings = createAsyncThunk(
    'panel/sliratings/fetch',
    async () => {
      return axios
        .get(
          `${baseUrl}/api/v1/council/ratings`,
          { withCredentials: false },
        )
        .then((res) => res.data)
    },
  )

  export const getJobs = createAsyncThunk(
    'sli/jobs/fetch',
    async ({ token, statusFilter }) => {
      const statuss = statusFilter || ""
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/si/slijobs?status=${statuss}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  export const getJobsStats = createAsyncThunk(
    'sli/jobs/stats/fetch',
    async ({ token}) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/si/slijobs/stats`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  export const getTrainingStats = createAsyncThunk(
    'sli/training/stats',
    async ({ token }) => {
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/si/training/tasks/stats`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  export const getTrainingTasks = createAsyncThunk(
    'sli/training/tasks',
    async ({ token, statusFilter }) => {
      const statuss = statusFilter || ""
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/si/training/tasks?status=${statuss}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  export const getTrainingTask = createAsyncThunk(
    'sli/training/task',
    async ({ id, token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/training/${id}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )



  


 