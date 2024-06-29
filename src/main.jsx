import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details.jsx";
import { TmaProvider } from "./components/tma/provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TmaProvider>
    {/* <RouterProvider router={router} /> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
    </TmaProvider>
  </React.StrictMode>
);
