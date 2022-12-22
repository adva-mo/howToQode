const express = require("express");
const {
  addSnippet,
  getAllSnippets,
} = require("../controllers/snippets.controllers.js");

const snippetsRouter = express.Router();

snippetsRouter.post("", addSnippet);
snippetsRouter.get("", getAllSnippets);

module.exports = snippetsRouter;
