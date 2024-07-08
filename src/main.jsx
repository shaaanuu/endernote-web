import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ErrorPage } from "./components/error_page/error_page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "app",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
