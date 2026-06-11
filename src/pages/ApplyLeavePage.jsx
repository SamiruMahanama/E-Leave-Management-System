import { useState } from "react";

function ApplyLeavePage() {

const [leaveType, setLeaveType] = useState("");

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



        <div>

            <h1>Apply Leave</h1>

            {error && (
    <p className="error-message">
        {error}
    </p>
)}

            <form onSubmit={handleSubmit}>

                <div>

                    <label>
                        Leave Type
                    </label>

                </div>

                <div>

                    <select value={leaveType}
    onChange={(event) =>
        setLeaveType(event.target.value)
    }
>

                        <option>
                            Annual Leave
                        </option>

                        <option>
                            Medical Leave
                        </option>

                        <option>
                            Casual Leave
                        </option>

                    </select>

                </div>

                <div>

                    <label>
                        Start Date
                    </label>

                </div>

                <div>

                    <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />

                </div>

                <div>

                    <label>
                        End Date
                    </label>

                </div>

                <div>

                    <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />

                </div>

                <div>

                    <label>
                        Reason
                    </label>

                </div>

                <div>

                    <textarea value={reason} onChange={(event) => setReason(event.target.value)} />

                </div>

                <button type="submit">

                    Submit Request

                </button>

            </form>

        </div>
    );
}



export default ApplyLeavePage;