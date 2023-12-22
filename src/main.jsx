import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AuthProvider from "./Components/Provider/AuthProvider";
import Dasboard from "./Components/Dashboard/Dashboar";
import Task from "./Components/Dashboard/Task/Task";
import Profile from "./Components/Dashboard/Profile/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllTask from "./Components/Dashboard/AllTask/AllTask";
import ErrorPage from "./Components/Error/ErrorPage";
import PrivateRoute from "./Components/Private/PrivateRoute";
import Users from "./Components/Users/Users";
import About from "./Components/About/About";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "dashboard",
    element:<PrivateRoute> <Dasboard></Dasboard></PrivateRoute>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "task",
        element: <Task></Task>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      
      {
        path: "allTAsk",
        element: <AllTask></AllTask>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
