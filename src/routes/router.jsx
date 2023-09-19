import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cocktails  from "../pages/cocktails/Cocktails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/recipes",
    element: <Home />
  },
  {
    path: "/recipes/cocktails",
    element: <Cocktails />
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;