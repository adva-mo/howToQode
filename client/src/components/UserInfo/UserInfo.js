import axios from "axios";
import { storage } from "../../utils/database-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "react-tooltip-lite";
import { tooltip } from "../../utils/tooltip.utils";
import "./UserInfo.css";

function UserInfo({
  name,
  lastName,
  solvedQuestions,
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
  const [userImg, setUserImg] = useState(img);
  const imageInput = useRef();
  const navigate = useNavigate();
  const form = useRef();

  const editProfileHandler = async (e) => {
    if (editMood) {
      const updatedUserInfo = Object.fromEntries(new FormData(form.current));
      await axios.patch(`http://localhost:3001/users/${_id}`, updatedUserInfo);
      setEditMood(false);
      navigate(`/profile/${_id}`);
    } else setEditMood((prev) => !prev);
  };

  const uploadProfileImage = async (e) => {
    const imageRef = ref(
      storage,
      `profile-pic/${Date.now() + e.target.files[0].name + _id}`
    );
    try {
      e.preventDefault();
      await uploadBytes(imageRef, e.target.files[0]);
      const url = await getDownloadURL(imageRef);
      setUserImg(url);
      await axios.patch(`http://localhost:3001/users/${_id}`, {
        img: url,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProfileHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/users/${_id}`);
      navigate(`/login`);
    } catch (e) {
      // setError(e.message);
    }
  };

  return (
    <form ref={form} className="primary-box profile-info-form ">
      <img
        className="user-profile-image"
        src={userImg || process.env.PUBLIC_URL + "/assets/avatar.jpg"}
        alt=""
      />
      <input
        ref={imageInput}
        type="file"
        onChange={uploadProfileImage}
        className="upload-input"
      />
      <i
        className="fa-solid fa-file-arrow-up upload-icon turkiz-font"
        onClick={(e) => {
          e.preventDefault();
          imageInput.current.click();
        }}
      ></i>

      <div>
        <div className="flex-row info-container">
          <div className="align-left flex-grow">
            <p>
              <strong>Name: </strong>
              <input
                defaultValue={name || ""}
                readOnly={!editMood}
                name="name"
                className={editMood ? "edit-input" : ""}
              />
            </p>
            <p>
              <strong>City: </strong>
              <input
                defaultValue={city || ""}
                readOnly={!editMood}
                name="city"
                className={editMood ? "edit-input" : ""}
              />
            </p>
          </div>

          <div className="align-left flex-grow">
            <p>
              <strong>Last Name: </strong>
              <input
                defaultValue={lastName || ""}
                readOnly={!editMood}
                name="lastName"
                className={editMood ? "edit-input" : ""}
              />
            </p>
            <p>
              <strong>Country: </strong>
              <input
                defaultValue={country || ""}
                readOnly={!editMood}
                name="country"
                className={editMood ? "edit-input" : ""}
              />
            </p>
          </div>
        </div>
        <div className="align-left ">
          <p>
            <strong>learning: </strong>
            <input
              defaultValue={learning || ""}
              readOnly={!editMood}
              name="learning"
              className={editMood ? "edit-input" : ""}
            />
          </p>
          <p>
            <strong>school: </strong>
            <input
              defaultValue={school || ""}
              readOnly={!editMood}
              name="school"
              className={editMood ? "edit-input" : ""}
            />
          </p>
        </div>

        <h4 className="stat-h4 turkiz-bottom-border">STATISTICS</h4>
        <div className="user-statistics-container flex-row-between">
          <div>
            <p>{numOfSnippets} QUESTIONS</p>
            <i className="fa-regular fa-circle-question blue-font"></i>
          </div>
          <div>
            <p>{solvedQuestions} ANSWERS</p>
            <i className="fa-regular fa-circle-check blue-font"></i>{" "}
          </div>
          <div>
            <Tooltip content={tooltip} direction="right">
              <p>{rank}</p>
            </Tooltip>
            <i className="fa-solid fa-ranking-star blue-font"></i>{" "}
          </div>
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
