import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";

// Import images
import profileImg from "./assets/pro1.jpg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import resume from "./assets/Prasad_Pathak_Resume.pdf";

function Home() {
    const navigate = useNavigate(); // Hook for navigation

    const skillsArray = [".NET", "C Lang", "C++", "QT", "ReactJs"];
    const [skillIndex, setSkillIndex] = useState(0);
    const [currentSkill, setCurrentSkill] = useState(skillsArray[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSkillIndex((prevIndex) => (prevIndex + 1) % skillsArray.length);
        }, 1000);

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
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Prasad Pathak</h1>
                    <p className="section__text__p2">{currentSkill} Developer</p>
                    <div className="btn-container">
                        <button className="btn btn-color-2" onClick={handleDownloadCV}>
                            Download CV
                        </button>
                        <button className="btn btn-color-1" onClick={handleContactInfo}>Contact Info</button>
                    </div>
                    <div id="socials-container">
                        <img src={linkedin} alt="My LinkedIn profile" className="icon" onClick={() => handleSocialClick("https://www.linkedin.com/in/pathak-prasad-p20")} />
                        <img src={github} alt="My Github profile" className="icon" onClick={() => handleSocialClick("https://github.com/Prasadp20")} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
