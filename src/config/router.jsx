import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../pages/Projects";
import Stories from "../pages/Stories";

export const router = createBrowserRouter([
  {
    path: "/home",  // Primera ruta
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
    path: "/settings",  // Primera ruta
    element: <div><h1>Settings</h1></div>,
  },


]);
