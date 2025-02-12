import * as React from "react";
import * as ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './style.css'
import App from "./App";
import ProjectAll from "./components/ProjectAll";
import Hero from "./components/Hero";
import Certificate from "./components/Certificate";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element:<Hero />,
      },
      {
        path: "/project/all",
        element:<ProjectAll/>,
      },
      {
        path: "/mycertificate",
        element:<Certificate/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
