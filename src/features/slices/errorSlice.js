import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    isError: false
  },
  reducers: {
    addResponseError: (state, action) =>{state.isError = action.payload}
  },
});

export const { addResponseError} = errorSlice.actions;
export default errorSlice.reducer;
