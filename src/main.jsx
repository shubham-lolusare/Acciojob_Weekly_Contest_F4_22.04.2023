import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import ErrorPage from "./pages/error";
import App from "./pages/app";
import "./index.css";
import { loader as profileLoader } from "./pages/profile";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Login />} />
      <Route path="profile" element={<Profile />} loader={profileLoader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
