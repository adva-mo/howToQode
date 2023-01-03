import React from "react";
import "./Comment.css";
import { useNavigate } from "react-router-dom";

function Comment({ author, description, likes, img, createdAt }) {
  const navigate = useNavigate();

  return (
    <div className=" primary-box comment-container align-left flex-row">
      <i className="fa-regular fa-message"></i>
      <div>
        <p
          id={author}
          onClick={({ target }) => {
            console.log(target.id);
            navigate(`/profile/${target.id}`);
          }}
          className="profile-link"
        >
          author {author}
        </p>
        <div className="flex-row space-between"></div>
        <p>description: {description}</p>
      </div>
    </div>
  );
}

export default Comment;
