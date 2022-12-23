import React, { useState } from "react";
import CodeBlock from "../Codeblock/Codeblock";
import "./CodeInput.css";

function CodeInput() {
  const [userCode, setUserCode] = useState("");
  return (
    <div className="code-input-container">
      <div className="code-textarea">
        <p>or code it right here:</p>
        <label htmlFor="code"></label>
        <textarea
          className="code-textarea"
          placeholder="enjoy your coding (:"
          type="text"
          name="code"
          onChange={({ target }) => setUserCode(target.value)}
        />
      </div>
      <div className="code-block">
        <CodeBlock textToFormat={userCode} language={"javascript"} />
      </div>
    </div>
  );
}

export default CodeInput;
