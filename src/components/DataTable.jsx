import { useState, useEffect } from "react";

import { truncate } from "../utils/string";

const DataTable = props => {
  const [columns, setColumns] = useState([]);
  const { data } = props;

  useEffect(() => {
    if (data.length) {
      const firstEntry = data[0];
      setColumns([]);
      for (let key in firstEntry) {
        setColumns(prevColumns => [...prevColumns, key]);
      }
    }
  }, [data, setColumns]);

  return (
    <div>
      <table className='table'>
        <tbody>
          <tr>
            {columns.map(column => (
              <th key={column} className='table-cell'>
                {column}
              </th>
            ))}
          </tr>
          {data.map(row => {
            return (
              <tr key={row.id}>
                {columns.map(col => {
                  return (
                    <td key={col} className='table-cell table-row'>
                      {truncate(row[col])}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
