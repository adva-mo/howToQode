import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import newSnippetContext from "../../context/snippet.context.js";

const Codeblock = ({ language, textToFormat }) => {
  //languge from context
  const { snippetObjct } = useContext(newSnippetContext);
  return (
    <SyntaxHighlighter
      language={snippetObjct?.language}
      style={docco}
      showLineNumbers={true}
      customStyle={{
        backgroundColor: "transparent",
        opacity: "1",
      }}
    >
      {textToFormat}
    </SyntaxHighlighter>
  );
};
export default Codeblock;
