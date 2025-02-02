import React from 'react';
import './Contact.css';

// Import the images
import emailLightIcon from "./assets/email_2.png"; // 🌙 Icon for dark mode
import emailDarkIcon from "./assets/email_1.png"; // ☀️ Icon for light mode

import linkedinLightIcon from "./assets/linkedin1.png"; // 🌙 Icon for dark mode
import linkedinDarkIcon from "./assets/linkedin.png"; // ☀️ Icon for light mode

import githubLightIcon from "./assets/github_2.png"; // 🌙 Icon for dark mode
import githubDarkIcon from "./assets/github_1.png"; // ☀️ Icon for light mode

import phoneLightIcon from "./assets/phone_2.png"; // 🌙 Icon for dark mode
import phoneDarkIcon from "./assets/phone_1.png"; // ☀️ Icon for light mode

const Contact = (props) => {

    const Color = props.mode === "light" ? "black" : "white";
    const emailIcon = props.mode === "dark" ? emailLightIcon : emailDarkIcon;
    const linkedinThemeIcon = props.mode === "dark" ? linkedinLightIcon : linkedinDarkIcon;
    const githubThemeIcon = props.mode === "dark" ? githubLightIcon : githubDarkIcon;
    const phoneThemeIcon = props.mode === "dark" ? phoneLightIcon : phoneDarkIcon;

    return (
        <div>
            <section id="contact">
                <p className="section__text__p1" style={{color: Color}}>Get in Touch</p>
                <h1 className="title" style={{color: Color}}>Contact Me</h1>
                <div className="contact-info-upper-container">

                    <div className="contact-info-container">
                        <img src={emailIcon} alt="Email icon" className="icon contact-icon" />
                        <p><a href="prasad.pathak5555@gmail.com" style={{color: Color}}>prasad.pathak5555@gmail.com</a></p>
                    </div>

                    <div className="contact-info-container">
                        <img src={linkedinThemeIcon} alt="LinkedIn icon" className="icon contact-icon" />
                        <p><a href="https://www.linkedin.com/in/pathak-prasad-p20" target="_blank" rel="noopener noreferrer" style={{color: Color}}>LinkedIn</a></p>
                    </div>

                    <div className="contact-info-container">
                        <img src={githubThemeIcon} alt="GitHub icon" className="icon contact-icon" />
                        <p><a href="https://github.com/Prasadp20" target="_blank" rel="noopener noreferrer" style={{color: Color}}>GitHub</a></p>
                    </div>

                    <div className="contact-info-container">
                        <img src={phoneThemeIcon} alt="Phone icon" className="icon contact-icon" />
                        <p><a href="tel:+919765686016" style={{color: Color}}>+91 9765686016</a></p>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Contact;
