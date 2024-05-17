import {  configureStore } from '@reduxjs/toolkit'

import customerslice from "./slices/userSlice";
const store = configureStore({
      reducer: {customerslice}
})

export default store;