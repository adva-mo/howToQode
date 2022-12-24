import React, { useState, useEffect } from "react";
import "./Chat.css";
import io from "socket.io-client";
import uuid from "react-uuid";
import ScrollToBottom from "react-scroll-to-bottom";

const socket = io.connect("http://127.0.0.1:3001");

function Chat() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const joinChat = () => {
    setIsConnected(true);
    socket.emit("join_room", "room1");
    socket.emit("user_connected", socket.id);
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
    setMessageList((list) => [...list, messageData]);
    setCurrentMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });

    socket.on("updateUserList", (data) => {
      console.log(data);
      setOnlineUsers([...data]);
    });
  }, [socket]);

  return (
    <div className="chat">
      {isConnected ? (
        <div className="chat-room">
          <h4>live chat</h4>
          <div className="online-users-container">
            <p>online users:</p>
            {onlineUsers.map((user) => (
              <p key={uuid()}>{user.socket}</p>
            ))}
          </div>
          <ScrollToBottom className="message-container">
            {messageList.map((data) => {
              return (
                <div
                  id={data.author === socket.id ? "you" : "other"}
                  key={uuid()}
                >
                  <div>
                    <p>{data.message}</p>
                  </div>
                  <div>
                    {" "}
                    <p>{data.time}</p>
                    {/* <p>{data.author}</p> */}
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
          <div className="flex chat-input-container">
            <input
              onChange={({ target }) => setCurrentMessage(target.value)}
              className="chat-input"
              type="text"
              placeholder="hey.."
              value={currentMessage}
              onKeyPress={(e) => {
                e.key === "Enter" && sendMessage();
              }}
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
