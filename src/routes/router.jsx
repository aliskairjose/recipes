import App from "../App";
import RecipeDetail from "../pages/RecipeDetail";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Recipe from "../pages/Recipe";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/recipes" element={<App />}>
      <Route exact path="/recipes" element={<Recipe />} />
      <Route exact path="/recipes/detail/:id" element={<RecipeDetail />} />
      <Route exact path="*" element={<ErrorPage />}></Route>
    </Route>
  )
);

export default router;
