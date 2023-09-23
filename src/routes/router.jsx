import RecipeDetail from "../pages/RecipeDetail";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/recipes/" element={<App />} />
      <Route exact path="/recipes/detail/:id" element={<RecipeDetail />} />
      <Route exact path="*" element={<ErrorPage />}></Route>
    </>
  )
);

export default router;
