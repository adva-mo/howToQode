import React, { useEffect, useState } from "react";
import "./SnippetPage.css";
import SnippetCard from "../../components/SnippetCard/SnippetCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function SnippetPage() {
  const [currentSnippet, setCurrentSnippet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/snippets/${id}`)
      .then((snippet) => setCurrentSnippet(snippet.data))
      .catch((e) => console.log(e))
      .finally(() => console.log(currentSnippet));
  }, [id]);

  return <div>{currentSnippet && <SnippetCard {...currentSnippet} />}</div>;
}

export default SnippetPage;
