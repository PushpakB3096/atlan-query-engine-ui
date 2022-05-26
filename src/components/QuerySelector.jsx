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
        {/* Currenly supports only SELECT query. In future, this needs to change to accommodate other types of queries */}
        <span className='query-box-item'>SELECT * FROM</span>
        <select
          className='query-box-item resource-selector'
          onChange={handleSelection}
        >
          {/* For adding more resources to query, add it in the list below */}
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
