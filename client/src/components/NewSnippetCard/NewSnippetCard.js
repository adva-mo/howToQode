import React, { useRef, useState, useContext } from "react";
import CodeInput from "../CodeInput/CodeInput";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import newSnippetContext from "../../context/snippet.context.js";

function NewSnippetCard() {
  const { setSnippetObject, snippetObject, setIsSnippetFull } =
    useContext(newSnippetContext);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const title = useRef();
  const description = useRef();

  const handleSnippetSubmit = () => {
    const code = isFileUploaded ? "" : snippetObject.code;
    setSnippetObject((prev) => ({
      ...prev,
      title: title.current.value,
      description: description.current.value,
      code,
    }));
    setIsSnippetFull(true);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="title">title</label>
        <input
          // className={titleClasses}
          placeholder="enter your title"
          type="text"
          name="title"
          ref={title}
        />
      </div>
      <div>
        <LanguageSelect />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input
          // className={descriptionClasses}
          placeholder="enter your description"
          type="text"
          name="description"
          ref={description}
        />
      </div>
      <div>
        <p>load a script:</p>
        <label htmlFor="file">file</label>
        <input placeholder="enter your file" type="file" />
        <button>upload</button>
      </div>
      <CodeInput />
      <button onClick={handleSnippetSubmit}>submit</button>
    </form>
  );
}

export default NewSnippetCard;
