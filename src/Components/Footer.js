import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {

    const Color = props.mode === "light" ? "black" : "white";

    return (
        <div>
            <footer>
                <nav>
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li><Link to="/" style={{color: Color}}>Home</Link></li>
                            <li><Link to="/education" style={{color: Color}}>Education</Link></li>
                            <li><Link to="/skills" style={{color: Color}}>Skills</Link></li>
                            <li><Link to="/project" style={{color: Color}}>Projects</Link></li>
                            <li><Link to="/experience" style={{color: Color}}>Experience</Link></li>
                            <li><Link to="/about" style={{color: Color}}>About</Link></li>
                            <li><Link to="/contact" style={{color: Color}}>Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <p style={{ color: Color }}>Copyright &#169; 2025 <strong>Prasad Pathak</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;

