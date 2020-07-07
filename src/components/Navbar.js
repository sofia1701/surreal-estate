import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/nav-logo.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="logo-container">
        <Link to="/" className="logo">
          <img
            data-testid="logo-id"
            className="logo-img"
            alt="logo"
            src={logo}
          />
        </Link>
      </div>
      <div className="navbar">
        <ul className="menu">
          <li>
            <Link to="/" className="item" data-testid="view-properties-id">
              View Properties
            </Link>
          </li>
          <li>
            <Link
              to="/add-property"
              className="item"
              data-testid="add-property-id"
            >
              Add a Property
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
