import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            {/* <nav class="home navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="logo" to="/">Prasad</Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav-links">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/skills">Skills</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/experience">Experience</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/project">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <nav id="home">
                <div class='logo'>Prasad</div>
                <div>
                    <ul class="nav-links">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/skills">Skills</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/experience">Experience</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/project">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;