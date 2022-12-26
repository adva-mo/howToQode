import React, { useRef } from "react";

function SerachInput(setSearchInput) {
  const input = useRef();
  return (
    <form className="form-search-box flex-row">
      <div className="shrink-search flex-row">
        <label for="search-term"></label>
        <input
          type="search-term"
          className="search-term forms-lable"
          name="search-term"
          id="search-term"
          placeholder="search for a question..."
          ref={input}
        />
      </div>

      <button
        onClick={() => setSearchInput(input.current?.value)}
        type="submit"
        className="mirror-glass forms-lable"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default SerachInput;
