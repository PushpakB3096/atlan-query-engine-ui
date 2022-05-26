import { useState } from "react";
import axios from "axios";

import QuerySelector from "./QuerySelector";
import DataTable from "./DataTable";
import InfoBar from "./InfoBar";
import { BASE_URL } from "../constants";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetches data based on the query/resource type
  const fetchData = async resourceType => {
    setIsLoading(true);
    const { data } = await axios.get(`${BASE_URL}/${resourceType || "posts"}`);
    setData(data);
    setIsLoading(false);
  };

  return (
    <div className='app-container'>
      <h1>Atlan Query Runner</h1>
      <InfoBar />
      <QuerySelector fetchData={fetchData} />
      <DataTable data={data} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
