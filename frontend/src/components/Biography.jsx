import React from "react";
import "./Biography.css";

const Biography = () => {
  return (
    <section className="bio-section">
      <div className="bio-container">

        {/* Image Section */}
        <div className="bio-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Modern Hospital"
          />
          <div className="bio-glow"></div>
        </div>

        {/* Content Section */}
        <div className="bio-content">
          <p className="bio-subtitle">About MediSwift</p>

          <h2 className="bio-title">
            Smart Hospital Management System
          </h2>

          <p>
            MediSwift is a modern Smart Hospital Management System designed to
            simplify and digitalize hospital operations. Our platform empowers
            hospitals, doctors, and patients with seamless appointment
            scheduling, digital records management, and efficient administrative control.
          </p>

          <p>
            Established in 2025, MediSwift leverages the power of the MERN Stack
            (MongoDB, Express.js, React.js, Node.js) to deliver scalable,
            secure, and high-performance healthcare management solutions.
          </p>

          <p>
            Our mission is to reduce manual paperwork, enhance patient
            experience, and provide real-time access to critical medical data
            for smarter decision-making and better healthcare outcomes.
          </p>

          {/* Highlight Cards */}
          <div className="bio-cards">

            <div className="bio-card">
              <h4>Digital Efficiency</h4>
              <p>Automating hospital workflows with smart technology.</p>
            </div>

            <div className="bio-card">
              <h4>Secure Data</h4>
              <p>Ensuring patient information is protected and encrypted.</p>
            </div>

            <div className="bio-card">
              <h4>Patient-Centric</h4>
              <p>Simplified appointment and healthcare experience.</p>
            </div>

            <div className="bio-card">
              <h4>Scalable System</h4>
              <p>Built to grow with modern hospitals and clinics.</p>
            </div>

          </div>

          <p className="bio-tagline">
            Smart Healthcare. Simplified Management. Better Outcomes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Biography;