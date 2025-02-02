import React from "react";
import "./Experience.css";

// Import the images
import expLightIcon from "./assets/feedback_2.png"; // 🌙 Icon for dark mode
import expDarkIcon from "./assets/feedback_1.png"; // ☀️ Icon for light mode

const Experience = (props) => {

    const Color = props.mode === "light" ? "black" : "white";
    const bgColor = props.mode === "light" ? "white" : "black";
    const expIcon = props.mode === "dark" ? expLightIcon : expDarkIcon;

    return (
        <div>
            <section id="experience">
                <p className="section__text__p1" style={{color: Color}}>Get To Know More</p>
                <h1 className="title" style={{color: Color}}>Experience</h1>
                <div className="experience-info-upper-container" style={{ backgroundColor: bgColor }}>
                    {/* Experience 1 */}
                    <div className="experience-info-container">
                        <div className="experience-header">
                            <h2 className="experience-sub-title" style={{color: Color}}>Shaurya Technosoft Pvt. Ltd.</h2>
                            <h3 className="experience-location" style={{color: Color}}>Pune, India</h3>
                        </div>
                        <div className="experience-role">
                            <h4 style={{color: Color}}>
                                <img src={expIcon} alt="Experience icon" className="icon" style={{color: Color}}/>{" "}.NET Developer
                            </h4>
                            <p className="experience-duration" style={{color: Color}}>09/2022 - Present</p>
                        </div>
                        <p style={{color: Color}}><strong>Company Description</strong></p>
                        <p style={{color: Color}}>
                            Company based in Pune, India. Their focus areas include Dairy,
                            Manufacturing, Mining, Vehicle Tracking, Agricultural, Election
                            Management. The company delivers products such as Desktop,
                            Android Applications and Web-Based Solutions.
                        </p>
                    </div>

                    {/* Experience 2 */}
                    <div className="experience-info-container">
                        <div className="experience-header">
                            <h2 className="experience-sub-title" style={{color: Color}}>
                                ThinkQuotient Software Training Institute
                            </h2>
                            <h3 className="experience-location" style={{color: Color}}>Pune, India</h3>
                        </div>
                        <div className="experience-role">
                            <h4 style={{color: Color}}>
                                <img src={expIcon} alt="Experience icon" className="icon" />{" "}
                                .NET Intern
                            </h4>
                            <p className="experience-duration" style={{color: Color}}>05/2022 - 09/2022</p>
                        </div>
                        <p style={{color: Color}}>
                            <strong>Company Description</strong>
                        </p>
                        <p style={{color: Color}}>
                            THINKQUOTIENT SOFTWARE PRIVATE LIMITED has been engaged in
                            research, design, Software Development & Training & Placement of
                            students who want to pursue their career in IT.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
