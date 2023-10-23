import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
import { useState } from "react";

const HomeRoute = ({ topics, photos, onPhotoClick }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const handlePhotoLikeToggle = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  const handlePhotoClick = (photo) => {
    if (onPhotoClick) {
      onPhotoClick(photo);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} likedPhotos={likedPhotos} />
      <PhotoList
        photos={photos}
        onLikeToggle={handlePhotoLikeToggle}
        onPhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
