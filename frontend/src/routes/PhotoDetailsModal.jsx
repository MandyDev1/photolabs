import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({ onClosePhotoDetailsModal, selectedPhoto, likedPhotos, onFavButtonClick }) => {
  console.log("Selected photo data:", selectedPhoto);

  if (!selectedPhoto) {
    return null;
  }

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton isFavIconActive={likedPhotos.includes(selectedPhoto.id)} onFavButtonClick={() => onFavButtonClick(selectedPhoto.id)} />
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
          photos={Object.values(selectedPhoto.similar_photos)}
          onFavButtonClick={onFavButtonClick}
          likedPhotos={likedPhotos}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
