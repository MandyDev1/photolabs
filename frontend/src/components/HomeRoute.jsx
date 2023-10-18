import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";
import { useState } from "react";

const HomeRoute = ({ topicData, photoData, onLikeToggle }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const handlePhotoLikeToggle = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter(id => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topicData={topicData} likedPhotos={likedPhotos} />
      <PhotoList dataForPhotoList={photoData} onLikeToggle={handlePhotoLikeToggle} />
    </div>
  );
};

export default HomeRoute;
