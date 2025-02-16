import React from 'react';
import background from "../../assets/images/HomePageBack.svg";
import github_icon from "../../assets/images/github.svg";
import lander_video from '../../assets/videos/lander_view.webm';
// import profile_image from "../../assets/images/profile.jpg"; // Add your profile picture
import "./Home.css";

export default function Home() {
    return (
        <div className='home-container'>
            <img className="home-intro-lander-img" src={background} alt="Background" />
            <nav className='home-nav'>
                <h2 className="nav-logo">Abhinav Thakur</h2>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#">Learning</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <div className="github-button-div">
                    <a href="https://github.com/thakurabhinav22" target="_blank" rel="noopener noreferrer" className="github-button">
                        <img src={github_icon} alt="GitHub" className="github-icon" />
                        Get In Touch
                    </a>
                </div>
            </nav>

            <main className='lander-view'>
                <div className="lander-text">
                    <h1>Abhinav Thakur - Software Engineer</h1>
                    <p className="intro-text">
                        Passionate about building scalable, efficient, and user-friendly applications.
                        Experienced in full-stack development, game design, and cutting-edge tech solutions.
                    </p>
                    <div className="buttons">
                        <button className="download-btn">
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="lander-video-container">
                    <video src={lander_video} autoPlay loop muted className="lander-video" />
                </div>
            </main>

            {/* About Section */}
            <section id="about" className='about-container'>
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            I am a software engineer passionate about crafting innovative solutions.
                            My expertise spans across full-stack development, game design, and system architecture.
                            I specialize in Java, React, Laravel, and Unreal Engine, striving to deliver high-quality, scalable software solutions.
                        </p>
                        <p>
                            When I am not coding, I enjoy experimenting with new technologies, playing games, and contributing to open-source projects.
                        </p>
                    </div>
                    <div className="about-image">
                        {/* <img src={profile_image} alt="Abhinav Thakur" /> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
