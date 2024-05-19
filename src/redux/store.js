import {  configureStore } from '@reduxjs/toolkit'

import customerslice from "./slices/userSlice";
import ratingsReducer from './slices/ratingsSlice';
const store = configureStore({
      reducer: { 
           customer: customerslice,
           ratings: ratingsReducer
      },

})

export default store;