import React from "react";
import { Link } from "react-router-dom";
import logo from "./nav-logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img data-testid="logo-id" className="logo" alt="logo" src={logo} />
      </Link>
      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className="navbar-links-item"
            data-testid="view-properties-id"
          >
            View Properties
          </Link>
        </li>
        <li>
          <Link
            to="/add-property"
            className="navbar-links-item"
            data-testid="add-property-id"
          >
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
}
