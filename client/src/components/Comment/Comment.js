import React, { useState, useEffect } from "react";
import "./Comment.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Comment({ author, description, date }) {
  const [authorName, setauthorName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/users/name/${author}`)
      .then(({ data }) => setauthorName(data))
      .catch((e) => console.log(e));
  }, [author]);

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
            <i className="fa-regular fa-user turkiz-font" /> {authorName}
          </p>
          <p style={{ marginLeft: "0.5rem" }} id="time">
            <i className="fa-solid fa-calendar-days turkiz-font" /> {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
