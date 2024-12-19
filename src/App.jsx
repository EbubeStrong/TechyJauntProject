import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Home from "./pages/homePage/index.jsx"
import AboutHome from "./components/aboutHome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<LandingPage />} />
        <Route path="/login" element={<LandingPage />} />
        <Route path="/about" element={<Home />} />
        <Route path="/about/:id" element={<AboutHome />} />
      </Routes>
    </Router>
  );
}
