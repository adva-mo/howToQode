import React, { useEffect, useState } from "react";
import "./SnippetPage.css";
import SnippetCard from "../../components/SnippetCard/SnippetCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function SnippetPage() {
  const [currentSnippet, setCurrentSnippet] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/snippets/${id}`)
      .then(({ data }) => setCurrentSnippet(data))
      .catch((e) => setError(e.response.data))
      .finally(() => console.log(currentSnippet));
    // eslint-disable-next-line
  }, [id, isUpdated]);

  useEffect(() => {
    console.log(error);
  }, [error]);

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
      {currentSnippet && (
        <SnippetCard {...currentSnippet} setIsUpdated={setIsUpdated} />
      )}
    </div>
  );
}

export default SnippetPage;
