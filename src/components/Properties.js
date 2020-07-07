import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import "../styles/properties.css";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing/")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then((response) => {
        setProperties(response.data);
      });
  }, [search]);

  return (
    <>
      <Sidebar />
      <div className="property-card">
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="cards">
          {properties.map((property) => (
            <div className="card" key={property._id}>
              <PropertyCard
                title={property.title}
                city={property.city}
                type={property.type}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
                price={property.price}
                email={property.email}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
