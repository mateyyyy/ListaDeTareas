import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../pages/Projects";
import Stories from "../pages/StoriesOfEpic";
import Project from "../pages/Project";
import Epic from "../pages/Epic";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import ProtectedRoute from "../components/molecules/ProtectedRoute";
import StoriesOfEpic from "../pages/StoriesOfEpic";
import StoriesGral from "../pages/StoriesGral";

export const router = createBrowserRouter([
  {
    path: "/", 
    element: <div><ProtectedRoute/><App /></div>,
    children: [
      {
        path: "my-projects",
        element: <Projects />,
      },
      {
        path: "my-stories",
        element: <StoriesGral />,
      },
    ],
  },

  {
    path: "/my-projects/:n",
    element: <div><ProtectedRoute/><Project /></div>,
  },

  {
    path: "my-projects/:n/:m",
    element: <div><ProtectedRoute/><Epic /></div>,
  },

  {
    path: "my-projects/:n/:m/:j",
    element: <div><ProtectedRoute/><StoriesOfEpic /></div>,
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
