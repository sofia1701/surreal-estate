import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import "../styles/properties.css";

export default function Properties({ userID, favourites }) {
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
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    if (favourites.includes(propertyId)) {
      setAlert({
        message: "Property has already been saved as favourite.",
        isSuccess: true,
      });
    } else {
      axios
        .post("http://localhost:4000/api/v1/Favourite", {
          propertyListing: propertyId,
          fbUserId: userID,
        })
        .then((response) => console.log(response))
        .then(favourites.push(propertyId))

        .then(() => {
          setAlert({
            message: "Property saved in favourites.",
            isSuccess: true,
          });
        })
        .then(() => {
          setTimeout(
            () =>
              setAlert({
                message: "",
                isSuccess: false,
              }),
            2000
          );
        })
        .catch(() => {
          setAlert({
            message: "Server error. Please try again later.",
            isSuccess: false,
          });
        });
    }
  };

  return (
    <>
      <Sidebar />
      <div className="property-card">
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="cards">
          {properties.map((property) => (
            <div className="card" key={property._id}>
              <PropertyCard
                _id={property._id}
                title={property.title}
                city={property.city}
                type={property.type}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
                price={property.price}
                email={property.email}
                userID={userID}
                onSaveProperty={handleSaveProperty}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  favourites: PropTypes.array.isRequired,
};
