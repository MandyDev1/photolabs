import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photo, onLikeToggle, onPhotoClick } = props;

  const handlePhotoClick = () => {
    if (onPhotoClick) {
      onPhotoClick(photo);
    }
  };

  return (
    <div className="photo-list__item" onClick={handlePhotoClick}>
      <PhotoFavButton onLikeToggle={() => onLikeToggle(photo.id)} />
      <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-list__image" />
      <img src={photo.user.profile} alt={`Profile of ${photo.user.username}`} className="photo-list__user-profile" />
      <div className="photo-list__user-details">
        <p className="photo-list__user-info">{photo.user.username}</p>
        <p className="photo-list__user-location">{photo.location.city} {photo.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
