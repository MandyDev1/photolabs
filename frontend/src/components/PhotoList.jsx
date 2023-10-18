import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ dataForPhotoList, onLikeToggle }) => {
  return (
    <div className="photo-list">
      {dataForPhotoList.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
          onLikeToggle={onLikeToggle}
        />
      ))}
    </div>
  );
};

export default PhotoList;
