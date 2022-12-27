import React, { useEffect, useState } from "react";
import "./SnippetPage.css";
import SnippetCard from "../../components/SnippetCard/SnippetCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function SnippetPage() {
  const [currentSnippet, setCurrentSnippet] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log("snippet page use effcet");
    axios
      .get(`http://localhost:3001/snippets/${id}`)
      .then((snippet) => setCurrentSnippet(snippet.data))
      .catch((e) => console.log(e))
      .finally(() => console.log(currentSnippet));
  }, [id, , isUpdated]);

  return (
    <div className="page-container">
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
      />
      {currentSnippet && (
        <SnippetCard {...currentSnippet} setIsUpdated={setIsUpdated} />
      )}
    </div>
  );
}

export default SnippetPage;
