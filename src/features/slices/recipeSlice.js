import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    params: {},
    recipes: {},
    recipe: {},
    error: false
  },
  reducers: {
    addParams: (state, action) => {state.params = action.payload},
    addRecipes: (state, action) => {state.recipes = action.payload},
    addRecipe: (state, action) => {state.recipe = action.payload},
    addError: (state, action) =>{state.error = action.payload}
  },
});

export const { addParams, addRecipes, addRecipe, addError} = recipeSlice.actions;
export default recipeSlice.reducer;
