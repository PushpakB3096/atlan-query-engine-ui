import { useState } from "react";
import axios from "axios";

import QuerySelector from "./QuerySelector";
import DataTable from "./DataTable";
import InfoBar from "./InfoBar";
import { BASE_URL } from "../constants";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = resourceType => {
    axios
      .get(`${BASE_URL}/${resourceType || "posts"}`)
      .then(data => setData(data.data));
  };

  return (
    <div className='app-container'>
      <h1>Atlan Query Runner</h1>
      <InfoBar />
      <QuerySelector fetchData={fetchData} />
      <DataTable data={data} />
    </div>
  );
};

export default Dashboard;
