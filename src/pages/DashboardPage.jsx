import DashboardCard from "../components/DashboardCard";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <>
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
        <button onClick={() => navigate("/apply-leave")}>Apply Leave</button>

        <button onClick={() => navigate("/leave-history")}>
          Leave History
        </button>
      </div>
    </>
  );
}

export default DashboardPage;
