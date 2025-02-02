import React from "react";
import "./About.css"


import profileImg from "./assets/about-pic.png";

const About = (props) => {

    const Color = props.mode === "light" ? "black" : "white";

    return (
        <>
            <section id="about">
                <p className="section__text__p1" style={{color: Color}}>Get To Know More</p>
                <h1 className="title" style={{color: Color}}>About Me</h1>

                <div className="section-container">
                    <div className="section__pic-container">
                        <img src={profileImg} alt="Profile picture" className="about-pic" />
                    </div>
                    <div className="about-details-container">
                            <p style={{color: Color}}>
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
        </>
    )
}
 
export default About;