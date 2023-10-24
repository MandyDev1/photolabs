import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import "./App.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";

const App = () => {
  const {
    state,
    onFavButtonClick,
    onPhotoClick,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        likedPhotos={state.likedPhotos}
        onPhotoClick={onPhotoClick}
        onFavButtonClick={onFavButtonClick}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
          likedPhotos={state.likedPhotos}
          onFavButtonClick={onFavButtonClick}
        />
      )}
    </div>
  );
};

export default App;
