const express = require("express");
const { upload, uploadFile } = require("../utils/files.utils.js");
const {
  getFileContent,
  // saveImage,
} = require("../controllers/files.controllers.js");

const filesRouter = express.Router();

filesRouter.post(
  "/upload/snippet",
  uploadFile.single("upload-snippet"),
  getFileContent,
  (error, req, res, next) => {
    res.status(404).send(error.message);
  }
);

filesRouter.post(
  "/upload/image",
  upload.single("upload-image"),
  // saveImage,
  (req, res) => {
    res.send("upload succefull");
  }
);

module.exports = filesRouter;
