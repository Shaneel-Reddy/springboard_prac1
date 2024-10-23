import React, { useState } from "react";
import "../css/LoginSignup.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ emailOrPhone, password });
  };

  return (
    <>
      <div className="login-container">
        <h1>Stock Bazaar</h1>
        <div className="login-box">
          <h2>Log in to Stock Bazaar</h2>
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
            <Link to="/forgot-password" className="forgotten-account">
              Forgotten account?
            </Link>
            <Link to="/signup" className="signup-link">
              Sign up for Stock Bazaar
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
