import React from "react";
import "./Education.css";

// Import the images
import eduLightIcon from "./assets/education_2.png"; // 🌙 Icon for dark mode
import eduDarkIcon from "./assets/education_1.png"; // ☀️ Icon for light mode

const Experience = (props) => {

    const Color = props.mode === "light" ? "black" : "white";
    const bgColor = props.mode === "light" ? "white" : "black";
    const eduThemeIcon = props.mode === "dark" ? eduLightIcon : eduDarkIcon;

    return (
        <div>
            <section id="experience">
                <p className="section__text__p1" style={{color: Color}}>Get in Touch</p>
                <h1 className="title" style={{color: Color}}>Education</h1>
                <div className="experience-info-upper-container" style={{ backgroundColor: bgColor }}>
                    {/* Experience 1 */}
                    <div className="experience-info-container">
                        <div className="experience-header">
                            <h2 className="experience-sub-title" style={{color: Color}}>Vishwabharati Academy's College Of Engineering</h2>
                            <h3 className="experience-location" style={{color: Color}}>Ahmednagar, India</h3>
                        </div>
                        <div className="experience-role">
                            <h4 style={{color: Color}}>
                                <img src={eduThemeIcon} alt="Experience icon" className="icon" />{" "}Bachlore Degree
                            </h4>
                            <p className="experience-duration" style={{color: Color}}> 08/2014  06/2018</p>
                        </div>
                    </div>

                    {/* Experience 2 */}
                    <div className="experience-info-container">
                        <div className="experience-header">
                            <h2 className="experience-sub-title" style={{color: Color}}>Sau.Sundarbai Manik Adsul Polytechnic</h2>
                            <h3 className="experience-location" style={{color: Color}}>Ahmednagar, India</h3>
                        </div>
                        <div className="experience-role">
                            <h4 style={{color: Color}}>
                                <img src={eduThemeIcon} alt="Experience icon" className="icon" />{" "}Diploma
                            </h4>
                            <p className="experience-duration" style={{color: Color}}> 08/2011  06/2014</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;
