import React from "react";
import uuid from "react-uuid";
import Codeblock from "../Codeblock/Codeblock";
import Comment from "../Comment/Comment";

function SnippetCard({
  author,
  title,
  description,
  code,
  language,
  solved,
  date,
  time,
  comments,
}) {
  return (
    <div className="flex-column-center">
      <p>author: {author}</p>
      <p>title: {title}</p>
      <p>description: {description}</p>
      {/* {code} */}
      <p>coding language: {language}</p>
      <Codeblock language={language} textToFormat={code} />
      <p>{solved ? "solved" : "not solved"}</p>
      {date} {time}
      <div className="snippet-comments">
        <h4>Answers</h4>
        {comments?.map((comment) => (
          <Comment key={uuid()} {...comment} snippetOwner={author} />
        ))}
      </div>
    </div>
  );
}

export default SnippetCard;
