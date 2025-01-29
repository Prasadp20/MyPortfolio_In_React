import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <nav>
                    <div className="nav-links-container">
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/experience">Experience</Link></li>
                            <li><Link to="/project">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <p>Copyright &#169; 2025 Prasad Pathak. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;
