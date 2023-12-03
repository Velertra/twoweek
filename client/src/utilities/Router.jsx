import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import FullStats from "../pages/FullStats";
import ErrorPage from "../pages/error-page";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "fullstats",
      element: <FullStats />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;