import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">E Leave Management System</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>User Name</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              className="login-input"
            />
          </div>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
