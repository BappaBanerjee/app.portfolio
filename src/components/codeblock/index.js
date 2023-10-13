import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const MyCoolCodeBlock = ({ code, language, showLineNumbers }) => {
  const codeString = "(num) => num + 1";
  return (
    <SyntaxHighlighter language="solidity" style={atomOneDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default MyCoolCodeBlock;
