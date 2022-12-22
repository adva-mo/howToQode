require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const validateRequest = require("./controllers/app.controllers");

const mongoose = require("./db/mongoose.js");

const port = process.env.PORT || 1234;

app.use(cors());
app.use(express.json());
app.use(validateRequest);

app.get("/", (req, res) => {
  res.send("ok");
});

server.listen(port, (e) => {
  if (!e) console.log("server is up on port " + port);
});
