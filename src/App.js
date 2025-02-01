import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
