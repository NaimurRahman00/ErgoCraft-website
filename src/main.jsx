import React from "react";
import ReactDOM from "react-dom/client";
import AllItem from "../src/Page/AllItem.jsx";
import AddItem from "../src/Page/AddItem.jsx";
import MyList from "../src/Page/MyList.jsx";
import Login from "../src/Page/Login.jsx"
import Register from "../src/Page/Register.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Page/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
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
    ]
  },
  {
    path:"/login",
    element: <Login></Login>
  },
  {
    path:"/register",
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
