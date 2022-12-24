import React from "react";
import "./Comment.css";

function Comment({ author, title, description, isHelpful, date, time }) {
  return (
    <div>
      <p>author {author}</p>
      <p>title :{title}</p>
      <p>description: {description}</p>
      <p>correct? {isHelpful ? "V" : "X"}</p>
      <p>date: {date}</p>
      <p>time: {time}</p>
    </div>
  );
}

export default Comment;
