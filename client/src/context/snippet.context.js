import React from "react";

const newSnippetContext = React.createContext({
  author: "",
  title: "",
  language: "",
  description: "",
  code: "",
  clearContext() {
    (this.author = ""),
      (this.title = ""),
      (this.language = ""),
      (this.description = ""),
      (this.code = "");
  },
});

export default newSnippetContext;
