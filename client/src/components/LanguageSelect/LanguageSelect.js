import React, { useContext } from "react";
import newSnippetContext from "../../context/snippet.context.js";

function LanguageSelect() {
  const { setSnippetObject } = useContext(newSnippetContext);

  const handleLanguageSelect = ({ target }) => {
    setSnippetObject((prev) => ({ ...prev, language: target.value }));
  };
  return (
    <select onChange={handleLanguageSelect}>
      <option value="">select coding language</option>
      <option value="python">python</option>
      <option value="javascript">javascript</option>
      <option value="cpp">cpp</option>
      <option value="java">java</option>
      <option value="go">go</option>
      <option value="applescript">applescript</option>
      <option value="c">c</option>
      <option value="css">css</option>
      <option value="django">django</option>
      <option value="dos">dos</option>
      <option value="json">json</option>
      <option value="php">php</option>
      <option value="ruby">ruby</option>
      <option value="sql">sql</option>
      <option value="typescript">typescript</option>
      <option value="xml">xml</option>
    </select>
  );
}

export default LanguageSelect;
