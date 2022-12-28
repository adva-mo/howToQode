import React from "react";
// import uuid from "react-uuid";
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
  setIsUpdated,
  _id,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex-column-center snippet-card">
      <div className="primary-box ">
        <h2 className="turkiz-bottom-border">{title}</h2>
        <div className="flex-row">
          <div>
            <i className="fa-solid fa-calendar-days turkiz-font"></i>
            <br />
            <p className="profile-link">{date}</p>
            {/* {date} */}
          </div>
          <div>
            <i className="fa-regular fa-user turkiz-font"></i>
            <br />
            <p
              onClick={({ target }) => {
                console.log(target.textContent);
                // const id = target.value;
                navigate(`/profile/${target.textContent}`);
              }}
              className="profile-link"
            >
              {author}
            </p>
          </div>
          <p>
            {solved ? (
              <>
                <i className="fa-solid fa-check turkiz-font" />
                SOLVED
              </>
            ) : (
              <>
                <i className="fa-solid fa-xmark turkiz-font" />
                <br />
                NOT SOLVED
              </>
            )}
          </p>
          {/* <p>{solved ? "solved" : "not solved"}</p> */}
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
        <NewAnswerForm />
      </div>
    </div>
  );
}

export default SnippetCard;
