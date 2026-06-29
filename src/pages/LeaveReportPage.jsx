import { useState } from "react";
import axios from "axios";

function LeaveReportPage() {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [reportData, setReportData] = useState([]);

  const generateReport = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/leave-requests/report?month=${month}&year=${year}`
      );
      setReportData(response.data);
    } catch (error) {
      alert("Failed to generate report.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Leave Reports</h1>

      <div>
        <label>Select Month</label>
        <select
          value={month}
          onChange={(event) => setMonth(event.target.value)}
        >
          <option value="">Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <br />

      <div>
        <label>Year</label>
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </div>

      <br />

      <button onClick={generateReport}>Generate Report</button>

      {/* Conditionally render the table if reportData has items */}
      {reportData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Days</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.employeeId}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.numberOfDays}</td>
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeaveReportPage;