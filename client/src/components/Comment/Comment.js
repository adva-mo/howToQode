import React from "react";
import "./Comment.css";
import { useNavigate } from "react-router-dom";

function Comment({ author, description, likes, img, createdAt, time }) {
  const navigate = useNavigate();

  return (
    <div className=" primary-box comment-container align-left flex-row">
      <i style={{ alignSelf: "center" }} className="fa-regular fa-message"></i>
      <div>
        <p>{description}</p>
        <div className="flex-row" style={{ fontSize: "small" }}>
          <p
            id={author}
            onClick={({ target }) => {
              console.log(target.id);
              navigate(`/profile/${target.id}`);
            }}
            className="profile-link"
          >
            <i className="fa-regular fa-user turkiz-font" />{" "}
            {author.slice(0, 6)}
          </p>
          <p style={{ marginLeft: "0.5rem" }} id="time">
            <i className="fa-solid fa-calendar-days turkiz-font" /> {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
