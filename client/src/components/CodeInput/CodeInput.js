import React, { useContext } from "react";
import newSnippetContext from "../../context/snippet.context.js";
import "./CodeInput.css";

function CodeInput() {
  const { setSnippetObject } = useContext(newSnippetContext);

  const handleCodeChange = ({ target }) => {
    setSnippetObject((prev) => ({ ...prev, code: target.value }));
  };

  return (
    <div className="code-input-container">
      <div className="code-textarea">
        <textarea
          className="code-textarea"
          type="text"
          name="code"
          onChange={handleCodeChange}
        />
      </div>
    </div>
  );
}

export default CodeInput;
