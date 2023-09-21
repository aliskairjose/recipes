import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
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