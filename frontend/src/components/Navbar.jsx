import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/user/patient/logout",
        { withCredentials: true },
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
      navigateTo("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Logout failed. Please try again.",
      );
    }
  };

  const goToLogin = () => {
    navigateTo("/auth-select");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Medi-Swift</h2>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>

      <ul className={show ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setShow(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/appointment" onClick={() => setShow(false)}>
            Book Appointment
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setShow(false)}>
            About
          </Link>
        </li>

        <li className="sos">
          <Link to="/sos" onClick={() => setShow(false)}>
            SOS
          </Link>
        </li>
        <li>
          <Link to="/pharmacy">Pharmacy</Link>
        </li>

        <li>
          {isAuthenticated ? (
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="loginBtn" onClick={goToLogin}>
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
