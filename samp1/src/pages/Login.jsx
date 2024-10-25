import React, { useRef, useState } from "react";
import "../css/LoginSignup.css";
import { Link } from "react-router-dom";

export default function Login() {
  const emailOrPhoneRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const validateEmailOrPhone = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    return emailPattern.test(input) || phonePattern.test(input);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    return password.length >= minLength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailOrPhone = emailOrPhoneRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!emailOrPhone || !password) {
      setError("Both fields are required.");
      return;
    }

    if (!validateEmailOrPhone(emailOrPhone)) {
      setError("Enter a valid email or 10-digit phone number.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");
    console.log({ emailOrPhone, password });
  };

  return (
    <>
      <div className="login-container">
        <h1>TradeQuest</h1>
        <div className="login-box">
          <h2>Log in to TradeQuest</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email-or-phone"
              placeholder="Enter Email or Phone Number"
              ref={emailOrPhoneRef}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              ref={passwordRef}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Log in</button>
            <Link to="/forgot-password" className="forgotten-account">
              Forgotten account?
            </Link>
            <Link to="/signup" className="signup-link">
              Sign up for TradeQuest
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
