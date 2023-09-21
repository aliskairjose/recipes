import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Meals from "../pages/Meals";

const baseUrl = '/recipes'

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <Meals />
  },
  {
    path: "/",
    element: <Meals />,
    errorElement: <ErrorPage />,
  },
]);

export default router;