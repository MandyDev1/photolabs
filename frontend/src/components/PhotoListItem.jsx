import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photo, isFavIconActive, onFavButtonClick, onPhotoClick } = props;

  return (
    <div className="photo-list__item" onClick={() => onPhotoClick(photo)}>
      <PhotoFavButton onFavButtonClick={() => onFavButtonClick(photo.id)} isFavIconActive={isFavIconActive} />
      <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt={`Profile of ${photo.user.username}`} className="photo-list__user-profile" />
        <p className="photo-list__user-info">{photo.user.username}</p>
        <p className="photo-list__user-location">{photo.location.city} {photo.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
