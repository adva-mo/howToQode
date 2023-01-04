require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");

//--------------DATA BASE--------------
const mongoose = require("./db/mongoose.js");

//--------------ROUTES--------------
const validateRequest = require("./controllers/app.controllers");
const usersRouter = require("./routes/users.routes.js");
const snippetsRouter = require("./routes/snippets.routes.js");
const commentsRouter = require("./routes/comments.routes.js");
const filesRouter = require("./routes/files.routes.js");
const answersRouter = require("./routes/answers.routes.js");
const aiRouter = require("./routes/ai.routes.js");

//--------------AUTHENTICATION--------------
const session = require("express-session");
const passport = require("passport");

const port = process.env.PORT || 3001;

// app.use(cors({ origin: "http://localhost:3000" }));
app.use(
  cors({
    origin: "*",
  })
);
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
app.use("/ai", aiRouter);

server.listen(port, (e) => {
  if (!e) console.log("server is up on port " + port);
});

//--------------SOCKET--------------
const { Server } = require("socket.io");
const OnlineUser = require("./models/OnlineUser.js");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("join_room", (data) => socket.join(data));

  socket.on("user_connected", (data) => {
    if (!data) return;
    new OnlineUser({ socket: data })
      .save()
      .then(() => OnlineUser.find({}))
      .then((users) => io.emit("updateUserList", users))
      .catch((e) => console.log(e));
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    OnlineUser.deleteOne({ socket: socket.id }).then(() =>
      OnlineUser.find({})
        .then((users) => io.emit("updateUserList", users))
        .catch((e) => console.log(e))
    );
  });
});
