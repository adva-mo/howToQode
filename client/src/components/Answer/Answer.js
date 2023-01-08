import React, { useContext, useState, useEffect } from "react";
import "./Answer.css";
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";
import { useNavigate } from "react-router-dom";
import currentLoggedUser from "../../context/loggedUserContext";
import axios from "axios";
import uuid from "react-uuid";
import errorCtx from "../../context/error.context";

function Answer({
  author,
  description,
  isHelpful,
  date,
  comments,
  _id,
  snippetId,
  likes,
  setisSolved,
}) {
  const [NumOfLikes, setNumOfLikes] = useState(likes.length);
  const [showComments, setshowComments] = useState(false);
  const [answerComments, setAnswerComments] = useState(comments);
  const [authorName, setauthorName] = useState("");
  const [isCorrect, setIsCorrect] = useState(isHelpful);

  const { setError } = useContext(errorCtx);
  const { loggedUser } = useContext(currentLoggedUser);

  const [isLoggedUserLiked, setisLoggedUserLiked] = useState(
    likes.includes(loggedUser)
  );

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/users/name/${author}`)
      .then(({ data }) => setauthorName(data))
      .catch((e) => console.log(e));
  }, [author]);

  const addLike = async () => {
    try {
      const { data } = await axios.post(
        `https://howtoqode.onrender.com/answers/${snippetId}/confirm`,
        {
          answerId: _id,
          userid: loggedUser,
        }
      );
      console.log(data);
      setNumOfLikes((prev) => (prev += 1));
      setisLoggedUserLiked((prev) => !prev);
      if (data === "confirmed") {
        setIsCorrect(true);
        setisSolved(true);
      }
    } catch (e) {
      console.log(e.response.data.message);
      setError(e.response.data.message);
    }
  };

  return (
    <>
      <div className="answer-container primary-box flex-column-center">
        <p> {description}</p>

        <p className="turkiz-bottom-border">correct? {isCorrect ? "V" : "X"}</p>
        <div className="flex-row-around">
          <div>
            <i className="fa-solid fa-calendar-days turkiz-font"></i>
            <p>{date}</p>
          </div>
          <div>
            <i className="fa-regular fa-user turkiz-font"></i>
            <p
              id={author}
              className="profile-link"
              onClick={({ target }) => {
                navigate(`/profile/${target.id}`);
              }}
            >
              {authorName}
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
                  ? "fa-solid fa-thumbs-up turkiz-font "
                  : "fa-regular fa-thumbs-up turkiz-font unclicked-like"
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
            <AddComment
              answerId={_id}
              snippetId={snippetId}
              setAnswerComments={setAnswerComments}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Answer;
