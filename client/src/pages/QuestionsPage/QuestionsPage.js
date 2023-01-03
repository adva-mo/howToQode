import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SerachInput/SerachInput";
import axios from "axios";
import Table from "../../components/Table/Table";

function QuestionsPage() {
  const [questions, setquestions] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("questions");
  const [queryResults, setqueryResults] = useState(questions);

  useEffect(() => {
    axios
      .get("http://localhost:3001/snippets")
      .then(({ data }) => {
        setquestions(data);
        setqueryResults(data);
        console.log(queryResults);
      })
      .catch((e) => console.log(e));
    axios
      .get("http://localhost:3001/users")
      .then(({ data }) => {
        console.log(data);
        setUsers(data);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (searchValue === "")
      return setqueryResults(
        searchTerm === "questions" ? [...questions] : [...users]
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
    // eslint-disable-next-line
  }, [searchValue]);

  useEffect(() => {
    console.log(searchTerm);
    const data = searchTerm === "questions" ? [...questions] : [...users];
    setqueryResults(data);
  }, [searchTerm, questions, users]);

  return (
    <div className="page-container questions-page">
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
        alt=""
        key="1"
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
        alt=""
        key="2"
      />
      <div className=" secondary-box page-title-container margin-bottom-2">
        <h2 className="page-title">
          Explore our community and discover new resources and connections!
        </h2>
      </div>
      <SearchInput
        setSearchValue={setSearchValue}
        setSearchTerm={setSearchTerm}
        searchValue={searchValue}
      />
      {queryResults.length > 0 && (
        <Table data={queryResults} searchTerm={searchTerm} />
      )}
    </div>
  );
}

export default QuestionsPage;
