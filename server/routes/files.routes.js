const express = require("express");
const upload = require("../utils/files.utils.js");
const getFileContent = require("../controllers/files.controllers.js");

const filesRouter = express.Router();

// filesRouter.post("/upload", saveFile);
filesRouter.post(
  "/upload",
  upload.single("upload"),
  getFileContent,
  (error, req, res, next) => {
    res.status(400).send(error.message);
  }
);

module.exports = filesRouter;
