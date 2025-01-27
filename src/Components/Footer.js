import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <nav>
                    <div class="nav-links-container">
                        <ul class="nav-links">
                            <li><a href="/profile">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/skills">Skills</a></li>
                            <li><a href="/experience">Experience</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <p>Copyright &#169; 2025 Prasad Pathak. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
