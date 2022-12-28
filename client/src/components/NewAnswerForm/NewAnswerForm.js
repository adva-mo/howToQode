import React, { useContext, useRef } from "react";
import "./NewAnswerForm.css";
import loggedUserContext from "../../context/loggedUserContext";
import axios from "axios";
import { useParams } from "react-router-dom";

function NewAnswerForm() {
  const title = useRef();
  const description = useRef();
  const { loggedUser } = useContext(loggedUserContext);
  const { id: snippetId } = useParams();

  const postAnswer = async () => {
    try {
      const newAnswer = {
        author: loggedUser,
        title: title.current.value,
        description: description.current.value,
      };
      await axios.post(`http://localhost:3001/answers/${snippetId}`, newAnswer);
      description.current.value = "";
      title.current.value = "";
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex-column-center new-answer-form"
    >
      <h3>YOUR ANSWER</h3>
      <input
        type="text"
        name="title"
        placeholder="Your title here..."
        className="new-answer-title-input"
        ref={title}
      />
      <textarea
        placeholder="Your answer here..."
        className="new-answer-textarea"
        ref={description}
      />
      <button onClick={() => postAnswer()}>post answer</button>
    </form>
  );
}

export default NewAnswerForm;
