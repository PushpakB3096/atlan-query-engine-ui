import { useState, useEffect } from "react";

import { truncate, camelCaseToRegularCase } from "../utils/string";
import Spinner from "./Spinner";

const DataTable = props => {
  const [columns, setColumns] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);
  const { data, isLoading } = props;

  // This is for setting the column names present in the result that was fetched
  useEffect(() => {
    if (data.length) {
      // checking the first entry only because the structure of the data remains the same throughout
      const firstEntry = data[0];
      setColumns([]);
      for (let key in firstEntry) {
        // iterating through the object keys and adding them to the columns array
        setColumns(prevColumns => [...prevColumns, key]);
      }
    }
  }, [data, setColumns]);

  /**
   * 'columns' contain the list of object keys. This list is not in human-readable format. Hence, for UI purposes we need to parse
   * this. Camel-cased words needs to be converted to string of words separated by a space. Then, the spaced-words needs to be
   * converted to upper-case.
   * */
  useEffect(() => {
    const columnHeaders = columns.map(column => {
      const regularCased = camelCaseToRegularCase(column);
      return regularCased.toUpperCase();
    });
    setColumnHeaders(columnHeaders);
  }, [columns]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='table-wrapper'>
      <table className='table'>
        <tbody>
          <tr>
            {/* This displays the table headers */}
            {columnHeaders.map(column => (
              <th key={column} className='table-cell table-header'>
                {column}
              </th>
            ))}
          </tr>
          {/* Loop through the rows and display data */}
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
