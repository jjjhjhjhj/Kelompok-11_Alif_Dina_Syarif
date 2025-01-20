import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../file/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { username, password } = formData;

    // Validasi input kosong
    if (!username || !password) {
      alert("Please enter both username and password!");
      return;
    }

    // Ambil data pengguna dari localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Validasi apakah data pengguna ada di localStorage
    if (!storedUser) {
      alert("No user found! Please sign up first.");
      navigate("/signup");
      return;
    }

    // Validasi username dan password
    if (storedUser.name === username && storedUser.password === password) {
      alert("Login successful!");

      // Set status login ke localStorage
      localStorage.setItem("isLoggedIn", "true");

      // Arahkan ke halaman dashboard
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </div>
        </form>
        <div className="form-actions">
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="signup-button"
            style={{
              marginLeft: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
