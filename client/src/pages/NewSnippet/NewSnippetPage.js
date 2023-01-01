import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NewSnippetCard from "../../components/NewSnippetCard/NewSnippetCard.js";
import currentLoggedUser from "../../context/loggedUserContext.js";
import newSnippetContext from "../../context/snippet.context.js";
import { Navigate, useNavigate } from "react-router-dom";
import "./NewSnippetPage.css";
import { validateSnippetFields } from "../../utils/utils.js";
import Loginpage from "../loginpage/Loginpage";
import Error from "../../components/error/Error";

function NewSnippetPage() {
  const [error, setError] = useState(false);
  const [newId, setnewId] = useState(null);

  const [snippetObject, setSnippetObject] = useState({
    title: "",
    language: "",
    description: "",
    code: "",
  });

  const { loggedUser } = useContext(currentLoggedUser);
  const navigate = useNavigate;

  const postSnippet = async (obj) => {
    console.log(obj);
    if (validateSnippetFields(obj)) {
      const postBody = {
        ...obj,
        author: `${loggedUser}`,
      };
      axios
        .post("http://localhost:3001/snippets", postBody)
        .then(({ data }) => {
          console.log(data._id);
          setnewId(data._id);
          // navigate(`/snippets/${data._id}`);
        })
        .catch((e) => {
          setError(e);
        });
    } else {
      setError(`missing fields`);
      console.log(error);
    }
  };

  if (!loggedUser) return <Loginpage />;

  return (
    <div className="new-snippeet-page page-container">
      {newId && navigate(`/snippets/${newId}`)}
      {error && <Error msg={error} setError={setError} />}
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
      />
      <div className=" secondary-box page-title-container">
        <h1 className="page-title">
          Need help troubleshooting a problem in your code?{" "}
        </h1>
        <h3 className="page-title">
          Post a code snippet and get help from experienced programmers in our
          community!
        </h3>
      </div>
      <newSnippetContext.Provider
        value={{
          setSnippetObject,
          snippetObject,
        }}
      >
        <NewSnippetCard postSnippet={postSnippet} />
      </newSnippetContext.Provider>
    </div>
  );
}

export default NewSnippetPage;
