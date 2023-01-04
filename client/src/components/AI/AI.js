import React, { useState } from "react";
import axios from "axios";
import "./AI.css";
import ScrollToBottom from "react-scroll-to-bottom";
import v4 from "react-uuid";

function AI() {
  const [message, setMessage] = useState("");
  const [responses, setResponse] = useState([]);

  const handleSubmt = async (e) => {
    try {
      setResponse((prev) => [...prev, message]);
      setMessage("");
      e.preventDefault();
      const result = await axios.post("https://howtoqode.onrender.com/ai", {
        body: message,
      });
      setResponse((prev) => [...prev, result.data.message]);
    } catch (e) {
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
