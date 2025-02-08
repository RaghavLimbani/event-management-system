// import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { HeroSection } from "./components/HeroFooter";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
