import React, { useEffect, useState } from "react";
import NewSnippetCard from "../../components/NewSnippetCard/NewSnippetCard.js";
import newSnippetContext from "../../context/snippet.context.js";
import { useHttp } from "../../hooks/useHttp";

import "./NewSnippetPage.css";

function NewSnippetPage() {
  const [isSnippetFull, setIsSnippetFull] = useState(false);
  const [snippetObject, setSnippetObject] = useState({
    title: "",
    language: "",
    description: "",
    code: "",
  });

  const { getData } = useHttp();

  useEffect(() => {
    if (!isSnippetFull) return;

    const PostBody = {
      ...snippetObject,
      author: "63a446403a69e528fb2eb2ed",
    };

    getData({
      url: "http://localhost:3001/snippets",
      method: "POST",
      body: PostBody,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [isSnippetFull]);

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
      <newSnippetContext.Provider
        value={{
          setSnippetObject,
          setIsSnippetFull,
          snippetObject,
          isSnippetFull,
        }}
      >
        <NewSnippetCard />
      </newSnippetContext.Provider>
    </div>
  );
}

export default NewSnippetPage;
