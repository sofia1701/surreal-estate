import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
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

  return (
    <div className="property-card">
      <h3 className="page-title">Properties</h3>
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
  );
}
