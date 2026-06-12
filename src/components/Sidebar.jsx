import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Modal.css";

function Sidebar() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <ul>
          <li className="sidebar-item" onClick={() => navigate("/dashboard")}>
            Dashboard
          </li>
          <li className="sidebar-item" onClick={() => navigate("/apply-leave")}>
            Apply Leave
          </li>
          <li className="sidebar-item" onClick={() => navigate("/leave-history")}>
            Leave History
          </li>
          <li className="sidebar-item" onClick={() => navigate("/profile")}>
            Profile
          </li>
          <li className="sidebar-item" onClick={() => setShowLogoutModal(true)}>
            Logout
          </li>
        </ul>
      </aside>

      {showLogoutModal && (
        <div className="logout-modal">
          <div className="logout-modal-content">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to logout?</p>

            <button onClick={() => setShowLogoutModal(false)}>Cancel</button>
            <button onClick={() => navigate("/")}>Logout</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
