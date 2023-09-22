import { configureStore } from '@reduxjs/toolkit'
import paramsReducer from './features/slices/paramsSlice'
import loadingSlice from './features/slices/loadingSlice'

export default configureStore({
  reducer: {
    recipe: paramsReducer, 
    loading: loadingSlice
  },
})