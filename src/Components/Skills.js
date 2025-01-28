import React from "react";
import Footer from './Footer';
import './Skills.css';

// Import the images
import checkmark from "./assets/checkmark.png";

const Skills = () => {
    return (
        <>
            <section id="experience">
                <p class="section__text__p1">Explore My</p>
                <h1 class="title">Skills</h1>
                <div class="experience-details-container">
                    <div class="about-containers">
                        <div class="details-container">
                            <h2 class="experience-sub-title">Programming Languages</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>C</h6>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>C++</h6>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>C# .Net</h6>
                                        <p>Expert</p>
                                    </div>
                                </article>
                            </div>

                            <h2 class="experience-sub-title">API & Unit Testing</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>XUnit Framework</h6>
                                        <p>Expert</p>
                                    </div>
                                </article>
                            </div>

                            <h2 class="experience-sub-title">Databases</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>MS SQL Srver</h6>
                                        <p>Expert</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>MySQL</h6>
                                        <p>Expert</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>MongoDB</h6>
                                        <p>Expert</p>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div class="details-container">
                            <h2 class="experience-sub-title">Web Development</h2>
                            <div class="article-container">

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>HTML5</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>CSS3</h6>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>Bootstrap</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>Javascript</h6>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>ReactJs</h6>
                                        <p>Expert</p>
                                    </div>
                                </article>

                            </div>
                            <h2 class="experience-sub-title">Version Control</h2>
                            <div class="article-container">

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h6>GitHub</h6>
                                        <p>Expert</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Skills;