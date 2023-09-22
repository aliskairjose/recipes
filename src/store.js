import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counter/counterSlice'
import paramsReducer from './features/params/paramsSlice'

export default configureStore({
  reducer: {
    recipe: paramsReducer
  },
})