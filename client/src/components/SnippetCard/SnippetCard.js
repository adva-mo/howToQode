import React, { useEffect, useState } from "react";
import Codeblock from "../Codeblock/Codeblock";
import Answer from "../Answer/Answer";
import { useNavigate } from "react-router-dom";
import NewAnswerForm from "../NewAnswerForm/NewAnswerForm";
import "./SnippetCard.css";
import axios from "axios";

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
  const [authorName, setauthorName] = useState("");
  const [isSolved, setisSolved] = useState(solved);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/users/name/${author}`)
      .then(({ data }) => setauthorName(data))
      .catch((e) => console.log(e));
  }, [author]);

  return (
    <div className="flex-column-center snippet-card">
      <div className="primary-box snippet-info-container">
        <h2 className="turkiz-bottom-border margin-bottom-2">{title}</h2>
        <div className="flex-row margin-bottom-2">
          <div>
            DATE <i className="fa-solid fa-calendar-days turkiz-font"></i>
            <br />
            <p className="profile-link">{date}</p>
          </div>
          <div>
            ASKED BY <i className="fa-regular fa-user turkiz-font"></i>
            <br />
            <p
              id={author}
              onClick={({ target }) => {
                if (authorName === "deleted user") return;
                navigate(`/profile/${target.id}`);
              }}
              className="profile-link"
            >
              {/* {author} */}
              {authorName}
            </p>
          </div>
          <div>
            SOLVED
            <i className="fa-solid fa-question turkiz-font"></i>
            <br />
            <p>
              {isSolved ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-xmark turkiz-font" />
              )}
            </p>
          </div>
        </div>
        <p className="margin-bottom-2">
          coding language:
          <span className="blue-font">{" " + language}</span>
        </p>
        <p className="align-left margin-bottom-2 ">
          <strong className="title-font">description: </strong>
          {description + " "}
        </p>
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
            setisSolved={setisSolved}
          />
        ))}
        <NewAnswerForm setAnswersToDisplay={setAnswersToDisplay} />
      </div>
    </div>
  );
}

export default SnippetCard;
