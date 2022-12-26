import React, { useEffect, useState } from "react";
import "./userProfilePage.css";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SnippetPrev from "../../components/SnippetPrev/SnippetPrev";

function UserProfilePage() {
  const [user, setUser] = useState();
  const [userSnippet, setUserSnippet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${`63a446403a69e528fb2eb2ed`}`)
      .then(({ data }) => setUser(data))
      .catch((e) => console.log(e));
    axios
      .get(`http://localhost:3001/snippets?user=${id}`)
      .then(({ data }) => setUserSnippet(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="page-container">
      {userSnippet && (
        <>
          <UserInfo {...user} numOfSnippets={userSnippet.length} />
          {userSnippet.map((snippet) => {
            return (
              <div>
                <h4>Users's QUESTIONS</h4>
                <Link to={`/snippets/${snippet._id}`}>
                  <SnippetPrev key={snippet._id} {...snippet} />
                </Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default UserProfilePage;
