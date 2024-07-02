import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AddEvent from './components/AddEvent/AddEvent'
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details.jsx";
import { TmaProvider } from "./components/tma/provider.jsx";
import { WalletProvider } from "./components/wallet/provider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TmaProvider>
      <WalletProvider>

    {/* <RouterProvider router={router} /> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/add-event" element={<AddEvent/>}/>
      </Routes>
    </Router>
    </WalletProvider>
    </TmaProvider>
  </React.StrictMode>
);
