import React, { useState } from "react";

const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState([]);

  const onFavButtonClick = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  const onPhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const state = {
    isModalOpen,
    selectedPhoto,
    likedPhotos,
  };

  return {
    state, // This object will contain the entire state of the application.
    onFavButtonClick, // Can be used to set the favourite(liked) photos.
    onPhotoClick, // Can be used when the user selects a photo to open modal.
    onClosePhotoDetailsModal, // Can be used to close the modal.
  };
};

export default useApplicationData;