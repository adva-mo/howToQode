// const io = require("../server.js");

// let loggedUsersArray = [];

// io.on("connection", (socket) => {
//   console.log(`new user connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`user with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on("user_connected", (data) => {
//     loggedUsersArray.push(socket.id);
//     io.emit("updateUserList", loggedUsersArray);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log(`user disconnected: ${socket.id}`);
//     loggedUsersArray = loggedUsersArray.filter((user) => user !== socket.id);
//     io.emit("updateUserList", loggedUsersArray);
//   });
// });
