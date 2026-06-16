import "../styles/ProfilePage.css";

function ProfilePage() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (

        <div>

            <h1>Employee Profile</h1>

            <p>
                Employee ID: {user?.employeeId}
            </p>

            <p>
                Name: {user?.name}
            </p>

            <p>
                Email: {user?.email}
            </p>

            <p>
                Department: {user?.department}
            </p>

            <p>
                Designation: {user?.designation}
            </p>

            <p>
                Role: {user?.role}
            </p>

        </div>

    );
}

export default ProfilePage;
