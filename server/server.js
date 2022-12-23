require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("./db/mongoose.js");
const cors = require("cors");

const validateRequest = require("./controllers/app.controllers");
const usersRouter = require("./routes/users.routes.js");
const snippetsRouter = require("./routes/snippets.routes.js");
const commentsRouter = require("./routes/comments.routes.js");
const filesRouter = require("./routes/files.routes.js");

const session = require("express-session");
const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");

const port = process.env.PORT || 1234;

app.use(cors());
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

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/users", usersRouter);
app.use("/snippets", snippetsRouter);
app.use("/comments", commentsRouter);
app.use("/files", filesRouter);

server.listen(port, (e) => {
  if (!e) console.log("server is up on port " + port);
});
