import React, { useState } from "react";

const QuerySelector = props => {
  const [resourceType, setResourceType] = useState("posts");
  const { fetchData } = props;

  const handleSelection = e => {
    setResourceType(e.target.value);
  };

  const getData = () => {
    if (fetchData) {
      fetchData(resourceType);
    }
  };

  return (
    <div>
      <span>
        SELECT * FROM
        <select onChange={handleSelection}>
          <option value='posts'>POSTS</option>
          <option value='comments'>COMMENTS</option>
        </select>
        <button onClick={getData}>Go</button>
      </span>
    </div>
  );
};

export default QuerySelector;
