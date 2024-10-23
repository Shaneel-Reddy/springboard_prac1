import React, { useState } from "react";
import "../css/LoginSignup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [profilePictureURL, setProfilePictureURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      address,
      phoneNumber,
      password,
      profilePictureURL,
    });
  };

  return (
    <>
      <div className="signup-container">
        <h1>Stock Bazaar</h1>
        <div className="signup-box">
          <h2>Create a New Account!</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Profile Picture URL"
            value={profilePictureURL}
            onChange={(e) => setProfilePictureURL(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">
            Register
          </button>
          <Link to="/login" className="login-link">
            Already have an account?
          </Link>
        </form>
      </div>
    </>
  );
}
