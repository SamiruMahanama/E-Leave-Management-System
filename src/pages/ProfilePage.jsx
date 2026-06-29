import "../styles/ProfilePage.css";

function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Employee Profile</h1>
        <div className="profile-details">
          <div className="profile-field">
            <span className="profile-label">Employee ID:</span>
            <span className="profile-value">{user?.employeeId}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Name:</span>
            <span className="profile-value">{user?.name}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Email:</span>
            <span className="profile-value">{user?.email}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Department:</span>
            <span className="profile-value">{user?.department}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Designation:</span>
            <span className="profile-value">{user?.designation}</span>
          </div>
          <div className="profile-field">
            <span className="profile-label">Role:</span>
            <span className="profile-value">{user?.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
