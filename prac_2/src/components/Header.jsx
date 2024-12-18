import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <div className="header1">
      <div className="header">
        <div className="logo">Infosys Springboard</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </div>
  );
}
