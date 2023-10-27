import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import "./App.scss";

const App = () => {
  const {
    state,
    onFavButtonClick,
    onPhotoClick,
    onClosePhotoDetailsModal,
    onTopicClick
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        likedPhotos={state.likedPhotos}
        onPhotoClick={onPhotoClick}
        onFavButtonClick={onFavButtonClick}
        onTopicClick={onTopicClick}
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
