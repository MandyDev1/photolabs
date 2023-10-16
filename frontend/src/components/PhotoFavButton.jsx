import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
