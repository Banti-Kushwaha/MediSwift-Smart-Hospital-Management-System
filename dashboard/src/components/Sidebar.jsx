import React, { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const gotoHomePage = () => {
    navigateTo("/");
    setShow(!show);
  };
  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  };
  const gotoMessagesPage = () => {
    navigateTo("/messages");
    setShow(!show);
  };
  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(!show);
  };
  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 
      bg-gradient-to-b from-[#1ba39c] to-[#159a8c] 
      text-white shadow-2xl transform ${
        show ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
        style={!isAuthenticated ? { display: "none" } : {}}
      >
        {/* Logo */}
        <div className="p-6 text-2xl font-bold border-b border-white/20 tracking-wide">
          MediSwift Admin
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 p-6 text-lg">
          <button
            onClick={gotoHomePage}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:text-[#1ba39c] transition-all duration-300 hover:shadow-lg"
          >
            <TiHome size={22} />
            Dashboard
          </button>

          <button
            onClick={gotoDoctorsPage}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:text-[#1ba39c] transition-all duration-300 hover:shadow-lg"
          >
            <FaUserDoctor size={22} />
            Doctors
          </button>

          <button
            onClick={gotoAddNewAdmin}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:text-[#1ba39c] transition-all duration-300 hover:shadow-lg"
          >
            <MdAddModerator size={22} />
            Add Admin
          </button>

          <button
            onClick={gotoAddNewDoctor}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:text-[#1ba39c] transition-all duration-300 hover:shadow-lg"
          >
            <IoPersonAddSharp size={22} />
            Add Doctor
          </button>

          <button
            onClick={gotoMessagesPage}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:text-[#1ba39c] transition-all duration-300 hover:shadow-lg"
          >
            <AiFillMessage size={22} />
            Messages
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/20 hover:bg-red-500 transition-all duration-300 mt-6"
          >
            <RiLogoutBoxFill size={22} />
            Logout
          </button>
        </div>
      </div>

      {/* Hamburger (Mobile Only) */}
      <div
        className="fixed top-5 left-5 z-50 md:hidden"
        style={!isAuthenticated ? { display: "none" } : {}}
      >
        <button
          onClick={() => setShow(!show)}
          className="bg-[#1ba39c] text-white p-3 rounded-full shadow-xl hover:bg-[#159a8c] transition-all duration-300"
        >
          <GiHamburgerMenu size={22} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
