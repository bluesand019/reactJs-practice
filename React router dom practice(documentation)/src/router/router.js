import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Root from "../pages/SidebarLayout";
import Note from "../Note";
import PostList from "../pages/PostList";
import ErrorPage from "../pages/ErrorPage";
import PostDetails from "../pages/PostDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/notes", element: <Note /> },
      {path: "/posts", element: <PostList/>},
      {path: "/posts/:postID", element: <PostDetails/>},
    ],
  },
]);
