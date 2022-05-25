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
    <div className='query-selector-container'>
      <div className='query-box-content'>
        <span className='query-box-item'>SELECT * FROM</span>
        <select
          className='query-box-item resource-selector'
          onChange={handleSelection}
        >
          <option value='posts'>POSTS</option>
          <option value='comments'>COMMENTS</option>
        </select>
        <button className='btn go-btn query-box-item' onClick={getData}>
          Go
        </button>
      </div>
    </div>
  );
};

export default QuerySelector;
