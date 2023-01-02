import React, { useContext, useState } from "react";
import CodeInput from "../CodeInput/CodeInput";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import newSnippetContext from "../../context/snippet.context.js";
import UploadInput from "../uploadInput/UploadInput";
import "./NewSnippetCard.css";
import CodeBlock from "../Codeblock/Codeblock";

function NewSnippetCard({ postSnippet }) {
  const { setSnippetObject, snippetObject } = useContext(newSnippetContext);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  return (
    <form
      className="primary-box new-snippet-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <input
          className="new-title-input"
          placeholder="Enter title for your question..."
          type="text"
          name="title"
          onChange={({ target }) =>
            setSnippetObject((prev) => ({
              ...prev,
              title: target.value,
            }))
          }
        />
      </div>
      <div>
        <LanguageSelect />
      </div>
      <div>
        <textarea
          placeholder="Describe what is the problem"
          type="text"
          className="new-description-input"
          name="description"
          onChange={({ target }) =>
            setSnippetObject((prev) => ({
              ...prev,
              description: target.value,
            }))
          }
        />
      </div>

      <UploadInput setIsFileUploaded={setIsFileUploaded} />
      <p>
        <span className="blue-font" style={{ fontSize: "xx-large" }}>
          Or
        </span>{" "}
        code it right here:
      </p>
      <div style={{ position: "relative" }}>
        <div className="code-block">
          <CodeBlock
            textToFormat={snippetObject.code}
            language={snippetObject.language}
          />
        </div>
        {!isFileUploaded && <CodeInput />}
      </div>
      <button onClick={() => postSnippet(snippetObject)}>submit</button>
    </form>
  );
}

export default NewSnippetCard;
