import React, { useState, useEffect } from "react";
import "./Chat.css";
import io from "socket.io-client";
import uuid from "react-uuid";
import ScrollToBottom from "react-scroll-to-bottom";
// import loggedUserContext from "../../context/loggedUserContext";

const socket = io.connect("https://howtoqode.onrender.com/");

function Chat() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  // const { loggedUser } = useContext(loggedUserContext);

  const joinChat = () => {
    setIsConnected(true);
    socket.emit("join_room", "room1");
    // socket.emit("user_connected", socket.id);
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
      setOnlineUsers(data);
    });
    // eslint-disable-next-line
  }, [socket]);

  useEffect(() => {
    if (isConnected) socket.emit("user_connected", socket.id);
  }, [isConnected]);

  return (
    <div className="chat-wrapper">
      <div className="chat">
        {isConnected ? (
          <div className="chat-room">
            {/* <button onClick={}>go offline</button> */}
            <div className="online-users-container white-underline">
              {/* <p>online users:</p> */}
              {onlineUsers.map((user, i) => {
                // if (i !== 0) {
                return (
                  <div
                    className="online-user-container flex-row-between "
                    key={uuid()}
                  >
                    <p>{user.socket.slice(0, 6)}</p>
                    <div className="green-circle"></div>
                  </div>
                );
                // }
              })}
            </div>
            {/* <h4>live chat</h4> */}
            <ScrollToBottom className="message-container">
              {messageList.map((data) => {
                return (
                  <div
                    className="message"
                    id={data.author === socket.id ? "you" : "other"}
                    key={uuid()}
                  >
                    <div>
                      <div className="message-content">
                        <p>{data.message}</p>
                      </div>
                      <div className="message-meta flex-row-center">
                        {" "}
                        <p id="time">{data.time}</p>
                        <p id="author">{data.author.slice(0, 6)}</p>
                      </div>
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
              <button className="send-msg-btn" onClick={sendMessage}>
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </div>
        ) : (
          <button onClick={joinChat}>click here and chat with friends!</button>
        )}
      </div>
    </div>
  );
}

export default Chat;
