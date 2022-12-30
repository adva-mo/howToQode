import React from "react";
import uuid from "react-uuid";
import Row from "../Row/Row";
import "./table.css";

function Table({ data, searchTerm }) {
  const titles = data[0] ? Object.keys(data[0]) : [];

  return (
    <table className="primary-box table-container">
      <thead>
        <tr>
          {titles.filter((value) => {
            if (value !== "_id")
              return (
                <td key={uuid()}>
                  <div className="flex-row ">
                    <p className="blue-btn title-container">{value}</p>
                  </div>
                </td>
              );
            else return false;
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((obj) => {
          return (
            <Row
              key={obj._id}
              fields={Object.values(obj)}
              searchTerm={searchTerm}
              id={obj._id}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
