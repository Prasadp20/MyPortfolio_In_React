import React from "react";
import Footer from "./Footer";
import "./Education.css";

// Import the images
import checkmark from "./assets/education.png";

const Experience = () => {
    return (
        <div>
            <section id="experience">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Education</h1>
                <div className="experience-info-upper-container">
                    {/* Experience 1 */}
                    <div className="experience-info-container">
                        <div className="experience-header">
                            <h2 className="experience-sub-title">Vishwabharati Academy's College Of Engineering</h2>
                            <h3 className="experience-location">Ahmednagar, India</h3>
                        </div>
                        <div className="experience-role">
                            <h4>
                                <img src={checkmark} alt="Experience icon" className="icon" />{" "}Bachlore Degree
                            </h4>
                            <p className="experience-duration"> 08/2014  06/2018</p>
                        </div>
                        {/* <p>
                            <strong>Company Description</strong>
                        </p>
                        <p>
                            Company based in Pune, India. Their focus areas include Dairy,
                            Manufacturing, Mining, Vehicle Tracking, Agricultural, Election
                            Management. The company delivers products such as Desktop,
                            Android Applications and Web-Based Solutions.
                        </p> */}
                    </div>

                    {/* Experience 2 */}
                    <div className="experience-info-container">
                        <div className="experience-header">
                            <h2 className="experience-sub-title">Sau.Sundarbai Manik Adsul Polytechnic</h2>
                            <h3 className="experience-location">Ahmednagar, India</h3>
                        </div>
                        <div className="experience-role">
                            <h4>
                                <img src={checkmark} alt="Experience icon" className="icon" />{" "}Diploma
                            </h4>
                            <p className="experience-duration"> 08/2011  06/2014</p>
                        </div>
                        {/* <p>
                            <strong>Company Description</strong>
                        </p>
                        <p>
                            THINKQUOTIENT SOFTWARE PRIVATE LIMITED has been engaged in
                            research, design, Software Development & Training & Placement of
                            students who want to pursue their career in IT.
                        </p> */}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Experience;
