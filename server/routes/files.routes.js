const express = require("express");
const upload = require("../utils/files.utils.js");
const getFileContent = require("../controllers/files.controllers.js");

const filesRouter = express.Router();

filesRouter.post(
  "/upload/snippet",
  upload.single("upload-snippet"),
  getFileContent,
  (error, req, res, next) => {
    res.status(400).send(error.message);
  }
);

module.exports = filesRouter;
