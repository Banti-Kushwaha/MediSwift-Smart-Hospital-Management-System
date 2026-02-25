import { useNavigate } from "react-router-dom";
import "./LoginSelect.css";

const LoginSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="role-container">
      <div className="role-content">
        <div className="role-header">
          <h1>Medi-Swift</h1>
          <p>Select Login Type</p>
        </div>

        <div className="role-cards">
          {/* Patient Card */}
          <div
            className="role-card patient"
            onClick={() => navigate("/login")}
          >
            <h2>Patient Login</h2>
            <p>Book appointments & manage your health records</p>
          </div>

          {/* Admin Card */}
          <div
            className="role-card admin"
            onClick={() =>
              (window.location.href = "http://localhost:5173/login")
            }
          >
            <h2>Admin Login</h2>
            <p>Manage hospital system & emergency dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelect;