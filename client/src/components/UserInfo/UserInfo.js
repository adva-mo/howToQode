import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const form = useRef();
  const editProfileHandler = async (e) => {
    if (editMood) {
      const updatedUserInfo = Object.fromEntries(new FormData(form.current));

      // const data = new FormData(form);
      // const temp = Object.keys(data);
      console.log(updatedUserInfo);
      //* validate form inputes
      //* if valid: send request
      //* if not : set error
      // setEditMood(false);
      // navigate(`/profile/${_id}`);
    } else setEditMood((prev) => !prev);
  };

  const deleteProfileHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/users/${_id}`);
      navigate(`/login`);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {}, []);

  return (
    <form ref={form} className="primary-box profile-info-form">
      <img
        className="user-profile-image"
        src={img || process.env.PUBLIC_URL + "/assets/avatar.jpg"}
        alt=""
      />
      <div className="flex-row">
        <div className="align-left">
          <p>
            User Name:
            <input defaultValue={username || ""} readOnly={true} />
          </p>
          <p>
            Name:
            <input defaultValue={name || ""} readOnly={!editMood} name="name" />
          </p>
          <p>
            Last Name:
            <input
              defaultValue={lastName || ""}
              readOnly={!editMood}
              name="lastName"
            />
          </p>
        </div>

        <div className="align-left">
          <p>
            City:{" "}
            <input defaultValue={city || ""} readOnly={!editMood} name="city" />
          </p>
          <p>
            Country:{" "}
            <input
              defaultValue={country || ""}
              readOnly={!editMood}
              name="country"
            />
          </p>
        </div>
      </div>
      <div className="align-left">
        <p>
          learning:{" "}
          <input
            defaultValue={learning || ""}
            readOnly={!editMood}
            name="learning"
          />
        </p>
        <p>
          school:{" "}
          <input
            defaultValue={school || ""}
            readOnly={!editMood}
            name="school"
          />
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
    </form>
  );
}

export default UserInfo;
