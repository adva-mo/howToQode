import React from "react";
import Row from "../Row/Row";

function Table({ data }) {
  const titles = data[0] ? Object.keys(data[0]) : [];
  //   console.log(data);

  return (
    <table>
      <tbody>
        <Row fields={titles} />
        {data?.map((obj) => {
          return <Row key={obj._id} fields={Object.values(obj)} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
