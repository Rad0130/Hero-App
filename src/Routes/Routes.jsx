import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorElement from "../pages/ErrorElement/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        index:true,
        path:"/",
        Component:Home
      }
    ]
  },
]);