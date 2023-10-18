import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ dataForTopicList }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {dataForTopicList.map((topic) => (
        <TopicListItem
          key={topic.id}
          slug={topic.slug}
          title={topic.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
