import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    params: {},
    recipes: {},
    recipe: {}
  },
  reducers: {
    addParams: (state, action) => {state.params = action.payload},
    addRecipes: (state, action) => {state.recipes = action.payload},
    addRecipe: (state, action) => {state.recipe = action.payload}
  },
});

export const { addParams, addRecipes, addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
