import React, { useRef, useContext } from "react";
import CodeInput from "../CodeInput/CodeInput";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import newSnippetContext from "../../context/snippet.context.js";
import UploadInput from "../uploadInput/UploadInput";

function NewSnippetCard() {
  const { setSnippetObject, setIsSnippetFull } = useContext(newSnippetContext);

  const title = useRef();
  const description = useRef();

  const handleSnippetSubmit = () => {
    setSnippetObject((prev) => ({
      ...prev,
      title: title.current.value,
      description: description.current.value,
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
      <UploadInput />
      <CodeInput />
      <button onClick={handleSnippetSubmit}>submit</button>
    </form>
  );
}

export default NewSnippetCard;
