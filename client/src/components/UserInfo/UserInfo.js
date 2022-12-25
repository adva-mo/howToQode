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
}) {
  const [editMood, setEditMood] = useState(false);
  // const [userSnippet, setUserSnippet] = useState([]);

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
    // axios
    //   .get(`http://localhost:3001/snippets?user=${_id}`)
    // .then(({ data }) => setUserSnippet(data))
    //   .catch((e) => {
    //     console.log(e);
    //   });
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
      {
        <div className="user-statistics-container">
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
      }
    </div>
  );
}

export default UserInfo;
