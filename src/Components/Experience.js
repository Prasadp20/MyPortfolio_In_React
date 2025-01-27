import React from 'react';

const Experience = () => {
    return (
        <div>
            <section id="experience">
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Shaurya Technosoft Pvt. Ltd.</h2>
                        <div className="article-container">
                            <article>
                                <div>
                                    <h3>.NET Developer</h3>
                                    <p className="company-description">
                                        Company based in Pune, India. Their focus areas include Dairy, Manufacturing,
                                        Mining, Vehicle Tracking, Agricultural, Election Management. The company
                                        delivers products such as Desktop, Android Applications, and Web-Based Solutions.
                                    </p>
                                </div>
                            </article>
                        </div>

                        <h2 className="experience-sub-title">ThinkQuotient Software Training Institute</h2>
                        <div className="article-container">
                            <article>
                                <div>
                                    <h3>.NET Intern</h3>
                                    <p className="company-description">
                                        THINKQUOTIENT SOFTWARE PRIVATE LIMITED has been engaged in research, design,
                                        Software Development & Training & Placement of students who want to pursue their
                                        career in IT.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
