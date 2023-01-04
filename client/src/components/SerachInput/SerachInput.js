import React from "react";
import "./SerachInput.css";

function SerachInput({ setSearchValue, searchValue, setSearchTerm }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="form-search-box flex-row "
    >
      <input
        type="text"
        className="search-term-input  "
        placeholder="search here for a..."
        defaultValue={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />

      <select
        onChange={({ target }) => setSearchTerm(target.value)}
        // className="select-primary"
      >
        <option value="">--select--</option>
        <option value="questions">question</option>
        <option value="users">user</option>
      </select>
    </form>
  );
}

export default SerachInput;
