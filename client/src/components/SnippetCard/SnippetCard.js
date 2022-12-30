import React, { useState } from "react";
import Codeblock from "../Codeblock/Codeblock";
import Answer from "../Answer/Answer";
import { useNavigate } from "react-router-dom";
import NewAnswerForm from "../NewAnswerForm/NewAnswerForm";

function SnippetCard({
  author,
  title,
  description,
  code,
  language,
  solved,
  date,
  answers,
  _id,
}) {
  const navigate = useNavigate();
  const [answersToDisplay, setAnswersToDisplay] = useState(answers);
  return (
    <div className="flex-column-center snippet-card">
      <div className="primary-box ">
        <h2 className="turkiz-bottom-border">{title}</h2>
        <div className="flex-row">
          <div>
            DATE
            <i className="fa-solid fa-calendar-days turkiz-font"></i>
            <br />
            <p className="profile-link">{date}</p>
          </div>
          <div>
            ASKED BY
            <i className="fa-regular fa-user turkiz-font"></i>
            <br />
            <p
              onClick={({ target }) => {
                console.log(target.textContent);
                navigate(`/profile/${target.textContent}`);
              }}
              className="profile-link"
            >
              {author}
            </p>
          </div>
          <div>
            SOLVED
            <i className="fa-solid fa-xmark turkiz-font" />
            {/* //todo change icon */}
            <br />
            <p>{solved ? "YES" : "NO"}</p>
          </div>
        </div>
        <p>coding language: {language}</p>
        <h3 className="align-left">description: {description}</h3>
        <Codeblock language={language} textToFormat={code} />
      </div>

      <div className="snippet-comments primary-box flex-column-center">
        <h4>{answersToDisplay.length} Answers</h4>
        {answersToDisplay?.map((answer) => (
          <Answer
            key={answer._id}
            {...answer}
            snippetOwner={author}
            snippetId={_id}
          />
        ))}
        <NewAnswerForm setAnswersToDisplay={setAnswersToDisplay} />
      </div>
    </div>
  );
}

export default SnippetCard;
