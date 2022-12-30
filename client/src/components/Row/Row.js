import React from "react";
import { Link } from "react-router-dom";

import uuid from "react-uuid";
function Row({ fields, id, searchTerm }) {
  return (
    <tr>
      {fields.map((value) => {
        if (value !== id)
          return (
            <td key={uuid()} className=" right-blue-border">
              <div className="flex-row">
                {typeof value === "string" ? value : value ? "yes" : "no"}
              </div>
            </td>
          );
        else return;
      })}
      <td>
        <div className="flex-row">
          <Link
            to={
              searchTerm === "questions" ? `/snippets/${id}` : `/profile/${id}`
            }
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default Row;
