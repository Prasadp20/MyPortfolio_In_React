import React from "react";
import "./About.css"

const About = () => {
    return (
        <>
            {/* <!-- ABOUT --> */}
            <section id="about">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>

                <div className="section-container">
                    <div className="section__pic-container">
                        <img src="./assets/pro3.jpg" alt="Profile picture" className="about-pic" />
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img src="./assets/experience.png" alt="Experience icon" className="icon" />
                                <h3>Experience</h3>
                                <p>2+ years <br />.NET Development</p>
                            </div>
                            <div className="details-container">
                                <img src="./assets/education.png" alt="Education icon" className="icon" />
                                <h3>Education</h3>
                                <p>Diploma<br />B.E. Bachelors Degree</p>
                            </div>
                        </div>
                        <div className="text-container">
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
                </div>
                {/* <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow" onclick="location.href='./#experience'" /> */}
            </section>
        </>
    )
}

export default About;