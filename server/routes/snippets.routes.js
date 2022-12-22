const express = require("express");
const addSnippet = require("../controllers/snippets.controllers.js");

const snippetsRouter = express.Router();

snippetsRouter.post("", addSnippet);

module.exports = snippetsRouter;
