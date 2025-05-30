import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const res = await axios.post("http://127.0.0.1:8000/loginview/", {
        username,
        password,
      });
      if (res.status === 200) {
        alert("Login Successful");
        localStorage.setItem("name", username);
        localStorage.setItem("login", "true");
        setLoginSuccess(true);
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setErrorMessage("No User Found");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate("/");
    }
  }, [loginSuccess, navigate]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit">Login</button>
        <p>Don't Have a Account? <a class="reg" href="/registration">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;
