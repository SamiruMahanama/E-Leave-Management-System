import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/DashboardPage.css";

function Layout(props) {
  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default Layout;