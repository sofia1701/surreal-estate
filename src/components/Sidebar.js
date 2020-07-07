import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

export default function Sidebar() {
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <p className="sidebar-title">Filter by city</p>
      <div className="items">
        <Link
          to={buildQueryString("query", { city: "Manchester" })}
          className="side-item"
        >
          Manchester
        </Link>
        <Link
          to={buildQueryString("query", { city: "Leeds" })}
          className="side-item"
        >
          Leeds
        </Link>
        <Link
          to={buildQueryString("query", { city: "Sheffield" })}
          className="side-item"
        >
          Sheffield
        </Link>
        <Link
          to={buildQueryString("query", { city: "Liverpool" })}
          className="side-item"
        >
          Liverpool
        </Link>
      </div>
      <p className="sidebar-title">Sort by</p>
      <div className="items">
        <Link to={buildQueryString("sort", { price: 1 })} className="side-item">
          Price Ascending
        </Link>
        <Link
          to={buildQueryString("sort", { price: -1 })}
          className="side-item"
        >
          Price Descending
        </Link>
      </div>
    </div>
  );
}
