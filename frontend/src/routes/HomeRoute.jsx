import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
import { useState } from "react";

const HomeRoute = ({ topicData, photoData, onPhotoClick }) => {
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
      <TopNavigation topicData={topicData} likedPhotos={likedPhotos} />
      <PhotoList
        dataForPhotoList={photoData}
        onLikeToggle={handlePhotoLikeToggle}
        onPhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
