import axios from "axios";
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
  _id,
}) {
  const [editMood, setEditMood] = useState(false);
  const [error, setError] = useState(false);

  const editProfileHandler = async (e) => {
    if (editMood) {
      //do
      setEditMood(false);
    } else setEditMood((prev) => !prev);
  };

  const deleteProfileHandler = async () => {
    try {
      console.log("delete PROFILE function");
      const { data } = axios.delete(`http://localhost:3001/users/${_id}`);
      console.log("user deleted");
    } catch (e) {
      setError(e.message);
    }

    //finally redirect to loginpage
  };

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
          <p>
            User Name:
            <input value={username || ""} readOnly={!editMood} />
          </p>
          <p>
            Name:
            <input value={name || ""} readOnly={!editMood} />
          </p>
          <p>
            Last Name:
            <input value={lastName || ""} readOnly={!editMood} />
          </p>
        </div>

        <div className="align-left">
          <p>
            Rank: <input value={rank || ""} readOnly={!editMood} />
          </p>
          <p>
            City: <input value={city || ""} readOnly={!editMood} />
          </p>
          <p>
            Country: <input value={country || ""} readOnly={!editMood} />
          </p>
        </div>
      </div>
      <div className="align-left">
        <p>
          learning: <input value={learning || ""} readOnly={!editMood} />
        </p>
        <p>
          school: <input value={school || ""} readOnly={!editMood} />
        </p>
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
      <div className="edit-profile-container flex-column-center">
        <i
          className={editMood ? "fa-solid fa-check" : "fa-solid fa-pencil"}
          onClick={editProfileHandler}
        ></i>
        {editMood ? (
          <i
            className="fa-solid fa-trash-can"
            onClick={deleteProfileHandler}
          ></i>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UserInfo;
