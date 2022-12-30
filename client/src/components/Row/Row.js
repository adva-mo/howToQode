import React from "react";
import { Link } from "react-router-dom";

import uuid from "react-uuid";
function Row({ fields, id, searchTerm }) {
  console.log(searchTerm);
  // console.log(id);

  // const path =
  //   searchTerm === "questions" ? `/snippets/${id}` : `/profile/${id}`;

  // console.log(path);

  return (
    <tr>
      {fields.map((value) => {
        return <td key={uuid()}>{value}</td>;
      })}
      <td>
        <Link
          to={searchTerm === "questions" ? `/snippets/${id}` : `/profile/${id}`}
        >
          read more
        </Link>
      </td>
    </tr>
  );
}

export default Row;
