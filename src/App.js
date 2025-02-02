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
import { useState } from "react";
import Footer from "./Components/Footer";
import Alert from "./Components/Alert";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // Function to show alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // function toggle between light and dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home showAlert={showAlert} mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/skills" element={<Skills mode={mode} />} />
        <Route path="/experience" element={<Experience mode={mode} />} />
        <Route path="/contact" element={<Contact mode={mode} />} />
        <Route path="/project" element={<Project mode={mode} />} />
        <Route path="/education" element={<Education mode={mode} />} />
      </Routes>
      <Footer mode={mode} />
    </Router>
  );
}

export default App;
