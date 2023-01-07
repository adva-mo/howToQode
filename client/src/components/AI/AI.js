import React, { useState } from "react";
import axios from "axios";
import "./AI.css";
import ScrollToBottom from "react-scroll-to-bottom";
import v4 from "react-uuid";
import Spinner from "../Spinner/Spinner";

function AI() {
  const [message, setMessage] = useState("");
  const [responses, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmt = async (e) => {
    setIsLoading(true);
    try {
      setResponse((prev) => [...prev, message]);
      setMessage("");
      e.preventDefault();
      const result = await axios.post("https://howtoqode.onrender.com/ai", {
        body: message,
      });
      setResponse((prev) => [...prev, result.data.message]);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };
  return (
    <>
      <div className="primary-box ai-response-box">
        <ScrollToBottom>
          {responses.map((r, i) => (
            <p key={v4()} className={i % 2 === 0 ? "user" : "ai"}>
              {r}
            </p>
          ))}
          {isLoading && <Spinner />}
        </ScrollToBottom>
      </div>
      <form onSubmit={handleSubmt} className="ai-form flex-row">
        <input
          className="ai-input"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></input>
        <button type="submit" className="send-msg-btn send-msg-ai">
          {" "}
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </form>
    </>
  );
}

export default AI;
