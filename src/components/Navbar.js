import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import logo from "../styles/nav-logo.png";
import "../styles/navbar.css";

export default function Navbar({ onLogin, userID, picture, onLogout, name }) {
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
            <Link
              to="/properties"
              className="item"
              data-testid="view-properties-id"
            >
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
      <div className="facebook-container">
        {userID ? (
          <button
            onClick={onLogout}
            className="my-facebook-button-class"
            type="submit"
          >
            Welcome,
            <br />
            {name}
            <br />
            Sign Out
            <img src={picture} alt="profile" />
          </button>
        ) : (
          <FacebookLogin
            appId="651558712097637"
            fields="name,email,picture"
            callback={onLogin}
            cssClass="my-facebook-button-class"
          />
        )}
      </div>
    </>
  );
}

Navbar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
