import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import TotalApps from "../components/AllApps/TotalApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";
import Loading from "../pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        index:true,
        loader:()=>fetch('apps.json'),
        path:"/",
        Component:Home
      },
      {
        path:'/Apps',
        loader:()=>fetch('apps.json'),
        Component:TotalApps
      },
      {
        path:'/details/:id',
        loader:()=>fetch('apps.json'),
        Component:AppDetails
      },
      {
        path:'/Installation',
        loader:()=>fetch('apps.json'),
        Component:Installation
      },
      {
        path:'/loading',
        Component:Loading
      }
    ]
  },
]);