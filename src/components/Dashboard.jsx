import { useState } from "react";
import axios from "axios";

import QuerySelector from "./QuerySelector";
import DataTable from "./DataTable";
import { BASE_URL } from "../constants";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchData = resourceType => {
    axios
      .get(`${BASE_URL}/${resourceType || "posts"}`)
      .then(data => setData(data.data));
  };

  return (
    <div>
      <h1>Atlan Query Runner</h1>
      <QuerySelector fetchData={fetchData} />
      <DataTable data={data} />
    </div>
  );
};

export default Dashboard;
