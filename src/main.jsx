import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { StateContextProvider } from "./contexts/StateContextProvider.jsx";
import router from "./components/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContextProvider>
      <RouterProvider router={router} />
    </StateContextProvider>
  </React.StrictMode>
);
