import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../pages/Projects";
import Stories from "../pages/Stories";
import Project from "../components/molecules/Project";
import Epic from "../components/molecules/Epic";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import ProtectedRoute from "../components/molecules/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",  // Primera ruta
    element: <div><ProtectedRoute/><App /></div>,
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
    element: <div><ProtectedRoute/><Project /></div>, // Project page, Projects component not shown
  },

  {
    path: "/my-projects/:n/:m",
    element: <div><ProtectedRoute/><Epic /></div>, // Project page, Projects component not shown
  },

  {
    path: "/settings",
    element: <div><ProtectedRoute/><h1>Settings</h1></div>,
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
