import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Codeblock = ({ language, textToFormat }) => {
  const test = `print("hello")
console.log("gello")
def factorial:
  return 1

  ["1","2"].forEach((num)=>{
    console.log(num)
  })
  `;
  return (
    <SyntaxHighlighter
      language={"javascript"}
      style={docco}
      showLineNumbers={true}
    >
      {test}
    </SyntaxHighlighter>
  );
};
export default Codeblock;
