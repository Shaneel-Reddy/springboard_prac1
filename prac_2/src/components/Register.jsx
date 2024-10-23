import React, { useState, useRef } from "react";
import Header from "./Header";
import "../App.css";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  //const firstNameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      surname,
      dob,
      gender,
      contact,
      password,
    });
    //firstNameRef.current.focus();
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <h1>Infosys SpringBoard</h1>
        <div className="signup-box">
          <h2>Create a New Account!</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            //ref={firstNameRef}
            required
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <div className="dob1">
            <label htmlFor="dob">Date of birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              required
            />{" "}
            Female
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Male
          </div>
          <input
            type="text"
            placeholder="Mobile number or email address"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
