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
import PrivateRoute from "./PrivateRoute/PrivateRoutes.jsx";
import ViewAnotherCraft from "./Page/ViewAnotherCraft.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Home2></Home2>,
        // loader: () => fetch("https://ergocraft.vercel.app/craft"),
        loader: async () => ({ 
          crafts: await fetch("https://ergocraft.vercel.app/craft").then(res => res.json()), anotherCrafts: await fetch("http://localhost:5000/anotherCraft").then(res => res.json()) 
        })
      },
      {
        path: "/allItems",
        element: <AllItem></AllItem>,
        loader: () => fetch("https://ergocraft.vercel.app/craft"),
      },
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList/",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("https://ergocraft.vercel.app/craft"),
      },
      {
        path: "/viewDetais",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewAnotherCraft/:id",
        element: <ViewAnotherCraft></ViewAnotherCraft>,
        loader: async ({ params }) => {
          const res = await fetch("http://localhost:5000/anotherCraft");
          const data = await res.json();
          return data.filter(cardData => cardData._id === params.id);
        }
      }      
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
