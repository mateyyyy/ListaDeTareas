import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../pages/Projects";
import Stories from "../pages/Stories";
import Project from "../components/molecules/Project";
import Epic from "../components/molecules/Epic";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",  // Primera ruta
    element: <div><App /></div>,
    children: [
      {
        path: "my-projects",
        element: <Projects />,
      },
      {
        path: "my-stories",
        element: <Stories />,
      },
    ],
  },

  {
    path: "/my-projects/:n",
    element: <Project />, // Project page, Projects component not shown
  },

  {
    path: "/my-projects/:n/:m",
    element: <Epic />, // Project page, Projects component not shown
  },

  {
    path: "/settings",
    element: <div><h1>Settings</h1></div>,
  },

  {
    path: "/home",
    element: <Navigate to="/" />,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },

]);
