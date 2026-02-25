import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddNewAdmin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/admin/addnew",
          { firstName, lastName, email, phone, nic, dob, gender, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          },
        )
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
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-10">
        {/* ===== Heading ===== */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Add New Admin</h1>
          <p className="text-gray-500 mt-2">
            Enter the details to register a new administrator.
          </p>
        </div>

        <form onSubmit={handleAddNewAdmin}>
          <div className="grid md:grid-cols-2 gap-8">
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
          </div>

          {/* ===== Submit Button ===== */}
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#1ba39c] to-[#159a8c] 
            text-white px-12 py-4 rounded-2xl shadow-lg 
            hover:shadow-2xl hover:scale-[1.02] 
            transition duration-300 font-semibold"
            >
              Add New Admin
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewAdmin;
