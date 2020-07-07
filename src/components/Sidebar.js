import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <p className="sidebar-title">Filter by city</p>
      <div className="items">
        <Link className="side-item" to={`/?query={"city": "Manchester"}`}>
          Manchester
        </Link>
        <Link className="side-item" to={`/?query={"city": "Leeds"}`}>
          Leeds
        </Link>
        <Link className="side-item" to={`/?query={"city": "Sheffield"}`}>
          Sheffield
        </Link>
        <Link className="side-item" to={`/?query={"city": "Liverpool"}`}>
          Liverpool
        </Link>
      </div>
    </div>
  );
}
