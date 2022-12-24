const express = require("express");
const {
  addAnswer,
  deleteAnswer,
  confirmAnswer,
} = require("../controllers/answers.controllers.js");

const answersRouter = express.Router();

answersRouter.post("/:snippetid", addAnswer);
answersRouter.delete("/:snippetid", deleteAnswer);

answersRouter.post("/:snippetid/confirm", confirmAnswer);

module.exports = answersRouter;
