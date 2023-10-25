import React, { useReducer } from "react";
// import photos from "mocks/photos";
// import topics from "mocks/topics";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  likedPhotos: [],
  // photos: photos,
  // topics: topics
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  // SET_PHOTOS: 'SET_PHOTOS',
  // SET_TOPICS: 'SET_TOPICS',
};

const reducer = function(state, action) {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, likedPhotos: [...state.likedPhotos, action.payload.id] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, likedPhotos: state.likedPhotos.filter(id => id !== action.payload.id) };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, isModalOpen: true, selectedPhoto: action.payload };
  case ACTIONS.CLOSE_MODAL:
    return { ...state, isModalOpen: !state.isModalOpen, selectedPhoto: null };
  // case ACTIONS.SET_PHOTOS:
  //   return { ...state };
  // case ACTIONS.SET_TOPICS:
  //   return { ...state };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onFavButtonClick = (photoId) => {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const onPhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // const setPhotos = () => {
  //   dispatch({  type: ACTIONS.SET_PHOTOS });
  // };

  // const setTopics = () => {
  //   dispatch({ type: ACTIONS.SET_TOPICS });
  // };


  return {
    state, // This object contains the entire state of the application.
    onFavButtonClick, // Function to set the favourite(liked) photos.
    onPhotoClick, // Function to open modal when the user selects a photo.
    onClosePhotoDetailsModal, // Function to close the modal.
  };
};

export default useApplicationData;