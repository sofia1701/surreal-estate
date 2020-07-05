import React from "react";
import PropTypes from "prop-types";
import houseLogo from "./house-logo.png";

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
      <div>
        <img
          data-testid="house-logo-id"
          className="house-logo"
          alt="logo"
          src={houseLogo}
        />
      </div>

      <div className="title-city">{`${title}, ${city}`}</div>
      <div className="type-select">{type}</div>
      <div className="bathroom-number">{bathrooms}</div>
      <div className="bedroom-number">{bedrooms}</div>
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
