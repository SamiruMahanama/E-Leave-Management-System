import { useEffect, useState } from "react";
import axios from "axios";

function ManagerApprovalPage() {

    const [pendingRequests, setPendingRequests] = useState([]);

    const user = JSON.parse(
    localStorage.getItem("user")
);
    if (user?.role !== "MANAGER") {

    return (

        <div>

            <h2>Access Denied</h2>

            <p>
                You are not authorized to view this page.
            </p>

        </div>

    );

}

    const fetchPendingRequests = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/leave-requests/pending"
            );

            setPendingRequests(response.data);

        }
        catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        fetchPendingRequests();

    }, []);

    const approveLeave = async (id) => {

        const remarks =
            prompt("Enter approval remarks:");

        if (remarks === null) {
            return;
        }

        try {

            await axios.put(
                `http://localhost:8080/leave-requests/${id}/approve`,
                null,
                {
                    params: {
                        remarks
                    }
                }
            );

            fetchPendingRequests();

        }
        catch (error) {

            console.error(error);

        }

    };

    const rejectLeave = async (id) => {

        const remarks =
            prompt("Enter rejection remarks:");

        if (remarks === null) {
            return;
        }

        try {

            await axios.put(
                `http://localhost:8080/leave-requests/${id}/reject`,
                null,
                {
                    params: {
                        remarks
                    }
                }
            );

            fetchPendingRequests();

        }
        catch (error) {

            console.error(error);

        }

    };

    return (

        <div>

            <h1>Manager Approval</h1>

            <table className="leave-table">

                <thead>

                    <tr>

                        <th>Employee ID</th>

                        <th>Leave Type</th>

                        <th>Start Date</th>

                        <th>End Date</th>

                        <th>Reason</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        pendingRequests.map((leave) => (

                            <tr key={leave.id}>

                                <td>{leave.employeeId}</td>

                                <td>{leave.leaveType}</td>

                                <td>{leave.startDate}</td>

                                <td>{leave.endDate}</td>

                                <td>{leave.reason}</td>

                                <td>

                                    <button
                                        onClick={() =>
                                            approveLeave(leave.id)
                                        }
                                    >
                                        Approve
                                    </button>

                                    <button
                                        onClick={() =>
                                            rejectLeave(leave.id)
                                        }
                                    >
                                        Reject
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default ManagerApprovalPage;