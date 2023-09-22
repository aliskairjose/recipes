import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "params",
  initialState: {
    params: '',
    recipes: {}
  },
  reducers: {
    addParams: (state, action) => {state.params = action.payload},
    addRecipes: (state, action) => {state.recipes = action.payload}
  },
});

export const { addParams, addRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
