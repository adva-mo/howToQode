const Snippet = require("../models/snippet.js");

const addSnippet = async (req, res) => {
  try {
    const newSnippet = new Snippet(req.body);
    await newSnippet.save();
    res.send("snippet upload succsefull");
  } catch (e) {
    console.log(e.message);
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

module.exports = { addSnippet, getAllSnippets };
