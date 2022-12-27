import React, { useEffect, useState } from "react";
import "./userProfilePage.css";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SnippetPrev from "../../components/SnippetPrev/SnippetPrev";

function UserProfilePage() {
  const [user, setUser] = useState();
  const [userSnippet, setUserSnippet] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:3001/users/${`${id}`}`)
      // .then(({ data }) => console.log(data))
      .then(({ data }) => setUser(data))
      .then(() => {
        axios.get(`http://localhost:3001/snippets?user=${id}`);
      })
      .then(({ data }) => data && setUserSnippet(data))
      .catch((e) => {
        setError(e.response?.data);
      });
  }, [id]);

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        //todo: display error component
        navigate(-1);
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div className="page-container">
      {console.log(user)}
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
          {!userSnippet.length > 0 ? (
            <div className="primary-box">
              <p>user doesn't have any snippets yet</p>
            </div>
          ) : (
            userSnippet.map((snippet) => {
              return (
                <div key={snippet._id}>
                  <h4>Users's QUESTIONS</h4>
                  {/* <Link to={`/snippets/${snippet._id}`}> */}
                  <SnippetPrev key={snippet._id} {...snippet} />
                  {/* </Link> */}
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
