import React from "react";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topicData, photoData }) => {
  return (
    <div className="home-route">
      <TopNavigation topicData={topicData} />
      <PhotoList dataForPhotoList={photoData} />
    </div>
  );
};

export default HomeRoute;
