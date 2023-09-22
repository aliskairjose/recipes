import { configureStore } from '@reduxjs/toolkit'
import paramsReducer from './features/slices/recipeSlice'
import loadingSlice from './features/slices/loadingSlice'

export default configureStore({
  reducer: {
    recipe: paramsReducer, 
    loading: loadingSlice
  },
})