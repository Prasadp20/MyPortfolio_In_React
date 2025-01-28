import React from "react";
import "./About.css"
import Footer from "./Footer";


import profileImg from "./assets/about-pic.png";

const About = () => {
    return (
        <>
            <section id="about">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>

                <div className="section-container">
                    <div className="section__pic-container">
                        <img src={profileImg} alt="Profile picture" className="about-pic" />
                    </div>
                    <div className="about-details-container">
                            <p>
                                Hi, I'm Prasad Pathak, a passionate .NET developer with 2.5 years of experience building robust,
                                scalable, and high-performance applications. I specialize in crafting web applications, APIs,
                                and enterprise-grade software using ASP.NET Core, C#, and Entity Framework, with a focus on
                                clean architecture and maintainable code.
                                I thrive on solving complex problems, optimizing performance, and turning ideas into impactful
                                solutions. Beyond coding, I enjoy exploring new tech trends and collaborating with teams to
                                deliver exceptional results. Let’s create something amazing together!
                            </p>
                    </div>
                </div>                
            </section>

            <Footer/>
        </>
    )
}

export default About;