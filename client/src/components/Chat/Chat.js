import React, { useState, useEffect } from "react";
import "./Chat.css";
import io from "socket.io-client";

const socket = io.connect("http://127.0.0.1:3001");

function Chat() {
  const [connected, setConnected] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const joinChat = () => {
    setConnected(true);
    socket.emit("join_room", "room1");
  };

  const sendMessage = async () => {
    if (!currentMessage) return;

    const messageData = {
      room: "room1",
      author: socket.id,
      message: currentMessage,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };

    try {
      await socket.emit("send_message", messageData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <div className="chat">
      {connected ? (
        <div className="chat-room">
          <p>liev chat</p>
          <div className="flex chat-input-container">
            <input
              onChange={({ target }) => setCurrentMessage(target.value)}
              className="chat-input"
              type="text"
              placeholder="hey.."
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      ) : (
        <button onClick={joinChat}>join chat</button>
      )}
    </div>
  );
}

export default Chat;
