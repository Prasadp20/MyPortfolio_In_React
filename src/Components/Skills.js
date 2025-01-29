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
                                        <h5>C</h5>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>C++</h5>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>C# .Net</h5>
                                        <p>Expert</p>
                                    </div>
                                </article>
                            </div>

                            <h2 class="experience-sub-title">API & Unit Testing</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>XUnit Framework</h5>
                                        <p>Expert</p>
                                    </div>
                                </article>
                            </div>

                            <h2 class="experience-sub-title">Databases</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>MS SQL Srver</h5>
                                        <p>Expert</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>MySQL</h5>
                                        <p>Expert</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>MongoDB</h5>
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
                                        <h5>HTML5</h5>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>CSS3</h5>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>Bootstrap</h5>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>Javascript</h5>
                                        <p>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>ReactJs</h5>
                                        <p>Expert</p>
                                    </div>
                                </article>

                            </div>
                            <h2 class="experience-sub-title">Version Control</h2>
                            <div class="article-container">

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5>GitHub</h5>
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