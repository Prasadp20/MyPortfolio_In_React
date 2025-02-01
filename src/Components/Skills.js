import React from "react";
import './Skills.css';

// Import the images
import checkmark from "./assets/checkmark.png";

const Skills = (props) => {

    const Color = props.mode === "light" ? "black" : "white";
    const bgColor = props.mode === "light" ? "white" : "black";

    return (
        <>
            <section id="experience">
                <p class="section__text__p1" style={{color: Color}}>Explore My</p>
                <h1 class="title" style={{color: Color}}>Skills</h1>
                <div class="experience-details-container">
                    <div class="about-containers">
                        <div class="details-container" style={{ backgroundColor: bgColor }}>
                            <h2 class="experience-sub-title" style={{color: Color}}>Programming Languages</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>C</h5>
                                        <p style={{color: Color}}>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>C++</h5>
                                        <p style={{color: Color}}>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>C# .Net</h5>
                                        <p style={{color: Color}}>Expert</p>
                                    </div>
                                </article>
                            </div>

                            <h2 class="experience-sub-title" style={{color: Color}}>API & Unit Testing</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>XUnit Framework</h5>
                                        <p style={{color: Color}}>Expert</p>
                                    </div>
                                </article>
                            </div>

                            <h2 class="experience-sub-title" style={{color: Color}}>Databases</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>MS SQL Srver</h5>
                                        <p style={{color: Color}}>Expert</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>MySQL</h5>
                                        <p style={{color: Color}}>Expert</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>MongoDB</h5>
                                        <p style={{color: Color}}>Expert</p>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div class="details-container" style={{ backgroundColor: bgColor }}>
                            <h2 class="experience-sub-title" style={{color: Color}}>Web Development</h2>
                            <div class="article-container">

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>HTML5</h5>
                                        <p style={{color: Color}}>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>CSS3</h5>
                                        <p style={{color: Color}}>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>Bootstrap</h5>
                                        <p style={{color: Color}}>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>Javascript</h5>
                                        <p style={{color: Color}}>Intermediate</p>
                                    </div>
                                </article>
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>ReactJs</h5>
                                        <p style={{color: Color}}>Expert</p>
                                    </div>
                                </article>

                            </div>
                            <h2 class="experience-sub-title" style={{color: Color}}>Version Control</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div>
                                        <h5 style={{color: Color}}>GitHub</h5>
                                        <p style={{color: Color}}>Expert</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;

