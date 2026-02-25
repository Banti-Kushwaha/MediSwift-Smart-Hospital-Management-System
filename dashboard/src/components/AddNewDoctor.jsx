import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      await axios
        .post("http://localhost:4000/api/v1/user/doctor/addnew", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="min-h-screen bg-[#f4fbfa] p-8 md:ml-72 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Register a New Doctor
        </h1>

        <form onSubmit={handleAddNewDoctor}>
          <div className="grid md:grid-cols-2 gap-14">
            {/* ===== Avatar Section ===== */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#1ba39c] shadow-xl">
                <img
                  src={docAvatarPreview ? docAvatarPreview : "/docHolder.jpg"}
                  alt="Doctor Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <input
                type="file"
                onChange={handleAvatar}
                className="text-sm file:mr-4 file:py-2 file:px-5 file:rounded-xl file:border-0 
              file:text-white file:bg-[#1ba39c] hover:file:bg-[#159a8c] transition"
              />
            </div>

            {/* ===== Form Fields ===== */}
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              />

              <input
                type="number"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              />

              <input
                type="number"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              />

              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              />

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              />

              <select
                value={doctorDepartment}
                onChange={(e) => setDoctorDepartment(e.target.value)}
                className="p-4 rounded-xl border border-gray-200 bg-[#f9fdfd] focus:ring-2 focus:ring-[#1ba39c] outline-none transition"
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="mt-6 bg-gradient-to-r from-[#1ba39c] to-[#159a8c] 
              text-white py-4 rounded-2xl shadow-lg hover:shadow-2xl 
              hover:scale-[1.02] transition duration-300 font-semibold"
              >
                Register New Doctor
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;
