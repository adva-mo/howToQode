import React from "react";
// import uuid from "react-uuid";
import Codeblock from "../Codeblock/Codeblock";
// import Comment from "../Comment/Comment";
import Answer from "../Answer/Answer";

function SnippetCard({
  author,
  title,
  description,
  code,
  language,
  solved,
  date,
  answers,
  setIsUpdated,
  _id,
}) {
  return (
    <div className="flex-column-center snippet-card">
      <div className="primary-box">
        <h2>title: {title}</h2>
        <div className="flex-row">
          <p>{date}</p>
          <p>asked by: {author}</p>
          <p>{solved ? "solved" : "not solved"}</p>
        </div>
        <p>coding language: {language}</p>
        {/* {space} */}
        <h3 className="align-left">description: {description}</h3>
        <Codeblock language={language} textToFormat={code} />
      </div>

      <div className="snippet-comments primary-box flex-column-center">
        <h4>{answers.length} Answers</h4>
        {answers?.map((answer) => (
          <Answer
            key={answer._id}
            {...answer}
            snippetOwner={author}
            setIsUpdated={setIsUpdated}
            snippetId={_id}
          />
        ))}
      </div>
    </div>
  );
}

export default SnippetCard;
