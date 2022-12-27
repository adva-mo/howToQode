import React, { useState } from "react";
import "./Answer.css";
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";
import { useNavigate } from "react-router-dom";

function Answer({
  author,
  description,
  isHelpful,
  date,
  comments,
  setIsUpdated,
  _id,
  snippetId,
}) {
  const [showComments, setshowComments] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="answer-container primary-box flex-column-center">
      <p> {description}</p>

      <p className="turkiz-bottom-border">correct? {isHelpful ? "V" : "X"}</p>
      <div className="flex-row-around">
        <div>
          <i className="fa-solid fa-calendar-days turkiz-font"></i>
          <p>{date}</p>
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

      <AddComment
        setIsUpdated={setIsUpdated}
        answerId={_id}
        snippetId={snippetId}
      />
    </div>
  );
}

export default Answer;
