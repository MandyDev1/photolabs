import React, { useEffect } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ onClose, selectedPhoto }) => {
  console.log("Selected photo data:", selectedPhoto);

  if (!selectedPhoto) {
    return null;
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton />
        <img
          src={selectedPhoto.urls.regular}
          alt={`Photo by ${selectedPhoto.user.username}`}
          className="photo-details-modal__image"
        />
        <img
          src={selectedPhoto.user.profile}
          alt={`Profile of ${selectedPhoto.user.username}`}
          className="photo-details-modal__photographer-profile"
        />
        <div className="photo-details-modal__photographer-details">
          <p className="photo-details-modal__photographer-info">
            {selectedPhoto.user.username}
          </p>
          <p className="photo-details-modal__photographer-location">
            {selectedPhoto.location.city} {selectedPhoto.location.country}
          </p>
        </div>
        <h3>Similar Photos</h3>
        <PhotoList
          dataForPhotoList={Object.values(selectedPhoto.similarPhotos)}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
