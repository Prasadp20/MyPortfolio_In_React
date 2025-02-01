import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

// Import the images
import themeLightIcon from "./assets/brightness.png"; // 🌙 Icon for dark mode
import themeDarkIcon from "./assets/darkness.png"; // ☀️ Icon for light mode

const Navbar = (props) => {

    const Color = props.mode === "light" ? "black" : "white";
    const themeIcon = props.mode === "dark" ? themeLightIcon : themeDarkIcon;
    return (
        <>
            <nav id="home">
                <div class='logo' style={{ color: Color }}>Prasad</div>
                <div>
                    <ul class="nav-links">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/"
                                style={{ color: Color }}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/skills" style={{ color: Color }}>Skills</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/experience" style={{ color: Color }}>Experience</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/project" style={{ color: Color }}>Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about" style={{ color: Color }}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/contact" style={{ color: Color }}>Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/education" style={{ color: Color }}>Education</Link>
                        </li>
                        {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Theme</label>
                        </div> */}


                        {/* Custom Toggle Button */}
                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input
                                className="form-check-input d-none"
                                onClick={props.toggleMode}
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                            />

                            <label className="custom-toggle" htmlFor="flexSwitchCheckDefault"></label>

                            <label className="form-check-label ms-2" htmlFor="flexSwitchCheckDefault">
                                <img src={themeIcon} alt="Theme Toggle Icon" className="icon" />
                            </label>
                        </div>



                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;