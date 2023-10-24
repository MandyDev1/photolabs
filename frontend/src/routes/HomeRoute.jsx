import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, likedPhotos, onPhotoClick, onFavButtonClick }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos} />
      <PhotoList
        photos={photos}
        onFavButtonClick={onFavButtonClick}
        onPhotoClick={onPhotoClick}
        likedPhotos={likedPhotos}
      />
    </div>
  );
};

export default HomeRoute;
