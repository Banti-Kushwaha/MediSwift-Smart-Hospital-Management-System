import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true },
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="min-h-screen bg-[#f4fbfa] p-8 md:ml-72">
      <div className="max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Registered Doctors
          </h1>
          <p className="text-gray-500 mt-2">
            Manage and review all registered doctors.
          </p>
        </div>

        {/* ===== Doctors Grid ===== */}
        {doctors && doctors.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((element) => (
              <div
                key={element._id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 overflow-hidden border border-[#e6f4f3]"
              >
                {/* Avatar Section */}
                <div className="bg-gradient-to-r from-[#1ba39c] to-[#159a8c] p-8 flex justify-center">
                  <img
                    src={element.docAvatar?.url}
                    alt="doctor avatar"
                    className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
                    {element.firstName} {element.lastName}
                  </h3>

                  <div className="space-y-3 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-[#1ba39c]">
                        Email:
                      </span>{" "}
                      {element.email}
                    </p>

                    <p>
                      <span className="font-semibold text-[#1ba39c]">
                        Phone:
                      </span>{" "}
                      {element.phone}
                    </p>

                    <p>
                      <span className="font-semibold text-[#1ba39c]">DOB:</span>{" "}
                      {element.dob.substring(0, 10)}
                    </p>

                    <p>
                      <span className="font-semibold text-[#1ba39c]">
                        Department:
                      </span>{" "}
                      {element.doctorDepartment}
                    </p>

                    <p>
                      <span className="font-semibold text-[#1ba39c]">NIC:</span>{" "}
                      {element.nic}
                    </p>

                    <p>
                      <span className="font-semibold text-[#1ba39c]">
                        Gender:
                      </span>{" "}
                      {element.gender}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 bg-white rounded-3xl shadow-xl">
            <h2 className="text-xl font-semibold text-gray-400">
              No Registered Doctors Found!
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;
