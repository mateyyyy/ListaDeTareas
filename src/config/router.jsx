import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../pages/Projects";
import Stories from "../pages/Stories";
import Project from "../components/molecules/Project";

export const router = createBrowserRouter([
  {
    path: "/home",  // Primera ruta
    element: <div><App /></div>,
    children: [
      {
        path: "my-projects",
        element: <Projects />,
        children: [
          {
          path: "project-:n",
          element: <Project />,
        },
      ],
      },
      {
        path: "my-stories",
        element: <Stories />,
      },
    ],
  },
  {
    path: "/settings",
    element: <div><h1>Settings</h1></div>,
  },
]);
