import React from "react";
import "./SerachInput.css";

function SerachInput({ setSearchValue, searchValue, setserachTerm }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="form-search-box flex-row"
    >
      <label for="search-term"></label>
      <input
        type="search-term"
        className="search-term forms-lable"
        name="search-term"
        id="search-term"
        placeholder="search for a question..."
        defaultValue={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />

      <select onChange={({ target }) => setserachTerm(target.value)}>
        <option value="">--select--</option>
        <option value="questions">questions</option>
        <option value="users">users</option>
      </select>
    </form>
  );
}

export default SerachInput;
