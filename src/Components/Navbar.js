import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import themeLightIcon from "./assets/brightness.png"; 
import themeDarkIcon from "./assets/darkness.png";

const Navbar = (props) => {
    const location = useLocation();
    const Color = props.mode === "light" ? "black" : "white";
    const themeIcon = props.mode === "dark" ? themeLightIcon : themeDarkIcon;

    return (
        <nav id="home">
            <div className='logo' style={{ color: Color }}>Prasad</div>
            <div>
                <ul className="nav-links">
                    {[
                        { path: "/", label: "Home" },
                        { path: "/education", label: "Education" },
                        { path: "/skills", label: "Skills" },
                        { path: "/project", label: "Projects" },
                        { path: "/experience", label: "Experience" },
                        { path: "/about", label: "About" },
                        { path: "/contact", label: "Contact" }
                    ].map((item) => (
                        <li key={item.path} className={`nav-item ${location.pathname === item.path ? "active" : ""}`}>
                            <Link className="nav-link" to={item.path} style={{ color: Color }}>{item.label}</Link>
                        </li>
                    ))}

                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input d-none" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="custom-toggle" htmlFor="flexSwitchCheckDefault"></label>
                        <label className="form-check-label ms-2" htmlFor="flexSwitchCheckDefault">
                            <img src={themeIcon} alt="Theme Toggle Icon" className="icon" />
                        </label>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
