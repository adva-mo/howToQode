import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Codeblock = ({ language, textToFormat }) => {
  return (
    <SyntaxHighlighter
      language={language}
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
