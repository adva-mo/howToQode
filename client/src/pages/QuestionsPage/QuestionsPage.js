import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SerachInput/SerachInput";
import SnippetPrev from "../../components/SnippetPrev/SnippetPrev";
import axios from "axios";

function QuestionsPage() {
  const [questions, setquestions] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/snippets").then(({ data }) => {
      setquestions(data);
    });
  }, []);

  return (
    <div className="page-container">
      <SearchInput setSearchInput={setSearchInput} />
      {questions.map((question) => {
        return <SnippetPrev key={question._id} {...question} />;
      })}
    </div>
  );
}

export default QuestionsPage;
