const express = require("express");
const {
  addSnippet,
  getAllSnippets,
  getSnippet,
} = require("../controllers/snippets.controllers.js");

const snippetsRouter = express.Router();

snippetsRouter.post("", addSnippet);
snippetsRouter.get("", getAllSnippets);
snippetsRouter.get("/:id", getSnippet);

module.exports = snippetsRouter;
