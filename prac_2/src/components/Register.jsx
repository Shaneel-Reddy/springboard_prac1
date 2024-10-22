import React from "react";
import Header from "./Header"; // Assuming you have a Header component
import "../App.css";

export default function Signup() {
  return (
    <>
      <Header />
      <div className="signup-container">
        <h1>Infosys SpringBoard</h1>
        <div className="signup-box">
          <h2>Create a New Account!</h2>
        </div>
        <form>
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Surname" required />
          <div className="dob1">
            <label htmlFor="dob">Date of birth</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <input type="radio" name="gender" value="Female" required /> Female
            <input type="radio" name="gender" value="Male" /> Male
          </div>
          <input
            type="text"
            placeholder="Mobile number or email address"
            required
          />
          <input type="password" placeholder="New password" required />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <a href="#" className="login-link">
            Already have an account?
          </a>
        </form>
      </div>
    </>
  );
}
