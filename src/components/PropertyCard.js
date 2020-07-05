import React from "react";
import PropTypes from "prop-types";
import { FaBed, FaBath, FaFortAwesome } from "react-icons/fa";

export default function PropertyCard({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) {
  return (
    <div>
      <div className="logo-background">
        <FaFortAwesome className="house-logo" data-testid="house-logo-id" />
      </div>

      <div className="title-city">{`${title}, ${city}`}</div>
      <div className="type-select">{type}</div>
      <div className="bathroom-number">
        <FaBath />
        {bathrooms}
      </div>
      <div className="bedroom-number">
        <FaBed />
        {bedrooms}
      </div>
      <div className="price">{`${price} £`}</div>
      <div className="mail-button">
        <a className="mail-button-text" href={`mailto:${email}`}>
          Email
        </a>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
