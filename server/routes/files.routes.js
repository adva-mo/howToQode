const express = require("express");
const upload = require("../utils/files.utils.js");
const {
  getFileContent,
  saveImage,
} = require("../controllers/files.controllers.js");

const filesRouter = express.Router();

filesRouter.post(
  "/upload/snippet",
  upload.single("upload-snippet"),
  getFileContent,
  (error, req, res, next) => {
    res.status(404).send(error.message);
  }
);

// filesRouter.post(
//   "/upload/image",
//   upload.single("upload-image"),
//   saveImage,
//   (error, req, res, next) => {
//     res.status(404).send(error.message);
//   }
// );

module.exports = filesRouter;
