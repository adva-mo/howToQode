import React from "react";
import "./SnippetPrev.css";

function SnippetPrev({ created_At, title, solved, answers }) {
  return (
    <div className="flex">
      <div>{created_At}</div>
      <div>{title}</div>
      <div>{solved ? "solved" : "NOT solved"}</div>
      <div>answers: {answers?.length}</div>
    </div>
  );
}

export default SnippetPrev;
