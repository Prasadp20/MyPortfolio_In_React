import React from 'react';
import './Project.css';

// Import the images
import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.png";
import project3 from "./assets/project-3.png";

const Project = (props) => {

    const Color = props.mode === "light" ? "black" : "white";
    const bgColor = props.mode === "light" ? "white" : "black";
  
    return (
        <div>
            <section id="projects">
                <p class="section__text__p1" style={{color: Color}}>Browse My Recent</p>
                <h1 class="title" style={{color: Color}}>Projects</h1>
                <div class="experience-details-container">
                    <div class="about-containers">

                        <div class="details-container color-container" style={{ backgroundColor: bgColor }}>
                            <div class="article-container">
                                <img src={project1} alt="Project 1" class="project-img" />
                            </div>
                            <h6 class="experience-sub-title project-title" style={{color: Color}}>Student Learning Management System</h6>
                            <div class="btn-container my-2">
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'" style={{color: Color}}>
                                    Github
                                </button>
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'" style={{color: Color}}>
                                    Live Demo
                                </button>
                            </div>
                            <p style={{color: Color}}>
                                Streamlined the management of student learning activities, including course enrollment,
                                progress tracking, and resource sharing.
                            </p>

                        </div>

                        <div class="details-container color-container" style={{ backgroundColor: bgColor }}>
                            <div class="article-container">
                                <img src={project2} alt="Project 2" class="project-img" />
                            </div>
                            <h6 class="experience-sub-title project-title" style={{color: Color}}>Scarcity Management System</h6>
                            <div class="btn-container my-2">
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'" style={{color: Color}}>
                                    Github
                                </button>
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'" style={{color: Color}}>
                                    Live Demo
                                </button>
                            </div>
                            <p style={{color: Color}}>
                                Contributed to the approval workflow for applications at various officer levels. Designed and
                                implemented modules for vehicle owner and driver registration, vehicle alerts management and the
                                fleet management dashboard
                            </p>
                        </div>

                        <div class="details-container color-container" style={{ backgroundColor: bgColor }}>
                            <div class="article-container">
                                <img src={project3} alt="Project 3" class="project-img" />
                            </div>
                            <h6 class="experience-sub-title project-title" style={{color: Color}}>Fleet Express</h6>
                            <div class="btn-container my-2">
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'" style={{color: Color}}>
                                    Github
                                </button>
                                <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'" style={{color: Color}}>
                                    Live Demo
                                </button>
                            </div>
                            <p style={{color: Color}}>
                                Designed and developed modules for vehicle owner and driver registration and
                                vehicle alerts management. Built the fleet management dashboard to improve
                                logistics and vehicle tracking efficiency
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project
