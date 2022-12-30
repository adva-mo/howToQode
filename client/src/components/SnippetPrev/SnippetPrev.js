import React from "react";
import "./SnippetPrev.css";
import { Link } from "react-router-dom";

function SnippetPrev({ created_At, title, solved, answers, _id }) {
  return (
    <div className="flex-row primary-box">
      <div>{created_At}</div>
      <div>{title}</div>
      <div>{solved ? "solved" : "NOT solved"}</div>
      <div>answers: {answers?.length}</div>
      <Link to={`/snippets/${_id}`}>read more</Link>
    </div>
  );
}

export default SnippetPrev;
