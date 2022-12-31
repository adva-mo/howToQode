import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NewSnippetCard from "../../components/NewSnippetCard/NewSnippetCard.js";
import currentLoggedUser from "../../context/loggedUserContext.js";
import newSnippetContext from "../../context/snippet.context.js";
import { useNavigate } from "react-router-dom";
import "./NewSnippetPage.css";
import { validateSnippetFields } from "../../utils/utils.js";

function NewSnippetPage() {
  const [error, setError] = useState(false);
  const [snippetObject, setSnippetObject] = useState({
    title: "",
    language: "",
    description: "",
    code: "",
  });
  const [isSnippetSent, stisSnippetSent] = useState(false);
  let newSnippetId;
  const { loggedUser } = useContext(currentLoggedUser);
  const navigate = useNavigate;

  useEffect(() => {
    if (validateSnippetFields(snippetObject)) {
      const postBody = {
        ...snippetObject,
        author: `${loggedUser}`,
      };
      axios
        .post("http://localhost:3001/snippets", postBody)
        .then(({ data }) => {
          newSnippetId = data._id;
          // navigate(`/snippets/${data._id}`);
          redirect();
        })
        .catch((e) => {
          setError(e);
        });
    } else {
      setError(`missing fields`);
      console.log(error);
    }
  }, [loggedUser, snippetObject]);

  const redirect = () => navigate("/", { replace: true });

  return (
    <div className="new-snippeet-page page-container">
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
        <NewSnippetCard />
      </newSnippetContext.Provider>
    </div>
  );
}

export default NewSnippetPage;
