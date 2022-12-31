import React, { useContext, useState } from "react";
import "./Answer.css";
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";
import { useNavigate } from "react-router-dom";
import currentLoggedUser from "../../context/loggedUserContext";
import axios from "axios";
import uuid from "react-uuid";

function Answer({
  author,
  description,
  isHelpful,
  createdAt,
  comments,
  _id,
  snippetId,
  likes,
}) {
  const [NumOfLikes, setNumOfLikes] = useState(likes.length);
  const [showComments, setshowComments] = useState(false);
  const [answerComments, setAnswerComments] = useState(comments);
  const { loggedUser } = useContext(currentLoggedUser);
  const [isLoggedUserLiked, setisLoggedUserLiked] = useState(
    likes.includes(loggedUser)
  );

  const navigate = useNavigate();

  const addLike = async () => {
    console.log("add like");
    try {
      await axios.post(`http://localhost:3001/answers/${snippetId}/confirm`, {
        answerId: _id,
        userid: loggedUser,
      });
      setNumOfLikes((prev) => (prev += 1));
      setisLoggedUserLiked((prev) => !prev);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="answer-container primary-box flex-column-center">
      <p> {description}</p>

      <p className="turkiz-bottom-border">correct? {isHelpful ? "V" : "X"}</p>
      <div className="flex-row-around">
        <div>
          <i className="fa-solid fa-calendar-days turkiz-font"></i>
          <p>{createdAt}</p>
        </div>
        <div>
          <i className="fa-regular fa-user turkiz-font"></i>
          <p
            className="profile-link"
            onClick={({ target }) => {
              navigate(`/profile/${target.textContent}`);
            }}
          >
            {author}
          </p>
        </div>
        <div>
          <i className="fa-regular fa-comment turkiz-font"></i>
          <br />
          <p>
            {answerComments.length}

            <button
              className="show-comment-btn"
              onClick={() => setshowComments((prev) => !prev)}
            >
              {!showComments ? (
                <i className="fa-solid fa-caret-down"></i>
              ) : (
                <i className="fa-solid fa-sort-up"></i>
              )}
            </button>
          </p>
        </div>
        <div>
          <i
            className={
              isLoggedUserLiked
                ? "fa-solid fa-thumbs-up turkiz-font"
                : "fa-regular fa-thumbs-up turkiz-font"
            }
            onClick={
              loggedUser
                ? isLoggedUserLiked
                  ? () => {}
                  : () => addLike()
                : () => {
                    alert("sign in to add likes!");
                  }
              // isLoggedUserLiked  ? () => {} : () => addLike()
            }
          ></i>{" "}
          <br />
          <p>{NumOfLikes}</p>
        </div>
      </div>

      {showComments && (
        <>
          comments
          {answerComments.map((comment) => (
            <Comment key={uuid()} {...comment} />
          ))}
        </>
      )}

      <AddComment
        answerId={_id}
        snippetId={snippetId}
        setAnswerComments={setAnswerComments}
      />
    </div>
  );
}

export default Answer;
