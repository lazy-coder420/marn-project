import { configureStore } from '@reduxjs/toolkit'
import totalProductsReducer from './createSlice'

export const store = configureStore({
  reducer: {
    TOTALProducts: totalProductsReducer,
  },
})

export default store
