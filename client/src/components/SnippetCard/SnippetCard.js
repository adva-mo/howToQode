import React from "react";
// import uuid from "react-uuid";
import Codeblock from "../Codeblock/Codeblock";
import Comment from "../Comment/Comment";
import Answer from "../Answer/Answer";

function SnippetCard({
  author,
  title,
  description,
  code,
  language,
  solved,
  date,
  time,
  answers,
}) {
  console.log(answers);
  return (
    <div className="flex-column-center snippet-card">
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
        {answers?.map((answer) => (
          <Answer key={answer._id} {...answer} snippetOwner={author} />
        ))}
      </div>
    </div>
  );
}

export default SnippetCard;
