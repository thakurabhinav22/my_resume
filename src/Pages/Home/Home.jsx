import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import background from "../../assets/images/HomePageBack.svg";
import darkbackground from "../../assets/images/blackBackground.svg"
import github_icon from "../../assets/images/github.svg";
import lander_video from '../../assets/videos/lander_view.webm';
import profile_image from "../../assets/images/dev.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "react-circular-progressbar/dist/styles.css";
import menu_icon from "../../assets/images/menu.svg"
import { FaHome, FaUser, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';

export default function Home() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const languages = [
        { name: "C", progress: 80, icon: "🔵", color: "#39ff14" }, // Neon Green
        { name: "C++", progress: 88, icon: "🟦", color: "#00ffff" }, // Cyan
        { name: "Java", progress: 70, icon: "☕", color: "#ff073a" }, // Neon Red
        { name: "JavaScript", progress: 70, icon: "⚡", color: "#ffdd1e" }, // Bright Yellow
        { name: "HTML", progress: 85, icon: "📜", color: "#ff4500" }, // Orange-Red
        { name: "CSS", progress: 60, icon: "🎨", color: "#00ffea" }, // Electric Blue
        { name: "React", progress: 70, icon: "⚛️", color: "#ff00ff" }, // Neon Pink
        { name: "Flutter", progress: 70, icon: "🦋", color: "#00ff80" }, // Bright Teal
        { name: "Dart", progress: 70, icon: "🎯", color: "#9400ff" }, // Vibrant Purple
        { name: "Python", progress: 75, icon: "🐍", color: "#ff1493" }, // Deep Pink
        { name: "VB.NET", progress: 70, icon: "💻", color: "#ffcc00" } // Bright Gold
    ];



    const educationData = [
        { title: "High School (10th Grade)", percentage: 95 },
        { title: "Higher Secondary (12th Grade)", percentage: 90 },
        { title: "College (B.Tech / B.E.)", percentage: 85 },
    ];

    // const projects = [
    //     {
    //         title: "DriveSmart",
    //         description: "Real-time driving behavior analysis and feedback.",
    //         icon: <FaCar className="project-icon" />,
    //         link: "/drivesmart",
    //     },
    //     {
    //         title: "CourseCreator",
    //         description: "Platform for creating and managing online courses.",
    //         icon: <FaBook className="project-icon" />,
    //         link: "/coursecreator",
    //     },
    //     {
    //         title: "UPI Payment App",
    //         description: "Seamless UPI payments with Firebase integration.",
    //         icon: <FaMoneyBill className="project-icon" />,
    //         link: "/upi-payment",
    //     },
    //     {
    //         title: "Form App",
    //         description: "A smart form management system with validation.",
    //         icon: <FaWpforms className="project-icon" />,
    //         link: "/form-app",
    //     },
    // ];


    const ProgressBar = ({ value }) => (
        <div className="progress-bar">
            <div
                className="progress-fill"
                style={{ width: `${value}%` }}
            />
        </div>
    );

    const [progress, setProgress] = useState(new Array(educationData.length).fill(0));


    useEffect(() => {
        const timers = educationData.map((edu, index) => {
            return setTimeout(() => {
                setProgress((prev) => {
                    const newProgress = [...prev];
                    newProgress[index] = edu.percentage;
                    return newProgress;
                });
            }, index * 1000); // Staggered animation
        });

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);
    return (
        <div className='home-container'>
            <img className="home-intro-lander-img" src={background} alt="Background" />
            <nav className="home-nav">
                <h2 className="nav-logo">Abhinav Thakur</h2>

                {/* Desktop Nav Links */}
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#edu">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>

                {/* GitHub Button */}
                <div className="github-button-div">
                    <a href="https://github.com/thakurabhinav22" target="_blank" rel="noopener noreferrer" className="github-button">
                        <img src={github_icon} alt="GitHub" className="github-icon" />
                        Get In Touch
                    </a>
                </div>

            </nav>
<div className="bottom-nav">

            <div className="bottom-nav active">
                <ul>
                    <li>
                        <a href="#">
                            <FaHome className="nav-icon" /> {/* Home icon */}
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <FaUser className="nav-icon" /> {/* About icon */}
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#edu">
                            <FaGraduationCap className="nav-icon" /> {/* Education icon */}
                            <span>Education</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <FaProjectDiagram className="nav-icon" /> {/* Projects icon */}
                            <span>Projects</span>
                        </a>
                    </li>
                </ul>
            </div>
</div>

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
                            Hey there👋🏻, I am Abhinav Thakur, a software engineer passionate about crafting innovative solutions.
                            My expertise spans across full-stack development, game design, and system architecture.
                            I specialize in Java, React, Flutter, and Unreal Engine, striving to deliver high-quality, scalable software solutions.
                        </p>
                        <p>
                            When I am not coding, I enjoy experimenting with new technologies and playing games.
                        </p>
                        <div className="let-code-buttons">
                            <a href="https://leetcode.com/thakurabhinav22/" target="_blank" className="leetCode-btn">
                                LeetCode Profile
                            </a>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src={profile_image} alt="Abhinav Thakur" />
                    </div>
                </div>
            </section>


            {/* Education Section */}
            <section className="education-container" id="edu">
                <div className="education-background">
                    <img className="education-background-img" src={darkbackground} alt="Background" />
                </div>

                <h1 className="education-title">Academic Background</h1>

                <div className="education-content">
                    <div className="box-base schooling-box">
                        <h1>Schooling Details</h1>
                        <p>
                            I completed my <b>10th Standard (SSC)</b> from <strong>Model High School</strong> with an <b>87%</b> score.
                            My school journey was filled with curiosity, learning, and a strong foundation in mathematics
                            and science. This phase nurtured my interest in problem-solving and logical thinking,
                            eventually leading me towards programming and software development.
                        </p>
                        <div className="progress-container">
                            <span className="progress-label">10th SSC - 87%</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: "87%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="box-base college-box">
                        <h1>Computer Engineering Details</h1>
                        <p>
                            I am currently pursuing a degree in Computer Engineering, where I have gained a solid foundation in programming, data structures, and software development methodologies. Throughout my academic journey, I have worked on various projects that have enhanced my problem-solving skills and logical thinking.
                        </p>
                        <div className="progress-container">
                            <span className="progress-label">5th Sem Result - 87%</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: "87%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="languages-container">
                    <h2 className="languages-header">Programming Languages & Skills</h2>
                    <div className="languages-grid">
                        {languages.map((lang, index) => (
                            <div key={index} className="language-card">
                                <div className="progress-circle">
                                    <CircularProgressbar
                                        value={lang.progress}
                                        text={`${lang.progress}%`}
                                        styles={buildStyles({
                                            textColor: "#fff",
                                            pathColor: lang.color,
                                            trailColor: "rgba(255, 255, 255, 0.2)"
                                        })}
                                    />
                                </div>
                                <div className="language-info">
                                    <span className="language-icon">{lang.icon}</span>
                                    <span className="language-name">{lang.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Projcts */}
            {/* <section className="projects-container" id="projects">
                <h1 className="projects-title">Here are the features we're proud of</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-icon-wrapper">{project.icon}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <button
                                className="project-button"
                                onClick={() => navigate(project.link)}
                            >
                                &gt;
                            </button>
                        </div>
                    ))}
                </div>
            </section> */}


        </div>
    );
}
