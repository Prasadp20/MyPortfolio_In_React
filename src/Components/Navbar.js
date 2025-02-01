import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = (props) => {

    const Color = props.mode === "light" ? "black" : "white";
    return (
        <>
            <nav id="home">
                <div class='logo' style={{color: Color}}>Prasad</div>
                <div>
                    <ul class="nav-links">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/" 
                            style={{color: Color}}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/skills" style={{color: Color}}>Skills</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/experience" style={{color: Color}}>Experience</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/project" style={{color: Color}}>Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about" style={{color: Color}}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/contact" style={{color: Color}}>Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/education" style={{color: Color}}>Education</Link>
                        </li>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Theme</label>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;