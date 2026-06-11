import DashboardCard from "../components/DashboardCard";
import "../styles/DashboardPage.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DashboardPage() {

const navigate = useNavigate();
const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Dashboard</h1>

          <p>Welcome to the E Leave Management System Dashboard.</p>
          <div className="dashboard-cards">
          <DashboardCard
            title="Annual Leave"
            value="10"
            subtitle="Days Remaining"
          />

          <DashboardCard
            title="Medical Leave"
            value="5"
            subtitle="Days Remaining"
          />

          <DashboardCard
            title="Casual Leave"
            value="7"
            subtitle="Days Remaining"
          />
          </div>
          <h2>Quick Actions</h2>
          <div className="quick-actions">

    <button onClick={() => navigate("/apply-leave")}
>
        Apply Leave
    </button>

    <button onClick={() => navigate("/leave-history")}
>
        Leave History
    </button>

</div>
        </main>
      </div>

      {
    showLogoutModal && (

        <div>

            <h2>Confirm Logout</h2>

            <p>
                Are you sure you want to logout?
            </p>

            <button
    onClick={() => setShowLogoutModal(false)}
>
    Cancel
</button>

            <button>
                Logout
            </button>

        </div>

    )
}
    </div>
  );
}

export default DashboardPage;
