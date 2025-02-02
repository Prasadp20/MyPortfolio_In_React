import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// Import images
import profileImg from "./assets/pro1.jpg";

import linkedinLightIcon from "./assets/linkedin1.png"; // 🌙 Icon for dark mode
import linkedinDarkIcon from "./assets/linkedin.png"; // ☀️ Icon for light mode

import githubLightIcon from "./assets/github_2.png"; // 🌙 Icon for dark mode
import githubDarkIcon from "./assets/github_1.png"; // ☀️ Icon for light mode

import resume from "./assets/Prasad_Pathak_Resume.pdf";

function Home(props) {
    const navigate = useNavigate(); // Hook for navigation

    const Color = props.mode === "light" ? "black" : "white";
    const bgColor = props.mode === "light" ? "black" : "white";
    const linkedinThemeIcon = props.mode === "dark" ? linkedinLightIcon : linkedinDarkIcon;
    const githubThemeIcon = props.mode === "dark" ? githubLightIcon : githubDarkIcon;

    const skillsArray = [".NET", "C Lang", "C++", "QT", "ReactJs"];
    const [skillIndex, setSkillIndex] = useState(0);
    const [currentSkill, setCurrentSkill] = useState(skillsArray[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSkillIndex((prevIndex) => (prevIndex + 1) % skillsArray.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentSkill(skillsArray[skillIndex]);
    }, [skillIndex]);


    const handleDownloadCV = () => {
        window.open(resume);
    };

    const handleContactInfo = () => {
        navigate("/contact");
    };

    const handleSocialClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="home_container">
            <section id="profile">
                <div className="section__pic-container">
                    <img src={profileImg} alt="profile picture" style={{ borderRadius: "100%" }} />
                </div>
                <div className="section__text">
                    <p className="section__text__p1" style={{ color: Color }}>Hello, I'm</p>
                    <h1 className="title" style={{ color: Color }}>Prasad Pathak</h1>
                    <p className="section__text__p2" style={{ color: Color }}>{currentSkill} Developer</p>
                    <div className="btn-container">
                        <button className="btn btn-color-2" onClick={handleDownloadCV} style={{ color: Color }}>
                            Download CV
                        </button>
                        <button className="btn btn-color-1" onClick={handleContactInfo}
                        >
                            Contact Info
                        </button>
                    </div>
                    <div id="socials-container">
                        <img src={linkedinThemeIcon} alt="My LinkedIn profile" className="icon" onClick={() => handleSocialClick("https://www.linkedin.com/in/pathak-prasad-p20")} />
                        <img src={githubThemeIcon} alt="My Github profile" className="icon" onClick={() => handleSocialClick("https://github.com/Prasadp20")} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
