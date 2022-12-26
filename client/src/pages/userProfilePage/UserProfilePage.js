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
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${`${id}`}`)
      .then(({ data }) => setUser(data))
      .catch((e) => setError(e));
    axios
      .get(`http://localhost:3001/snippets?user=${id}`)
      .then(({ data }) => setUserSnippet(data))
      .catch((e) => {
        setError(e);
      });
  }, []);

  return (
    <div className="page-container">
      {error && console.log(error)}
      {userSnippet && (
        <>
          <UserInfo {...user} numOfSnippets={userSnippet.length} />
          {!userSnippet.length > 0 ? (
            <div className="primary-box">
              <p>user doesn't have any snippets yet</p>
            </div>
          ) : (
            userSnippet.map((snippet) => {
              return (
                <div>
                  <h4>Users's QUESTIONS</h4>
                  <Link to={`/snippets/${snippet._id}`}>
                    <SnippetPrev key={snippet._id} {...snippet} />
                  </Link>
                </div>
              );
            })
          )}
        </>
      )}
    </div>
  );
}

export default UserProfilePage;
