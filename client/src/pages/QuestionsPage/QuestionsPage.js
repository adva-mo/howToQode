import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SerachInput/SerachInput";
import SnippetPrev from "../../components/SnippetPrev/SnippetPrev";
import axios from "axios";

function QuestionsPage() {
  const [questions, setquestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const [serachTerm, setserachTerm] = useState("questions");
  const [queryResults, setqueryResults] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/snippets").then(({ data }) => {
      setquestions(data);
      setqueryResults(data);
    });
  }, []);

  useEffect(() => {
    if (searchValue === "")
      return setqueryResults(
        serachTerm === "questions" ? [...questions] : [...users]
      );

    const filtered = [];
    queryResults.forEach((item) => {
      if (item.title?.toLowerCase().includes(searchValue)) {
        filtered.push(item);
      }
      if (item.name?.toLowerCase().includes(searchValue)) {
        filtered.push(item);
      }
    });
    setqueryResults(filtered);
  }, [searchValue]);

  useEffect(() => {
    if (!users) {
      axios.get("http://localhost:3001/users").then(({ data }) => {
        setUsers(data);
      });
    }
    const data = serachTerm === "questions" ? [...questions] : [...users];
    setqueryResults(data);
  }, [serachTerm]);

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
      <SearchInput
        setSearchValue={setSearchValue}
        setserachTerm={setserachTerm}
        searchValue={searchValue}
      />
      {queryResults?.map((question, i) => {
        return <SnippetPrev key={i} {...question} />;
      })}
    </div>
  );
}

export default QuestionsPage;
