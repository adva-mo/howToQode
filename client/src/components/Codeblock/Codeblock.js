import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Codeblock = ({ language, textToFormat }) => {
  return (
    <SyntaxHighlighter language={language} style={docco} showLineNumbers={true}>
      {textToFormat}
    </SyntaxHighlighter>
  );
};
export default Codeblock;
