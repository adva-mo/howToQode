import React from "react";
import "./Chat.css";
import io from "socket.io-client";

const socket = io
  .connect("http://localhost:3001")
  .then(() => {})
  .catch((e) => {
    console.log(e);
  });

function Chat() {
  return <div className="chat">Chat</div>;
}

export default Chat;
