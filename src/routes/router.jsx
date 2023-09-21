import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cocktails  from "../pages/Cocktails";
import ErrorPage from "../pages/ErrorPage";
import Meals from "../pages/Meals";

const baseUrl = '/recipes'

const router = createBrowserRouter([
  {
    path: baseUrl,
    // element: <Home />
    element: <Meals />
  },
  {
    path:  `${baseUrl}/cocktails`,
    element: <Cocktails />
  },
  {
    path: `${baseUrl}/meals`,
    element: <Meals />
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;