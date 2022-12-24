const express = require("express");
const {
  addAnswer,
  deleteAnswer,
} = require("../controllers/answers.controllers.js");

const answersRouter = express.Router();

answersRouter.post("/:snippetid", addAnswer);
answersRouter.delete("/:id", deleteAnswer);

module.exports = answersRouter;
