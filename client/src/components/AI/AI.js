import React, { useState } from "react";
import axios from "axios";
import "./AI.css";
import ScrollToBottom from "react-scroll-to-bottom";

function AI() {
  const [message, setMessage] = useState("");
  const [responses, setResponse] = useState([]);

  const handleSubmt = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post("http://127.0.0.1:3001/ai", {
        body: message,
      });
      setResponse((prev) => [...prev, message, result.data.message]);
      setMessage("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="primary-box ai-response-box">
        <ScrollToBottom>
          {responses.map((r, i) => (
            <p className={i % 2 === 0 ? "user" : "ai"}>{r}</p>
          ))}
        </ScrollToBottom>
      </div>
      <form onSubmit={handleSubmt} className="ai-form flex-row">
        <input
          className="ai-input"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></input>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default AI;
