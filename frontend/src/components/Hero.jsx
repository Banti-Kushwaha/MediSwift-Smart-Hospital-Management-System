import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = ({ title }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1>{title}</h1>

          <p>
            MediSwift – Smart Hospital Management System is a modern digital
            healthcare platform designed to streamline hospital operations and
            enhance patient experience. Our system integrates appointment
            scheduling, doctor management, patient records, and administrative
            control into one seamless solution.
          </p>

          <div className="hero-buttons">
            <Link to="/appointment" className="primary-btn">
              Book Appointment
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            alt="Hospital Management"
          />
          {/* <div className="hero-glow"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
