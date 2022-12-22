const express = require("express");
const addComment = require("../controllers/comments.controllers.js");

const commentsRouter = express.Router();

commentsRouter.post("/:snippetid", addComment);

module.exports = commentsRouter;
