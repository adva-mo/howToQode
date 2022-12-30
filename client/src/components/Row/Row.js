import React from "react";
import { Link } from "react-router-dom";

import uuid from "react-uuid";
function Row({ fields, id, searchTerm }) {
  // console.log(fields);

  return (
    <tr>
      {fields.map((value) => {
        if (value !== id)
          return (
            <td key={uuid()}>
              {typeof value === "string" ? value : value ? "yes" : "no"}
            </td>
          );
        else return;
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
