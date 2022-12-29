import React, { useContext, useEffect, useState } from "react";
import "./Answer.css";
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";
import { useNavigate } from "react-router-dom";
import currentLoggedUser from "../../context/loggedUserContext";
import axios from "axios";

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
  const navigate = useNavigate();
  const { loggedUser } = useContext(currentLoggedUser);
  const [isLoggedUserLiked, setisLoggedUserLiked] = useState(
    likes.includes(loggedUser)
  );

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
            {comments.length}

            <button
              className="show-comment-btn"
              onClick={() => setshowComments((prev) => !prev)}
            >
              {!showComments ? (
                <i className="fa-solid fa-caret-down"></i>
              ) : (
                <i class="fa-solid fa-sort-up"></i>
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
            onClick={isLoggedUserLiked ? () => {} : () => addLike()}
          ></i>{" "}
          <br />
          <p>{NumOfLikes}</p>
        </div>
      </div>

      {showComments ? (
        <>
          comments
          {comments.map((comment) => (
            <Comment key={comment._id} {...comment} />
          ))}
        </>
      ) : (
        ""
      )}

      <AddComment answerId={_id} snippetId={snippetId} />
    </div>
  );
}

export default Answer;
