import React from "react";

// InfoBar is a static component that displays instructions on how to interact with the application
const InfoBar = () => {
  return (
    <div className='infobar-container'>
      <div>
        <span className='right-arrow' /> Wondering how to use the app?
      </div>
      <ul>
        <li>Select the query you want to run from the query selector below.</li>
        <li>Hit the 'Go' button.</li>
        <li>
          You should now be seeing the results of your query in a tabular mode.
          If not, contact us at support@atlan.com
        </li>
      </ul>
    </div>
  );
};

export default InfoBar;
