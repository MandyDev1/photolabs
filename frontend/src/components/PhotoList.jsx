import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ dataForPhotoList, onLikeToggle, onPhotoClick }) => {
  console.log("Photolist:", dataForPhotoList);
  return (
    <div className="photo-list">
      {dataForPhotoList.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          onLikeToggle={onLikeToggle}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </div>
  );
};

export default PhotoList;
