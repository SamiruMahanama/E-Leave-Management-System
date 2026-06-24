import Layout from "./components/Layout";
import ManagerApprovalPage from "./pages/ManagerApprovalPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ApplyLeavePage from "./pages/ApplyLeavePage";
import LeaveHistoryPage from "./pages/LeaveHistoryPage";
import ProfilePage from "./pages/ProfilePage";
import LeaveReportPage from "./pages/LeaveReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />

        <Route
          path="/apply-leave"
          element={
            <Layout>
              <ApplyLeavePage />
            </Layout>
          }
        />

        <Route
          path="/leave-history"
          element={
            <Layout>
              <LeaveHistoryPage />
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manager-approval"
          element={
            <Layout>
              <ManagerApprovalPage />
            </Layout>
          }
        />
        <Route
          path="/leave-reports"
          element={
            <Layout>
              <LeaveReportPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
