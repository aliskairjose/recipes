import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false
  },
  reducers: {
    isLoading: (state, action) => {state.isLoading = action.payload},
  },
});

export const { isLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
