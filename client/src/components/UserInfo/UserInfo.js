import React, { useState, useEffect } from "react";

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
  // const [editMood, setEditMood] = useState(false);

  // const editProfileHandler = async (e) => {
  //   if (editMood) {
  //   } else setEditMood((prev) => !prev);
  // };

  // const deleteProfileHandler = async () => {
  //   console.log("delete PROFILE function");
  // };

  useEffect(() => {}, []);

  return (
    <div className="primary-box profile-info-container">
      <img
        className="user-profile-image"
        src={img || process.env.PUBLIC_URL + "/assets/avatar.jpg"}
        alt=""
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
      <div className="turkiz-underline"></div>
      <h4 className="stat-h4 ">STATISTICS</h4>

      <div className="user-statistics-container flex-row">
        <div>
          <h4>{numOfSnippets} QUESTIONS</h4>
          <i className="fa-regular fa-circle-question blue-font"></i>
        </div>
        <div>
          <h4>{numOfSnippets} ANSWERS</h4>
          <i className="fa-regular fa-circle-check blue-font"></i>{" "}
        </div>
        <div>
          <h4>RANK </h4>
          <p>{rank}</p>
          <i className="fa-solid fa-ranking-star blue-font"></i>{" "}
        </div>
      </div>
      <div className="edit-profile-container">
        <i className="fa-solid fa-pencil"></i>
        {/* <button className="edit-profile-btn">EDIT</button> */}
        {/* <button>DELETE</button> */}
      </div>
    </div>
  );
}

export default UserInfo;
