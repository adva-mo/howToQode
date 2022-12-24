require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
// const { Server } = require("socket.io");

//--------------DATA BASE--------------
const mongoose = require("./db/mongoose.js");

//--------------ROUTES--------------
const validateRequest = require("./controllers/app.controllers");
const usersRouter = require("./routes/users.routes.js");
const snippetsRouter = require("./routes/snippets.routes.js");
const commentsRouter = require("./routes/comments.routes.js");
const filesRouter = require("./routes/files.routes.js");
const answersRouter = require("./routes/answers.routes.js");

//--------------AUTHENTICATION--------------
const session = require("express-session");
const passport = require("passport");

const port = process.env.PORT || 1234;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(validateRequest);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get("/", (_, res) => {
  res.send("base-server");
});

app.use("/users", usersRouter);
app.use("/snippets", snippetsRouter);
app.use("/answers", answersRouter);
app.use("/comments", commentsRouter);
app.use("/files", filesRouter);

server.listen(port, (e) => {
  if (!e) console.log("server is up on port " + port);
});

//--------------SOCKET--------------
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`new user connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`user disconnected: ${socket.id}`);
  });
});
