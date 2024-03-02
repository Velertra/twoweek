import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import ErrorPage from "../pages/error-page";
import MainPage from "../pages/MainPage";
import About from "../pages/About";
import NavBar from "../components/NavBar";
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
          { path: "itemShop", element: <ItemShop />, loader: itemLoader},
          { path: "search/:player", element: <SearchPlayer />},
          { path: "article/:articleId", element: <Article />},
          { path: "123", element: <FriendStats />}     
        ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
