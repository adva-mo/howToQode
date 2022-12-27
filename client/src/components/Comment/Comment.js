import React from "react";
import "./Comment.css";

function Comment({ author, description, date, likes, img, createdAt }) {
  return (
    <div className=" primary-box comment-container align-left flex-row">
      <img
        className="user-profile-image-comment"
        src={img || process.env.PUBLIC_URL + "/assets/avatar.jpg"}
      />
      <div>
        <p className="profile-link">author {author}</p>
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
