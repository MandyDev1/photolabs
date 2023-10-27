import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, likedPhotos, onTopicClick }) => {
  const hasLikedPhotos = likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      <FavBadge isFavPhotoExist={hasLikedPhotos} />
    </div>
  );
};

export default TopNavigation;
