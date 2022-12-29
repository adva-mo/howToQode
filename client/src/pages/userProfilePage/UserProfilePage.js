import React, { useEffect, useState } from "react";
import "./userProfilePage.css";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SnippetPrev from "../../components/SnippetPrev/SnippetPrev";

function UserProfilePage() {
  const [user, setUser] = useState();
  const [userSnippet, setUserSnippet] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // console.log(id);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:3001/users/${`${id}`}`)
      .then(({ data }) => setUser(data))
      .catch((e) => {
        setError(e.response?.data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/snippets?user=${id}`)
      .then(({ data }) => setUserSnippet(data))
      .catch((e) => {
        console.log(e);
      });
  }, [user]);

  useEffect(() => {
    if (!user && error) {
      setTimeout(() => {
        //todo: display error component
        navigate(-1);
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div className="page-container">
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
        alt=""
        key={"1"}
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
        alt=""
        key={"2"}
      />
      {error && console.log(error)}
      {userSnippet && (
        <>
          <UserInfo {...user} numOfSnippets={userSnippet.length} />
          {!userSnippet.length === 0 ? (
            <div className="primary-box">
              <p>user doesn't have any snippets yet</p>
            </div>
          ) : (
            userSnippet.map((snippet) => {
              return (
                <div className="snippet-prev-container">
                  <h4>Users's QUESTIONS</h4>
                  <div key={snippet._id}>
                    <SnippetPrev {...snippet} />
                  </div>
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
