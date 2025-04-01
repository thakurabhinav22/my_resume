import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import background from "../../assets/images/HomePageBack.svg";
import darkbackground from "../../assets/images/blackBackground.svg";
import github_icon from "../../assets/images/github.svg";
import lander_video from "../../assets/videos/lander_view.webm";
import profile_image from "../../assets/images/dev.png";
import "./Home.css";

import { FaHome, FaUser, FaGraduationCap, FaProjectDiagram, FaInstagram, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaCar, FaBook, FaMoneyBill, FaWpforms, FaLock, FaExclamationTriangle } from "react-icons/fa";
import { MdCarRental, MdMenuBook, MdPayments, MdAssignment, MdMusicNote } from "react-icons/md";

export default function Home() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [progress, setProgress] = useState([0, 0, 0]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const languages = [
        { name: "C", progress: 80, icon: "🔵", color: "#39ff14" },
        { name: "C++", progress: 88, icon: "🟦", color: "#00ffff" },
        { name: "Java", progress: 70, icon: "☕", color: "#ff073a" },
        { name: "JavaScript", progress: 70, icon: "⚡", color: "#ffdd1e" },
        { name: "HTML", progress: 85, icon: "📜", color: "#ff4500" },
        { name: "CSS", progress: 60, icon: "🎨", color: "#00ffea" },
        { name: "React", progress: 70, icon: "⚛️", color: "#ff00ff" },
        { name: "Flutter", progress: 70, icon: "🦋", color: "#00ff80" },
        { name: "Dart", progress: 70, icon: "🎯", color: "#9400ff" },
        { name: "Python", progress: 75, icon: "🐍", color: "#ff1493" },
        { name: "VB.NET", progress: 70, icon: "💻", color: "#ffcc00" },
    ];

    const educationData = [
        { title: "High School (10th Grade)", percentage: 95 },
        { title: "Higher Secondary (12th Grade)", percentage: 90 },
        { title: "College (B.Tech / B.E.)", percentage: 85 },
    ];

    useEffect(() => {
        const timers = educationData.map((edu, index) =>
            setTimeout(() => {
                setProgress((prev) => {
                    const newProgress = [...prev];
                    newProgress[index] = edu.percentage;
                    return newProgress;
                });
            }, index * 1000)
        );
        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);


    const handleClick = (e, project) => {
        if (!project.isPublic) {
            e.preventDefault();
            setIsPopupOpen(true); // Show the warning popup
        }
    };





    const projects = [
        {
            title: "DriveSmart",
            description: "A real-time driving behavior analysis and feedback system leveraging Mobile Senosrs and machine learning.",
            icon: <MdCarRental />,
            link: "/drivesmart",
            tech: ["Java", "Firebase", "TensorFlow"],
            demo: "https://drivesmart-demo.com",
            github: "https://github.com/thakurabhinav22/drivesmart",
            type: "Android App",
            isPublic: false
        },
        {
            title: "Learn Max",
            description: "Platform for creating and managing online courses with rich content and analytics.",
            icon: <MdMenuBook />,
            link: "/coursecreator",
            tech: ["React-Js", "Firebase", "Flask"],
            demo: "https://coursecreator-demo.com",
            github: "https://github.com/thakurabhinav22/coursecreator",
            type: "Android App",
            isPublic: true
        },
        {
            title: "Seacure Pay",
            description: "Seamless UPI payment solution with Firebase integration for secure transactions.",
            icon: <MdPayments />,
            link: "/upi-payment",
            tech: ["Java", "Firebase"],
            demo: "https://upi-payment-demo.com",
            github: "https://github.com/thakurabhinav22/upi-payment",
            type: "Android App",
            isPublic: false
        },
        {
            title: "Musix",
            description: "A streamlined online music player delivering an ad-free listening experience with seamless playback functionality.",
            icon: <MdMusicNote />, // Already correct
            link: "/form-app",
            tech: ["React-Js"],
            demo: "https://form-app-demo.com",
            github: "https://github.com/thakurabhinav22/form-app",
            type: "Android App",
            isPublic: false
        },
    ];

    useEffect(() => {
        const timers = educationData.map((edu, index) =>
            setTimeout(() => {
                setProgress((prev) => {
                    const newProgress = [...prev];
                    newProgress[index] = edu.percentage;
                    return newProgress;
                });
            }, index * 1000)
        );
        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);


    return (
        <div id="home" className="home-container">
            <img className="home-intro-lander-img" src={background} alt="Background" />

            <nav className="home-nav">
                <h2 className="nav-logo">Abhinav Thakur</h2>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#edu">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="github-button-div">
                    <a href="https://github.com/thakurabhinav22" target="_blank" rel="noopener noreferrer" className="github-button">
                        <img src={github_icon} alt="GitHub" className="github-icon" />
                        Get In Touch
                    </a>
                </div>
            </nav>

            <div className="bottom-nav">
                <ul>
                    <li><a href="#home"><FaHome className="nav-icon" /><span>Home</span></a></li>
                    <li><a href="#about"><FaUser className="nav-icon" /><span>About</span></a></li>
                    <li><a href="#edu"><FaGraduationCap className="nav-icon" /><span>Education</span></a></li>
                    <li><a href="#projects"><FaProjectDiagram className="nav-icon" /><span>Projects</span></a></li>
                </ul>
            </div>

            <main className="lander-view">
                <div className="lander-text">
                    <h1>Abhinav Thakur - Software Engineer</h1>
                    <p className="intro-text">
                        Passionate about building scalable, efficient, and user-friendly applications.
                        Experienced in full-stack development, game design, and cutting-edge tech solutions.
                    </p>
                    <div className="buttons">
                        <button className="download-btn">Download Resume</button>
                    </div>
                </div>
                <div className="lander-video-container">
                    <video src={lander_video} autoPlay loop muted className="lander-video" />
                </div>
            </main>

            <section id="about" className="about-container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            Hey there👋🏻, I am Abhinav Thakur, a software engineer passionate about crafting innovative solutions.
                            My expertise spans across full-stack development, game design, and system architecture.
                            I specialize in Java, React, Flutter, and Unreal Engine, striving to deliver high-quality, scalable software solutions.
                        </p>
                        <p>When I am not coding, I enjoy experimenting with new technologies and playing games.</p>
                        <div className="let-code-buttons">
                            <a href="https://www.linkedin.com/in/thakurabhinav22" target="_blank" rel="noopener noreferrer" className="leetCode-btn">
                                Linkedin Profile
                            </a>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src={profile_image} alt="Abhinav Thakur" />
                    </div>
                </div>
            </section>

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
                            My school journey was filled with curiosity, learning, and a strong foundation in mathematics and science.
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
                            I am currently pursuing a degree in Computer Engineering, where I have gained a solid foundation in programming,
                            data structures, and software development methodologies.
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
                                            trailColor: "rgba(255, 255, 255, 0.2)",
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

            <section className="projects-container" id="projects">

            {/* <img className="projetcs-background-img" src={darkbackground} alt="Background" /> */}


                <h2 className="projects-title">Featured Projects</h2>
                <p className="projects-subtitle">Discover my latest technical achievements and innovations.</p>
                <div className="grid">
                    {projects.map((project, index) => (
                        <div key={index} className="card">
                            <div className="card-content">
                                <div className="card-header">
                                    <span className="icon">{project.icon}</span>
                                    <h4>{project.title} {project.isPublic ? "🔓" : "🔒"}</h4>
                                </div>
                                <p className="card-description">{project.description}</p>
                                <div className="card-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-badge">{tech}</span>
                                    ))}
                                </div>

                                <div className="card-links">

                                    <div className="source-code" onClick={(e) => handleClick(e, project)}>

                                        <a

                                            href={project.isPublic ? project.github : "#"} // Fallback href
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="github-link"
                                        >


                                            <FaGithub /> Source
                                        </a>
                                    </div>



                                    <button className="details-btn" onClick={() => navigate(project.link)}>
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </section >

            <footer id="contact" className="footer">
                <div className="social-icons">
                    <a href="https://www.instagram.com/abhi9av_thakur" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="mailto:abhinavthakurv22@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                    <a href="https://github.com/thakurabhinav22" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/thakurabhinav22" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://x.com/thakurabhinav22" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
                <div className="visit-counter">Visits: 0</div>
                <div className="made-by">Made by Abhinav with ❤️</div>
            </footer>
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-header">
                            <div className="popup-title">
                                <FaExclamationTriangle className="warning-icon" />
                                <h3>Access Restricted</h3>
                            </div>
                            <button className="popup-close-btn" onClick={() => setIsPopupOpen(false)}>✕</button>
                        </div>

                        <p className="popup-message">
                            You do not have permission to access this project. It is private. <br />
                            But you can still contact the developer for access.
                        </p>

                        <div className="popup-actions">
                          
                            <a href="mailto:abhinavthakurv22@gmail.com" className="popup-btn-contact">Contact Developer</a>
                        </div>
                    </div>
                </div>
            )}


        </div>




    );
}