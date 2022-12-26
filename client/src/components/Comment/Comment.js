import React from "react";
import "./Comment.css";

function Comment({ author, title, description, isHelpful, date, time, likes }) {
  return (
    <div className=" primary-box comment-container align-left">
      <p>author {author}</p>
      <div className="flex-row">
        <p>date: {date}</p>
        <p>likes {likes?.length}</p>
      </div>
      <p>description: {description}</p>
    </div>
  );
}

export default Comment;
