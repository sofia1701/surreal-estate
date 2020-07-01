import React from "react";
import logo from "./nav-logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" alt="logo" src={logo} />
      <ul className="navbar-links">
        <li>View Properties</li>
        <li>Add a Property</li>
      </ul>
    </div>
  );
}
