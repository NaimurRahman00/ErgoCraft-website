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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Home2></Home2>,
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
      },
      {
        path: "/addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
      {
        path: "/viewDetais",
        element: <ViewDetails></ViewDetails>
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
