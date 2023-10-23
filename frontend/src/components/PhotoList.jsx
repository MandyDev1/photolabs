import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, likedPhotos, onFavButtonClick, onPhotoClick }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavIconActive={likedPhotos.includes(photo.id)}
          onFavButtonClick={onFavButtonClick}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </div>
  );
};

export default PhotoList;
