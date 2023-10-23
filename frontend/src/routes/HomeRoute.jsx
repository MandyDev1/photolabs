import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
import { useState } from "react";

const HomeRoute = ({ topics, photos, likedPhotos, onPhotoClick, onFavButtonClick }) => {
  // const [likedPhotos, setLikedPhotos] = useState([]);

  // const onFavButtonClick = (photoId) => {
  //   if (likedPhotos.includes(photoId)) {
  //     setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
  //   } else {
  //     setLikedPhotos([...likedPhotos, photoId]);
  //   }
  // };

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
