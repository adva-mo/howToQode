import React, { useContext } from "react";
import CodeBlock from "../Codeblock/Codeblock";
import newSnippetContext from "../../context/snippet.context.js";
import "./CodeInput.css";

function CodeInput() {
  const { setSnippetObject, snippetObject } = useContext(newSnippetContext);

  const handleCodeChange = ({ target }) => {
    setSnippetObject((prev) => ({ ...prev, code: target.value }));
  };

  return (
    <div className="code-input-container">
      <div className="code-textarea">
        <p>
          <span className="blue-font" style={{ fontSize: "xx-large" }}>
            Or
          </span>{" "}
          code it right here:
        </p>
        <label htmlFor="code"></label>
        <textarea
          className="code-textarea"
          placeholder="enjoy your coding (:"
          type="text"
          name="code"
          onChange={handleCodeChange}
        />
      </div>
      {/* <div className="code-block">
        <CodeBlock
          textToFormat={snippetObject.code}
          language={snippetObject.language}
        />
      </div> */}
    </div>
  );
}

export default CodeInput;
