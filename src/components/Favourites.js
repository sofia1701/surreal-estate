import React, { useState, useEffect } from "react";
import "../styles/favourites.css";
import axios from "axios";
import PropTypes from "prop-types";
import FavouriteCard from "./FavouriteCard";
import Alert from "./Alert";

function Favourites({ userID }) {
  const [favourites, setFavourites] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/Favourite?populate=propertyListing")
      .then((response) => {
        setFavourites(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [favourites]);

  const handleDeleteFavourite = (propertyId) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${propertyId}`)
      .then(() => {
        setAlert({
          message: "Property deleted.",
          isSuccess: true,
        });
      })
      .then(() => {
        setTimeout(() => setAlert({ message: "", isSuccess: false }), 2000);
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  return (
    <div className="favourite">
      <Alert message={alert.message} success={alert.isSuccess} />
      {userID ? (
        <div className="favourite-cards">
          {favourites.map((favourite) => (
            <div className="favourite-card" key={favourite._id}>
              <FavouriteCard
                _id={favourite._id}
                title={favourite.propertyListing.title}
                city={favourite.propertyListing.city}
                price={favourite.propertyListing.price}
                deleteFavourite={handleDeleteFavourite}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert-login">
          Please, login with Facebook to access your Favourites.
        </div>
      )}
    </div>
  );
}

Favourites.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Favourites;
