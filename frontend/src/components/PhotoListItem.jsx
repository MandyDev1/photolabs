import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <img src={profile} alt={`Profile of ${username}`} className="photo-list__user-profile" />
      <div className="photo-list__user-details">
        <p className="photo-list__user-info">{username}</p>
        <p className="photo-list__user-location">{location.city} {location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
