import React from 'react';
import Footer from "./Footer";
import './Project.css';

// Import the images
import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.png";
import project3 from "./assets/project-3.png";

const Project = () => {
    return (
        <div>
            <section id="projects">
                <p class="section__text__p1">Browse My Recent</p>
                <h1 class="title">Projects</h1>
                <div class="experience-details-container">
                    <div class="about-containers">

                        <div class="details-container color-container">
                            <div class="article-container">
                                <img src={project1} alt="Project 1" class="project-img" />
                            </div>
                            <h6 class="experience-sub-title project-title">Student Learning Management System</h6>
                            <div class="btn-container my-2">
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Github
                                </button>
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Live Demo
                                </button>
                            </div>
                            <p>
                                Streamlined the management of student learning activities, including course enrollment,
                                progress tracking, and resource sharing.
                            </p>

                        </div>

                        <div class="details-container color-container">
                            <div class="article-container">
                                <img src={project2} alt="Project 2" class="project-img" />
                            </div>
                            <h6 class="experience-sub-title project-title">Scarcity Management System</h6>
                            <div class="btn-container my-2">
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Github
                                </button>
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Live Demo
                                </button>
                            </div>
                            <p>
                                Contributed to the approval workflow for applications at various officer levels. Designed and
                                implemented modules for vehicle owner and driver registration, vehicle alerts management and the
                                fleet management dashboard
                            </p>
                        </div>

                        <div class="details-container color-container">
                            <div class="article-container">
                                <img src={project3} alt="Project 3" class="project-img" />
                            </div>
                            <h6 class="experience-sub-title project-title">Fleet Express</h6>
                            <div class="btn-container my-2">
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Github
                                </button>
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Live Demo
                                </button>
                            </div>
                            <p>
                                Designed and developed modules for vehicle owner and driver registration and
                                vehicle alerts management. Built the fleet management dashboard to improve
                                logistics and vehicle tracking efficiency
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        <Footer/>
        </div>
    )
}

export default Project
