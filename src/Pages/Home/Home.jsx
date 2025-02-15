import React from 'react';
import background from "../../assets/images/HomePageBack.svg";
import "./Home.css";
import github_icon from "../../assets/images/github.svg";


export default function Home() {
    return (
        <div className='home-container'>
            <img className="home-intro-lander-img" src={background} alt="Background" />
            <div className='home-page-content'>
                <nav className='home-nav'>
                    <h2 className="nav-logo">Abhinav Thakur</h2>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
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
            </div>
        </div>
    );
}





