import React from "react";

const newSnippetContext = React.createContext({
  author: "",
  title: "",
  language: "",
  description: "",
  code: "",
});

export default newSnippetContext;
