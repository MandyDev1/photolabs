import React, { useCallback } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ onFavButtonClick, photoId, isFavIconActive }) => {
  const handleonFavButtonClick = useCallback((e) => {
    e.stopPropagation();
    onFavButtonClick(photoId);
  });

  return (
    <div className="photo-list__fav-icon" onClick={handleonFavButtonClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavIconActive} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
