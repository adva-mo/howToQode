import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Codeblock = ({ language, textToFormat }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={docco}
      // showLineNumbers={true}
      customStyle={{
        backgroundColor: "rgb(190, 190, 190)",
        opacity: "1",
        textAlign: "left",
        color: "rgb(26, 26, 26)", //todo
        borderRadius: "2px",
        flexWrap: "wrap",
        minHeight: "3rem",
        width: "100%",
      }}
    >
      {textToFormat}
    </SyntaxHighlighter>
  );
};
export default Codeblock;
