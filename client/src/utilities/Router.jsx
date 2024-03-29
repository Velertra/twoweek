import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import NavBar from "../components/NavBar";
import Footer from "../components/SiteFooter";

//pages
import ErrorPage from "../pages/error-page";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import SearchPlayer from "../pages/SearchPlayer";
import FriendStats from "../pages/FriendStats";
import Article from "../pages/Article";
import ItemShop, { loader as itemLoader} from "../pages/ItemShop";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <NavBar />, errorElement: <ErrorPage />,
        children: [
          { index:true, element: <MainPage />},
          { path: "about", element: <About />},
          { path: "article/:articleId", element: <Article />},
          { path: "123", element: <FriendStats />},     
          { path: "itemShop", element: <ItemShop />, loader: itemLoader},
          { path: "search/:player", element: <SearchPlayer />}
        ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
