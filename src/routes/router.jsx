import RecipeDetail from "../pages/RecipeDetail";
import {
  Route,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/detail/:id",
      element: <RecipeDetail />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route exact path="/recipes/" element={<App />} />
//       <Route exact path="/recipes/detail/:id" element={<RecipeDetail />} />
//       <Route exact path="*" element={<ErrorPage />}></Route>
//     </>
//   )
// );

export default router;
