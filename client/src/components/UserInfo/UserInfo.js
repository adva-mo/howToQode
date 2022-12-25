import React, { useState, useEffect } from "react";

import "./UserInfo.css";

function UserInfo({ name, lastName, username, rank, city, country }) {
  const [editMood, setEditMood] = useState(false);

  const editProfileHandler = async (e) => {
    if (editMood) {
    } else setEditMood((prev) => !prev);
  };

  const deleteProfileHandler = async () => {
    console.log("delete PROFILE function");
    // await deleteFromCollection();
    // await signOut(auth);
    // navigate("/home");
  };

  useEffect(() => {
    //get user snippets
  }, []);

  return (
    <div>
      <img className="user-profile-image" />
      <div className="user-info-container">
        <div>
          <p>User Name: {username || ""}</p>
          <p>Name: {name || ""}</p>
          <p>Last Name: {lastName || ""}</p>
        </div>
        <div>
          <p>Rank: {rank || ""}</p>
          <p>City: {city || ""}</p>
          <p>Country: {country || ""}</p>
        </div>
        <button>EDIT</button>
        {/* <button>DELETE</button> */}
      </div>
      <div className="user-statistics-container"></div>
    </div>
  );
}

export default UserInfo;
