import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Select one specific photo to open modal
  const [likedPhotos, setLikedPhotos] = useState([]); // If this array isn't empty, display notification in the TopNavigationBar

  const onFavButtonClick = (photoId) => { // When click the FavButton of a photo, this function triggered
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };


  const onPhotoClick = (photo) => { // When a photo is selected, this function will run to get the modal open
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        likedPhotos={likedPhotos}
        onPhotoClick={onPhotoClick}
        onFavButtonClick={onFavButtonClick}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          onClose={() => setIsModalOpen(false)}
          selectedPhoto={selectedPhoto}
          likedPhotos={likedPhotos}
          onFavButtonClick={onFavButtonClick}
        />
      )}
    </div>
  );
};

export default App;
