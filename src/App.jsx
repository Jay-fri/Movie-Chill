import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Tvlives from "./pages/Tvlives";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/tvlives" element={<Tvlives />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
