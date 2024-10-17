import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <h1>Infosys Springboard</h1>
      </div>
      <hr></hr>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </>
  );
}
