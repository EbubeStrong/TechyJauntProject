import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Home from "./pages/homePage/index.jsx";
import AboutHome from "./components/aboutHome";
import HomePage from "./components/homePage";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="spinner-container">
          {/* Spinner */}
          <div className="spinner"></div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<LandingPage />} />
          <Route path="/login" element={<LandingPage />} />
          <Route path="/about" element={<Home />} />
          <Route path="/about/:id" element={<AboutHome />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      )}
    </Router>
  );
}
