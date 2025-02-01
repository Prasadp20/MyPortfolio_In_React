import React from 'react';
import './Contact.css';

// Import the images
import emailIcon from './assets/email.png';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import phoneIcon from './assets/phone-solid.svg';

const Contact = (props) => {

    const Color = props.mode === "light" ? "black" : "white";
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
                        <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon" />
                        <p><a href="https://www.linkedin.com/in/pathak-prasad-p20" style={{color: Color}}>LinkedIn</a></p>
                    </div>

                    <div className="contact-info-container">
                        <img src={githubIcon} alt="GitHub icon" className="icon contact-icon" />
                        <p><a href="https://github.com/Prasadp20" target="_blank" rel="noopener noreferrer" style={{color: Color}}>GitHub</a></p>
                    </div>

                    <div className="contact-info-container">
                        <img src={phoneIcon} alt="Phone icon" className="icon contact-icon" />
                        <p><a href="tel:+919765686016" style={{color: Color}}>+91 9765686016</a></p>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Contact;
