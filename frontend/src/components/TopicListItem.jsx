import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { id, slug, title, onTopicClick } = props;
  
  return (
    <div className="topic-list__item">
      <h3 onClick={() => onTopicClick(id)}>{title}</h3>
    </div>
  );
};

export default TopicListItem;
