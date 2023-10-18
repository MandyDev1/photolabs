import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import photos from "mocks/photos";
import topics from "mocks/topics";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="App">
      <HomeRoute
        topicData={topics}
        photoData={photos}
        onPhotoClick={(photo) => {
          setSelectedPhoto(photo);
          setIsModalOpen(true);
        }}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          onClose={() => setIsModalOpen(false)}
          selectedPhoto={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
