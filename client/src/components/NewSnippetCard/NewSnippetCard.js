import React, { useContext } from "react";
import CodeInput from "../CodeInput/CodeInput";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import newSnippetContext from "../../context/snippet.context.js";
import UploadInput from "../uploadInput/UploadInput";

function NewSnippetCard({ postSnippet }) {
  const { setSnippetObject, snippetObject } = useContext(newSnippetContext);

  return (
    <form
      className="primary-box"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="title">title</label>
        <input
          placeholder="enter your title"
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
        <label htmlFor="description">description</label>
        <input
          placeholder="enter your description"
          type="text"
          name="description"
          onChange={({ target }) =>
            setSnippetObject((prev) => ({
              ...prev,
              description: target.value,
            }))
          }
        />
      </div>
      <UploadInput />
      <CodeInput />
      <button onClick={() => postSnippet(snippetObject)}>submit</button>
    </form>
  );
}

export default NewSnippetCard;
