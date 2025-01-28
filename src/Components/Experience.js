import React from 'react';
import Footer from "./Footer";
import "./Experience.css"

// Import the images
import checkmark from "./assets/checkmark.png";

const Experience = () => {
    return (
        <div>
            <section id="experience">
                <p class="section__text__p1">Explore My</p>
                <h1 class="title">Experience</h1>
                <div class="experience-details-container">
                    <div class="about-containers">
                        <div class="details-container">
                            <h2 class="experience-sub-title">Shaurya Technosoft Pvt. Ltd.</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div className='article-info'>
                                        <h4>.NET Developer</h4>
                                        <p>
                                            Company based in Pune, India. Their focus areas include Dairy, Manufacturing,
                                            Mining, Vehicle Tracking, Agricultural, Election Management. The company
                                            delivers products such as Desktop, Android Applications, and Web-Based Solutions.
                                        </p>
                                    </div>
                                </article>
                            </div>

                            <h2 class="experience-sub-title">ThinkQuotient Software Training Institute</h2>
                            <div class="article-container">
                                <article>
                                    <img src={checkmark} alt="Experience icon" class="icon" />
                                    <div className='article-info'>
                                        <h4>.NET Intern</h4>
                                        <p>
                                            THINKQUOTIENT SOFTWARE PRIVATE LIMITED has been engaged in research, design,
                                            Software Development & Training & Placement of students who want to pursue their
                                            career in IT.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 col-md-6">
                            <h2 class="experience-sub-title">ThinkQuotient Software Training Institute</h2>
                            <div className='article-info'>
                                <h4><img src={checkmark} alt="Experience icon" class="icon" />.NET Intern</h4>
                                <p>
                                    THINKQUOTIENT SOFTWARE PRIVATE LIMITED has been engaged in research, design,
                                    Software De velopment & Training & Placement of students who want to pursue their
                                    career in IT.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-5 col-lg-6">
                            <h2 class="experience-sub-title">ThinkQuotient Software Training Institute</h2>
                            <div className='article-info'>
                                <h4><img src={checkmark} alt="Experience icon" class="icon" /> .NET Intern</h4>
                                <p>
                                    THINKQUOTIENT SOFTWARE PRIVATE LIMITED has been engaged in research, design,
                                    Software Development & Training & Placement of students who want to pursue their
                                    career in IT.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Experience;
