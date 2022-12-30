import React from "react";
import uuid from "react-uuid";
import Row from "../Row/Row";
import "./table.css";

function Table({ data, searchTerm }) {
  const titles = data[0] ? Object.keys(data[0]) : [];
  console.log(searchTerm);
  // const path = serachTerm==="questions"?"/snippets/${}"
  return (
    <table className="primary-box table-container">
      <thead>
        <tr>
          {titles.map((value) => {
            if (value !== "_id")
              return (
                // <div className="blue-btn">
                <td key={uuid()}>
                  <div className="flex-row ">
                    <p className="blue-btn title-container">{value}</p>
                  </div>
                </td>
                // </div>
              );
          })}
        </tr>
      </thead>
      <tbody>
        {/* <Row fields={titles} /> */}
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
