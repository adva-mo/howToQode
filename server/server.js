require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);

// const mongooseConnect = require("./db/mongoose.js")();

const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 1234;

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(404).send({ message: err.message }); // Bad request
  }
  next();
});

server.listen(port, (e) => {
  if (!e) console.log("server is up on port " + port);
});
