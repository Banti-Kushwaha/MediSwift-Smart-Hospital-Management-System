import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero
        title="About MediSwift – Smart Hospital Management System"
        subtitle="Transforming healthcare management with technology, efficiency, and patient-first solutions."
        imageUrl="/about.png"
      />
      <Biography />
    </>
  );
};

export default AboutUs;