import React, { useRef, useContext } from "react";
import "./AddComment.css";
import axios from "axios";
import currentLoggedUser from "../../context/loggedUserContext";

function AddComment({ answerId, snippetId, setAnswerComments }) {
  const commentInput = useRef();
  const { loggedUser } = useContext(currentLoggedUser);

  const handlesubmit = () => {
    if (!commentInput.current.value) return;
    if (commentInput.current.value === "Add a comment") return;
    const comment = {
      author: loggedUser || "guest",
      answerId: answerId,
      description: commentInput.current.value,
    };
    axios
      .post(`http://localhost:3001/comments/${snippetId}`, comment)
      .then(() => {
        commentInput.current.value = "";
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setAnswerComments((prev) => [...prev, comment]);
      });
  };
  return (
    <form className="add-comment-form" onSubmit={(e) => e.preventDefault()}>
      <textarea
        className="comment-textarea"
        tyep="text"
        placeholder="Add a comment..."
        ref={commentInput}
      />
      <button type="submit" onClick={handlesubmit}>
        send
      </button>
    </form>
  );
}

export default AddComment;
