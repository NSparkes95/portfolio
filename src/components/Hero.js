// Description: This page contains the Hero component which is the first thing the user sees when they visit the website.
// Name: Nicole Sparkes
// Date: Dec 8,2024

import React from "react";
import "../styles/Hero.css";
import profilePhoto from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero">
        <div className="hero-content">
            <div className="photo-container">
                <img 
                    src={profilePhoto}
                    alt="Nicole Sparkes"
                    className="profile-photo"
                />
            </div>
            <div className="hero-text">
                <h1>
                    Hi, I'm <span className="highlight">Nicole Sparkes</span>
                </h1>
                <p>A passionate software developer specializing in React, JS, Python, HTML and CSS</p>
            </div>
        </div>
    </section>
  );
}

export default Hero;