import React, { useEffect } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ onClose, selectedPhoto }) => {
  useEffect(() => {
    console.log("Selected photo data:", selectedPhoto);
  }, [selectedPhoto]);

  if (!selectedPhoto) {
    return null;
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
