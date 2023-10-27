import React from "react";
import TopNavigation from "components/TopNavigation";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, likedPhotos, onPhotoClick, onFavButtonClick, onTopicClick }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos} onTopicClick={onTopicClick} />
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
