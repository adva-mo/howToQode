const Snippet = require("../models/snippet.js");

const addSnippet = async (req, res) => {
  try {
    const newSnippet = new Snippet(req.body);
    await newSnippet.save();
    res.send(newSnippet);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const getAllSnippets = async (_, res) => {
  try {
    const snippets = await Snippet.find({});
    if (!snippets) return res.status(404).send();
    res.send(snippets);
  } catch (e) {
    res.status(500).send();
  }
};

const getSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) return res.status(404).send("snippet is not exist");
    res.send(snippet);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = { addSnippet, getAllSnippets, getSnippet };
