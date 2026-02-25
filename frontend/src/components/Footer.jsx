import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 9:00 PM" },
    { id: 2, day: "Tuesday", time: "9:00 AM - 9:00 PM" },
    { id: 3, day: "Wednesday", time: "9:00 AM - 9:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "9:00 AM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { id: 7, day: "Sunday", time: "Emergency Only (24/7 SOS Available)" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Medi-Swift</h3>
          <p>
            Smart Hospital Management System designed to streamline
            appointments, patient records, billing, and emergency services
            using modern MERN stack technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/about">About MediSwift</Link></li>
            <li><Link to="/sos" className="sosLink">SOS Emergency</Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="footer-hours">
          <h4>Working Hours</h4>
          <ul>
            {hours.map((element) => (
              <li key={element.id}>
                {element.day} - {element.time}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>

          <p className="contact-item">
            <FaPhone /> <span>+91 98765 43210</span>
          </p>

          <p className="contact-item">
            <MdEmail /> <span>support@mediswift.com</span>
          </p>

          <p className="contact-item">
            <FaLocationArrow /> <span>Ranchi, Jharkhand, India</span>
          </p>

          <p className="contact-item emergency">
            <FaAmbulance /> <span>24/7 Emergency Helpline: 108</span>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Medi-Swift. Secure & HIPAA Compliant.
      </div>
    </footer>
  );
};

export default Footer;