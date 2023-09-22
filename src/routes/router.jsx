import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import RecipeDetail from "../pages/RecipeDetail";

const baseUrl = '/recipes'

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App />
  },
  {
    path: `${baseUrl}/detail`,
    element: <RecipeDetail />
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default router;