import React from "react";
import "../css/LoginSignup.css";
export default function Login() {
  return (
    <>
      <div className="login-container">
        <h1>Infosys SpringBoard</h1>
        <div className="login-box">
          <h2>Log in to Infosys SpringBoard</h2>
          <form>
            <input
              type="text"
              id="email-or-phone"
              placeholder="Enter Email or Phone Number"
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
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
    </>
  );
}
