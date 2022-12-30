import React from "react";
import uuid from "react-uuid";
import Row from "../Row/Row";

function Table({ data, searchTerm }) {
  const titles = data[0] ? Object.keys(data[0]) : [];
  console.log(searchTerm);
  // const path = serachTerm==="questions"?"/snippets/${}"
  return (
    <table>
      <tbody>
        <tr>
          {titles.map((value) => {
            return <td key={uuid()}>{value}</td>;
          })}
        </tr>
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
