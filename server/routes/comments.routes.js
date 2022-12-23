const express = require("express");
const {
  addComment,
  deleteComment,
} = require("../controllers/comments.controllers.js");

const commentsRouter = express.Router();

commentsRouter.post("/:snippetid", addComment);
commentsRouter.delete("/:snippetid", deleteComment);

module.exports = commentsRouter;
