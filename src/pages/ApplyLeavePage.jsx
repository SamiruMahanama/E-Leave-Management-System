import { useState } from "react";
import "../styles/ApplyLeavePage.css";

function ApplyLeavePage() {
  const [leaveType, setLeaveType] = useState("Annual Leave");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [reason, setReason] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    setError("");

    event.preventDefault();

    if (endDate < startDate) {
      setError("End date cannot be before start date.");
      return;
    }

    console.log("Leave Type:", leaveType);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Reason:", reason);
  };

  return (
    <div className="apply-leave-container">
      <h1 className="page-title">Apply Leave</h1>

      {error && <p className="error-message">{error}</p>}

      <form className="apply-leave-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type</label>
          <select
            id="leaveType"
            value={leaveType}
            onChange={(event) => setLeaveType(event.target.value)}
          >
            <option value="Annual Leave">Annual Leave</option>
            <option value="Medical Leave">Medical Leave</option>
            <option value="Casual Leave">Casual Leave</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
}

export default ApplyLeavePage;
