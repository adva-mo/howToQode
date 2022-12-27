import React from "react";
import "./Comment.css";
import { useNavigate } from "react-router-dom";

function Comment({ author, description, likes, img, createdAt }) {
  const navigate = useNavigate();

  return (
    <div className=" primary-box comment-container align-left flex-row">
      <img
        className="user-profile-image-comment"
        src={img || process.env.PUBLIC_URL + "/assets/avatar.jpg"}
        alt=""
      />
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
        <div className="flex-row space-between">
          <p className="gray-font">date: {createdAt.split(":")[0]}</p>
          <p>
            <i className="fa-regular fa-thumbs-up"></i> {likes?.length || 0}
          </p>
        </div>
        <p>description: {description}</p>
      </div>
    </div>
  );
}

export default Comment;
