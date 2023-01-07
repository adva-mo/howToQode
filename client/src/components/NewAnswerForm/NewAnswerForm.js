import React, { useContext, useRef } from "react";
import "./NewAnswerForm.css";
import loggedUserContext from "../../context/loggedUserContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import errorCtx from "../../context/error.context";

function NewAnswerForm({ setAnswersToDisplay }) {
  // const title = useRef();
  const description = useRef();
  const { loggedUser } = useContext(loggedUserContext);
  const { id: snippetId } = useParams();
  const { setError } = useContext(errorCtx);

  const postAnswer = async () => {
    try {
      if (description.current.value === "") return setError("missing fields");
      const newAnswer = {
        author: loggedUser,
        title: "title",
        description: description.current.value,
      };
      const { data } = await axios.post(
        `https://howtoqode.onrender.com/answers/${snippetId}`,
        newAnswer
      );
      setAnswersToDisplay((prev) => [...prev, data]);
      description.current.value = "";
      // title.current.value = "";
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };
  if (loggedUser)
    return (
      <>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex-column-center new-answer-form"
        >
          <h3 className="margin-bottom-1">YOUR ANSWER</h3>
          {/* <input
            type="text"
            name="title"
            placeholder="Your title here..."
            className="new-answer-title-input margin-bottom-1"
            ref={title}
          /> */}
          <textarea
            placeholder="Your answer here..."
            className="new-answer-textarea margin-bottom-1"
            ref={description}
          />
          <button onClick={() => postAnswer()}>post answer</button>
        </form>
      </>
    );
}

export default NewAnswerForm;
