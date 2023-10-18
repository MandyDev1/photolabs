import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile, onLikeToggle, onPhotoClick } = props;

  const handlePhotoClick = () => {
    if (onPhotoClick) {
      onPhotoClick(id);
    }
  };

  return (
    <div className="photo-list__item" onClick={handlePhotoClick}>
      <PhotoFavButton onLikeToggle={() => onLikeToggle(id)} />
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
