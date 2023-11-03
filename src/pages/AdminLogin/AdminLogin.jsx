import React from "react";
import { useState } from "react";
import * as api from "../../api";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import { useEffect } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      navigate("/uploadVideo");
    }
  }, []);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    const data = await api.adminLogin({
      email,
      password,
    });
    localStorage.setItem("Token", data.data.result);
    navigate("/uploadVideo");
  };

  return (
    <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <form onSubmit={handleAdminLogin}>
          <h2>Admin Login</h2>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        <h2>&nbsp;</h2>
      </div>
    </div>
  );
};

export default AdminLogin;
