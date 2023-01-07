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
          {
            // eslint-disable-next-line
            titles.map((value) => {
              if (value !== "_id")
                return (
                  <td
                    key={uuid()}
                    className={
                      value === "title"
                        ? "right-blue-border first-td"
                        : "right-blue-border"
                    }
                  >
                    <div className="flex-row ">
                      <p className="blue-btn title-container">{value}</p>
                    </div>
                  </td>
                );
            })
          }
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
