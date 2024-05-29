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

  // export const fetchPanels = createAsyncThunk(
  //   'panel/fetch',
  //   async () => {
  //     return axios
  //       .get(
  //         `${baseUrl}/api/v1/council`,
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )

  export const fetchPanels = createAsyncThunk(
    'panel/fetch',
    async ({ token }) => {
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/council`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  // export const createRatings = createAsyncThunk(
  //   'panel/create/rating',
  //   async (details) => {
     
  //     return axios
  //       .post(
  //         `${baseUrl}/api/v1/council/rate`,
  //         { ...details },
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )

  export const createRatings = createAsyncThunk(
    'panel/create/rating',
    async ({ details, token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.post(
        `${baseUrl}/api/v1/council/rate`,
        { ...details },
        { ...config, withCredentials: false },
      )
      return response.data
    },
  )


  export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (details) => {
        
      return axios
        .post(
          `${baseUrl}/api/v1/auth/login`,
          { ...details },
          { withCredentials: false },
        )
        .then((res) => res.data)
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

  export const getSLIs = createAsyncThunk(
    'council/slis/fetch',
    async ({ page,statusFilter, token }) => {
      const statuss = statusFilter || ""
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/council/slis?status=${statuss}&limit=10&page=${page}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  // export const getSLIs = createAsyncThunk(
  //   'council/slis/fetch',
  //   async ({page,statusFilter}) => {
  //     const statuss = statusFilter || ""
  //     return axios
  //       .get(
  //         `${baseUrl}/api/v1/council/slis?status=${statuss}&limit=10&page=${page}`,
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )


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

  // export const getCPS = createAsyncThunk(
  //   'council/cps/fetch',
  //   async () => {
  //     return axios
  //       .get(
  //         `${baseUrl}/api/v1/cps`,
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )

  export const getCPS = createAsyncThunk(
    'council/cps/fetch',
    async ({token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/cps`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  // export const getProfileStats = createAsyncThunk(
  //   'profile/stats/fetch',
  //   async () => {
  //     return axios
  //       .get(
  //         `${baseUrl}/api/v1/council/sts`,
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )

  export const getProfileStats = createAsyncThunk(
    'profile/stats/fetch',
    async ({token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/council/sts`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  // export const getDashboardStats = createAsyncThunk(
  //   'dashboard/stats/fetch',
  //   async () => {
  //     return axios
  //       .get(
  //         `${baseUrl}/api/v1/council/dsb/stats`,
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )

  export const getDashboardStats = createAsyncThunk(
    'dashboard/stats/fetch',
    async ({token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/council/dsb/stats`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  // export const getPanelistProfile = createAsyncThunk(
  //   'panel/profile/fetch',
  //   async (id) => {
  //     return axios
  //       .get(
  //         `${baseUrl}/api/v1/users/${id}`,
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )

  export const getPanelistProfile = createAsyncThunk(
    'panel/profile/fetch',
    async ({id, token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/users/${id}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  // export const getSLIRatingStats = createAsyncThunk(
  //   'panel/sliratingstats/fetch',
  //   async () => {
  //     return axios
  //       .get(
  //         `${baseUrl}/api/v1/council/ratings/stats`,
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )

  export const getSLIRatingStats = createAsyncThunk(
    'panel/sliratingstats/fetch',
    async ({ token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/council/ratings/stats`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  // export const getSLIRatings = createAsyncThunk(
  //   'panel/sliratings/fetch',
  //   async ({page}) => {
  //     return axios
  //       .get(
  //         `${baseUrl}/api/v1/council/ratings?limit=10&page=${page}`,
  //         { withCredentials: false },
  //       )
  //       .then((res) => res.data)
  //   },
  // )

  export const getSLIRatings = createAsyncThunk(
    'panel/sliratings/fetch',
    async ({ page, token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/council/ratings?limit=10&page=${page}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
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

  export const getJob = createAsyncThunk(
    'sli/job/fetch',
    async ({ id, token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/si/slijobs/${id}`, {
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

  export const getQaStats = createAsyncThunk(
    'qa/dash/stats',
    async ({ token }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/qa/dashboard`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  export const getQaSlis = createAsyncThunk(
    'qa/slis/fetch',
    async ({page, token, statusFilter }) => {
      const statuss = statusFilter || ""
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/qa/slis?limit=10&page=${page}&status=${statuss}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  export const getQaSli = createAsyncThunk(
    'qa/sli/fetch',
    async ({ token,id }) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(`${baseUrl}/api/v1/qa/slis/${id}`, {
        ...config,
        withCredentials: true,
      })
      return response.data
    },
  )

  export const sendEvaluation = createAsyncThunk(
  'qa/evalutaion/post',
  async ({ details, token }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.patch(
      `${baseUrl}/api/v1/qa/send-evaluation`,
      { ...details },
      { ...config, withCredentials: true },
    )
    return response.data
  },
)

export const bookJob = createAsyncThunk(
  'sli/job/book',
  async ({ id,token }) => {
   
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.patch(
      `${baseUrl}/api/v1/si/slijobs/${id}/book`,
      { ...config, withCredentials: false },
    )
    return response.data
  },
)



  


 