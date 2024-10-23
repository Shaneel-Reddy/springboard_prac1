import React, { useState } from "react";
import "../App.css";

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email/Phone:", emailOrPhone);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h1>Infosys SpringBoard</h1>
      <div className="login-box">
        <h2>Log in to Infosys SpringBoard</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email-or-phone"
            placeholder="Enter Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log in</button>
          <a href="#" className="forgotten-account">
            Forgotten account?
          </a>
          <a href="#" className="signup-link">
            Sign up for Infosys Springboard
          </a>
        </form>
      </div>
    </div>
  );
}
