import React from "react";
import ReactDOM from "react-dom/client";
import AllItem from "../src/Page/AllItem.jsx";
import AddItem from "../src/Page/AddItem.jsx";
import MyList from "../src/Page/MyList.jsx";
import Login from "../src/Page/Login.jsx";
import Register from "../src/Page/Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Page/Home.jsx";
import Home2 from "./Page/Home2.jsx";
import ViewDetails from "./Page/ViewDetails.jsx";
import NotFound from "./Page/NotFound.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Home2></Home2>,
        loader: () => fetch('https://ergocraft.vercel.app/craft')
        // loader: async () => {
        //   const [sliders, data] = await Promise.all([
        //     fetch("/sliders.json"),
        //     fetch("/data.json"),
        //   ]);
        //   const slidersData = await sliders.json();
        //   const cardData = await data.json();

        //   return { slidersData, cardData };
      },
      {
        path: "/allItems",
        element: <AllItem></AllItem>,
        loader: () => fetch('https://ergocraft.vercel.app/craft')
      },
      {
        path: "/addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "/myList/",
        element: <MyList></MyList>,
        loader: () => fetch('https://ergocraft.vercel.app/craft')
      },
      {
        path: "/viewDetais",
        element: <ViewDetails></ViewDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
    loader: () => fetch("/notFound.json"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
