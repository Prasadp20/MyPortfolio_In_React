import React from 'react';
import Footer from './Footer';
import './Contact.css';

// Import the images
import emailIcon from './assets/email.png';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import phoneIcon from './assets/phone-solid.svg';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">

                    <div className="contact-info-container">
                        <img src={emailIcon} alt="Email icon" className="icon contact-icon" />
                        <p><a href="prasad.pathak5555@gmail.com">prasad.pathak5555@gmail.com</a></p>
                    </div>

                    <div className="contact-info-container">
                        <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon" />
                        <p><a href="https://www.linkedin.com/in/pathak-prasad-p20">LinkedIn</a></p>
                    </div>

                    <div className="contact-info-container">
                        <img src={githubIcon} alt="GitHub icon" className="icon contact-icon" />
                        <p><a href="https://github.com/Prasadp20" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    </div>

                    <div className="contact-info-container">
                        <img src={phoneIcon} alt="Phone icon" className="icon contact-icon" />
                        <p><a href="tel:+919765686016">+91 9765686016</a></p>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;
