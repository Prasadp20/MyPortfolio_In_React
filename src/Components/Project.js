import React from 'react';
import './Project.css';

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
                                <img src="./assets/project-1.png" alt="Project 1" class="project-img" />
                            </div>
                            <h3 class="experience-sub-title project-title">Student Learning Management System</h3>
                            <div class="btn-container">
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Github
                                </button>
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Live Demo
                                </button>
                                <p>
                                    Streamlined the management of student learning activities, including course enrollment,
                                    progress tracking, and resource sharing.
                                </p>
                            </div>
                        </div>

                        <div class="details-container color-container">
                            <div class="article-container">
                                <img src="./assets/project-2.png" alt="Project 2" class="project-img" />
                            </div>
                            <h3 class="experience-sub-title project-title">Scarcity Management System</h3>
                            <div class="btn-container">
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Github
                                </button>
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                                    Live Demo
                                </button>
                                <p>
                                    Contributed to the approval workflow for applications at various officer levels. Designed and
                                    implemented modules for vehicle owner and driver registration, vehicle alerts management,and the
                                    fleet management dashboard
                                </p>
                            </div>

                            <div class="details-container color-container">
                                <div class="article-container">
                                    <img src="./assets/project-3.png" alt="Project 3" class="project-img" />
                                </div>
                                <h3 class="experience-sub-title project-title">Fleet Express</h3>
                                <div class="btn-container">
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
                </div>
            </section>
        </div>
    )
}

export default Project
