import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import for routing

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
