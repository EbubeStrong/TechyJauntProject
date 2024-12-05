import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import AboutHome from "./pages/aboutHome";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about?id" element={<AboutHome/>}/> */}
          <Route path="/about/:id" element={<AboutHome />} />
        </Routes>
      </Router>
    </>
  );
}
