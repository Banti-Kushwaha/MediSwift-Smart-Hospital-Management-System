import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Book an Appointment | MediSwift"}
        subtitle={
          "Experience seamless healthcare scheduling with MediSwift – Smart Hospital Management System. Book your appointment quickly and efficiently."
        }
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;