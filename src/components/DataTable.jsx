import { useState, useEffect } from "react";

import { truncate, camelCaseToRegularCase } from "../utils/string";

const DataTable = props => {
  const [columns, setColumns] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);
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

  useEffect(() => {
    const columnHeaders = columns.map(column => {
      const regularCased = camelCaseToRegularCase(column);
      return regularCased.toUpperCase();
    });
    setColumnHeaders(columnHeaders);
  }, [columns]);

  return (
    <div className='table-wrapper'>
      <table className='table'>
        <tbody>
          <tr>
            {columnHeaders.map(column => (
              <th key={column} className='table-cell table-header'>
                {column}
              </th>
            ))}
          </tr>
          {data.map(row => {
            return (
              <tr key={row.id} className='table-row'>
                {columns.map(col => {
                  return (
                    <td key={col} className='table-cell'>
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
