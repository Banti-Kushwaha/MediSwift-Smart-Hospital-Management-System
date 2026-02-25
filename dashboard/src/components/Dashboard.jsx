import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true },
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
        console.log(error)
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true },
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment,
        ),
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="min-h-screen bg-[#f4fbfa] p-8 md:ml-72">
      {/* ===== Top Cards Section ===== */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {/* Welcome Card */}
        <div className="col-span-2 bg-gradient-to-r from-[#1ba39c] to-[#159a8c] text-white rounded-3xl shadow-2xl p-8 flex items-center gap-8">
          <img
            src="/doc.png"
            alt="doctor"
            className="w-32 h-32 object-contain hidden md:block"
          />
          <div>
            <h2 className="text-3xl font-semibold">
              Hello, {admin && `${admin.firstName} ${admin.lastName}`}
            </h2>
            <p className="mt-3 text-sm opacity-90 max-w-lg">
              Welcome back to your MediSwift admin dashboard. Manage
              appointments, monitor hospital activities and maintain operational
              efficiency seamlessly.
            </p>
          </div>
        </div>

        {/* Total Appointments */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition duration-300">
          <p className="text-gray-500">Total Appointments</p>
          <h3 className="text-4xl font-bold text-[#1ba39c] mt-3">
            {appointments.length}
          </h3>
        </div>

        {/* Doctors Count */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition duration-300">
          <p className="text-gray-500">Registered Doctors</p>
          <h3 className="text-4xl font-bold text-[#159a8c] mt-3">10</h3>
        </div>
      </div>

      {/* ===== Appointment Table ===== */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 overflow-x-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Appointments
        </h2>

        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-[#eaf7f6] text-gray-700 uppercase text-xs rounded-lg">
            <tr>
              <th className="px-6 py-4">Patient</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Doctor</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Visited</th>
            </tr>
          </thead>

          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr
                  key={appointment._id}
                  className="border-b hover:bg-[#f3fbfa] transition duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {appointment.firstName} {appointment.lastName}
                  </td>

                  <td className="px-6 py-4">
                    {appointment.appointment_date.substring(0, 16)}
                  </td>

                  <td className="px-6 py-4">
                    {appointment.doctor.firstName} {appointment.doctor.lastName}
                  </td>

                  <td className="px-6 py-4">{appointment.department}</td>

                  {/* Status Dropdown */}
                  <td className="px-6 py-4">
                    <select
                      className={`px-4 py-2 rounded-xl text-white text-sm font-medium shadow-md focus:outline-none
                    ${
                      appointment.status === "Pending"
                        ? "bg-yellow-500"
                        : appointment.status === "Accepted"
                          ? "bg-[#1ba39c]"
                          : "bg-red-500"
                    }`}
                      value={appointment.status}
                      onChange={(e) =>
                        handleUpdateStatus(appointment._id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>

                  {/* Visited */}
                  <td className="px-6 py-4 text-center">
                    {appointment.hasVisited ? (
                      <GoCheckCircleFill className="text-[#1ba39c] text-2xl mx-auto" />
                    ) : (
                      <AiFillCloseCircle className="text-red-500 text-2xl mx-auto" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-gray-500 font-medium"
                >
                  No Appointments Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
