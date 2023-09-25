import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageA from "./page-a";
import PageB from "./page-b";
import PageC from "./page-c";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "list",
    element: <PageA />,
  },
  {
    path: "list/:id",
    element: <PageB />,
  },
  {
    path: "list/create",
    element: <PageC />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
