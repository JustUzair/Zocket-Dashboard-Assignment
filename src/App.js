import React from "react";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import TopBar from "./components/Navbar/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import Campaign from "./pages/Campaign";
import Customers from "./pages/Customers";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TopBar></TopBar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Router>
    </div>
  );
}
