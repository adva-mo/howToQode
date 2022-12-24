import React, { useState } from "react";
import axios from "axios";

function AI() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmt = async (e) => {
    console.log(message);
    try {
      e.preventDefault();
      const result = await axios.post("http://127.0.0.1:3001/openai", {
        body: message,
      });
      console.log(result.data);
      setResponse(result.data.message);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      OpenAI
      <form onSubmit={handleSubmt}>
        <textarea
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default AI;
