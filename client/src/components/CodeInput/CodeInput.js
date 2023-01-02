import React, { useContext } from "react";
// import CodeBlock from "../Codeblock/Codeblock";
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
        <label htmlFor="code"></label>
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
