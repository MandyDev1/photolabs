import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const { id, slug, title } = props;
  
  return (
    <div className="topic-list__item">
      {/* <h3>{slug}</h3> */}
      <h3>{title}</h3>
    </div>
  );
};

export default TopicListItem;
