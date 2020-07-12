import React, { useState, useEffect } from "react";
import "../styles/favourites.css";
import axios from "axios";
import FavouriteCard from "./FavouriteCard";

function Favourites({ userID }) {
  const [favourites, setFavourites] = useState([]);

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
  }, []);

  return (
    <div className="favourite">
      {userID ? (
        <div className="favourite-cards">
          {favourites.map((favourite) => (
            <div className="favourite-card" key={favourite._id}>
              <FavouriteCard
                title={favourite.propertyListing.title}
                city={favourite.propertyListing.city}
                price={favourite.propertyListing.price}
                userID={userID}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Favourites;
