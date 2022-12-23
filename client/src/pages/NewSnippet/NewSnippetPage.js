import React, { useContext } from "react";
import NewSnippetCard from "../../components/NewSnippetCard/NewSnippetCard.js";
import newSnippetContext from "../../context/snippet.context.js";

function NewSnippetPage() {
  const snippetCtx = useContext(newSnippetContext);
  return (
    <div>
      <NewSnippetCard />
    </div>
  );
}

export default NewSnippetPage;
