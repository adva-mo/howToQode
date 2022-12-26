import React, { useState, useEffect } from "react";
import axios from "axios";

import "./UserInfo.css";

function UserInfo({
  name,
  lastName,
  username,
  rank,
  city,
  country,
  numOfSnippets,
  img,
  learning,
  school,
}) {
  const [editMood, setEditMood] = useState(false);

  const editProfileHandler = async (e) => {
    if (editMood) {
    } else setEditMood((prev) => !prev);
  };

  const deleteProfileHandler = async () => {
    console.log("delete PROFILE function");
  };

  useEffect(() => {}, []);

  return (
    <div className="primary-box profile-info-container">
      <img
        className="user-profile-image"
        src={
          img ||
          "https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/QODE%2FASSETS%2F103.jpg?alt=media&token=071e754c-fb48-4f91-8e50-10d75d64ddc7"
        }
      />
      <div className="flex-row">
        <div className="align-left">
          <p>User Name: {username || ""}</p>
          <p>Name: {name || ""}</p>
          <p>Last Name: {lastName || ""}</p>
        </div>

        <div className="align-left">
          <p>Rank: {rank || ""}</p>
          <p>City: {city || ""}</p>
          <p>Country: {country || ""}</p>
        </div>

        <div className="align-left">
          <p>learning: {learning || ""}</p>
          <p>school: {school || ""}</p>
        </div>
      </div>

      <h4 className="stat-h4">STATISTICS</h4>

      <div className="user-statistics-container flex-row">
        <div>
          <h4>{numOfSnippets} QUESTIONS</h4>
          <p>icon</p>
        </div>
        <div>
          <h4>{numOfSnippets} ANSWERS</h4>
          <p>icon</p>
        </div>
        <div>
          <h4>RANK </h4>
          <p>{rank}</p>
          <p>icon</p>
        </div>
      </div>
      <div className="edit-profile-container">
        <button className="edit-profile-btn">EDIT</button>
        {/* <button>DELETE</button> */}
      </div>
    </div>
  );
}

export default UserInfo;
