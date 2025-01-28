import React from 'react';
import './Home.css';
import Footer from './Footer';


// Import the images
import profileImg from "./assets/pro1.jpg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";

function Home() {
    const handleDownloadCV = () => {
        window.open('src\Components\assets\Prasad_Pathak_Resume.pdf');
    };

    const handleContactInfo = () => {
        window.location.href = '/contact';
    };

    const handleSocialClick = (url) => {
        window.location.href = url;
    };

    return (
        <div className="container">
            {/* <!-- PROFILE --> */}
            <section id="profile">
                <div className="section__pic-container">
                    <img src={profileImg} alt="profile picture" style={{ borderRadius: '100%' }} />
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Prasad Pathak</h1>
                    <p className="section__text__p2">.NET Developer</p>
                    <div className="btn-container">
                        <button className="btn btn-color-2" onClick={handleDownloadCV}>
                            Download CV
                        </button>
                        <button className="btn btn-color-1" onClick={handleContactInfo}>
                            Contact Info
                        </button>
                    </div>
                    <div id="socials-container">
                        <img src={linkedin} alt="My LinkedIn profile" className="icon" onClick={() => handleSocialClick('https://www.linkedin.com/in/pathak-prasad-p20')} />
                        <img src={github} alt="My Github profile" className="icon" onClick={() => handleSocialClick('https://github.com/Prasadp20')}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
