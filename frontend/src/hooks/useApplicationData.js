import React, { useReducer, useEffect } from "react";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  likedPhotos: [],
  photoData: [],
  topicData: [],
  selectedTopicId: null
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC'
};

const reducer = function (state, action) {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, likedPhotos: [...state.likedPhotos, action.payload.id] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, likedPhotos: state.likedPhotos.filter(id => id !== action.payload.id) };
  case ACTIONS.SET_SELECTED_PHOTO:
    return { ...state, isModalOpen: true, selectedPhoto: action.payload };
  case ACTIONS.CLOSE_MODAL:
    return { ...state, isModalOpen: !state.isModalOpen, selectedPhoto: null };
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.payload };
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.payload };
  case ACTIONS.SET_SELECTED_TOPIC:
    return { ...state, selectedTopicId: action.payload.id };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  useEffect(() => {
    if (state.selectedTopicId) {
      fetch(`/api/topics/photos/${state.selectedTopicId}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
    }
  }, [state.selectedTopicId]);


  const onTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { id: topicId } });
  };

  const onFavButtonClick = (photoId) => {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const onPhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };


  return {
    state, // This object contains the entire state of the application.
    onFavButtonClick, // Function to set the favourite(liked) photos.
    onPhotoClick, // Function to open modal when the user selects a photo.
    onClosePhotoDetailsModal, // Function to close the modal.
    onTopicClick // Handler function triggered when a user clicks on a specific topic to fetch associated photos.
  };
};

export default useApplicationData;