import React, { useState } from "react";
import "./Answer.css";
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";

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

  return (
    <div className="answer primary-box flex-column-center">
      <p> {description}</p>

      <p>correct? {isHelpful ? "V" : "X"}</p>
      <div className="flex-row">
        <p>date: {date}</p>
        <p>author {author}</p>
        <p>comments {comments.length}</p>
        <button onClick={() => setshowComments((prev) => !prev)}>show</button>
      </div>

      {showComments
        ? comments.map((comment) => {
            return <Comment key={comment._id} {...comment} />;
          })
        : ""}

      <AddComment
        setIsUpdated={setIsUpdated}
        answerId={_id}
        snippetId={snippetId}
      />
    </div>
  );
}

export default Answer;
