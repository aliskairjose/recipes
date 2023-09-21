import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Meals from "../pages/Meals";
import App from "../App";

const baseUrl = '/recipes'

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App />
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default router;