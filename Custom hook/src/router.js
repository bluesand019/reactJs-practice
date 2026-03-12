import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"


import React from 'react'

export const router = createBrowserRouter([
    {
        path: "/", element: <Navbar />,
        children: [
            {index: true, element: <Home/>},
            {path: "page1", element: <Page1/>},
            {path: "page2", element: <Page2/>},
            {path: "page3", element: <Page3/>},
        ]
    }
])
