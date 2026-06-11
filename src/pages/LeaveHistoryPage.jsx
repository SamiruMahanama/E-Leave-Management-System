import "../styles/LeaveHistoryPage.css";

function LeaveHistoryPage() {
  const leaveRequests = [
    {
      leaveType: "Annual",
      startDate: "15 Jun 2026",
      endDate: "17 Jun 2026",
      days: 3,
      status: "Pending",
      remarks: "Awaiting manager approval",
    },
    {
      leaveType: "Medical",
      startDate: "02 Jun 2026",
      endDate: "02 Jun 2026",
      days: 1,
      status: "Approved",
      remarks: "Get well soon",
    },
    {
      leaveType: "Casual",
      startDate: "28 May 2026",
      endDate: "28 May 2026",
      days: 1,
      status: "Rejected",
      remarks: "Peak workload during period",
    },
  ];
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
          {leaveRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.leaveType}</td>

              <td>{request.startDate}</td>

              <td>{request.endDate}</td>

              <td>{request.days}</td>

              <td>
                <span
                  className={`status-badge status-${request.status.toLowerCase()}`}
                >
                  {request.status}
                </span>
              </td>

              <td>{request.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveHistoryPage;
