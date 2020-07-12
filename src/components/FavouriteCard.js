import React from "react";
import PropTypes from "prop-types";
import { FaFortAwesome } from "react-icons/fa";

export default function FavouriteCard({ title, city, price }) {
  return (
    <div>
      <div className="logo-background">
        <FaFortAwesome className="house-logo" data-testid="house-logo-id" />
      </div>
      <div className="title-city">{`${title}, ${city}`}</div>
      <div className="price">{`${price} £`}</div>
    </div>
  );
}

FavouriteCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
