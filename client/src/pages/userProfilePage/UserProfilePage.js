import React, { useEffect, useState } from "react";
import "./userProfilePage.css";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserProfilePage() {
  const [user, setUser] = useState();
  const [userSnippet, setUserSnippet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${`63a446403a69e528fb2eb2ed`}`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((e) => console.log(e));
    // console.log(data);
    axios
      .get(`http://localhost:3001/snippets?user=${id}`)
      .then(({ data }) => setUserSnippet(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="page-container">
      {user && (
        <>
          <UserInfo {...user} numOfSnippets={userSnippet.length} />
          {}
        </>
      )}
    </div>
  );
}

export default UserProfilePage;
