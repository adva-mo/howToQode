import React from "react";
import "./Answer.css";

function Answer({
  author,
  title,
  description,
  isHelpful,
  date,
  time,
  comments,
}) {
  console.log(comments);
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

export default Answer;
