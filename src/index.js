import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./pages/Navbar";
import Product from "./pages/Product";
import OnSale from "./pages/OnSale";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import { MyProvider } from "./Store/Store";

// import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="product" element={<Product />} />
        <Route path="onsale" element={<OnSale />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </MyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
