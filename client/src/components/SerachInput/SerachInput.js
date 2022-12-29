import React from "react";
import "./SerachInput.css";

function SerachInput({ setSearchValue, searchValue, setserachTerm }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="form-search-box flex-row"
    >
      <input
        type="text"
        className="search-term-input"
        placeholder="search for a..."
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
