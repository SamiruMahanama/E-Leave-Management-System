import "../styles/LeaveHistoryPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

function LeaveHistoryPage() {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/leave-requests",
        );
        const user = JSON.parse(localStorage.getItem("user"));

        const employeeResponse = await axios.get(
          `http://localhost:8080/leave-requests/employee/${user.employeeId}`,
        );
        setLeaveRequests(response.data);
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      }
    };

    fetchLeaveRequests();
  }, []);

  return (
    <div>
      <h1>Leave History</h1>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Leave Type</th>

            <th>Start Date</th>

            <th>End Date</th>

            <th>Number of Days</th>

            <th>Status</th>

            <th>Remarks</th>
          </tr>
        </thead>

        <tbody>
          {leaveRequests.map((leave) => (
            <tr key={leave.id}>
              <td className="leave-type">{leave.leaveType}</td>

              <td>{leave.startDate}</td>

              <td>{leave.endDate}</td>

              <td>{leave.numberOfDays}</td>

              <td className="leave-status">
                <span
                  className={`status-badge status-${leave.status.toLowerCase()}`}
                >
                  {leave.status}
                </span>
              </td>

              <td>{leave.managerRemarks || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveHistoryPage;
