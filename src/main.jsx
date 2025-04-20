import * as React from "react";
import * as ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './style.css'
import ProjectAll from "./pages/ProjectAll";
import Certificate from "./pages/Certificate";
import AppLayout from "./layout/AppLayout";
import Landingpage from "./pages/Landingpage";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Landingpage />,
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
