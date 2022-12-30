const Snippet = require("../models/Snippet.js");

const addSnippet = async (req, res) => {
  try {
    const newSnippet = new Snippet(req.body);
    await newSnippet.save();
    res.send(newSnippet);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const getAllSnippets = async (req, res) => {
  const snippetsToFind = req.query.user ? { author: req.query.user } : {};
  try {
    const snippets = await Snippet.find(snippetsToFind, {
      title: 1,
      solved: 1,
      date: 1,
    });
    res.send(snippets);
  } catch (e) {
    res.status(500).send();
  }
};

const getUserSnippets = async (req, res) => {
  try {
    const { userId } = req.params;
    const userSnippets = await Snippet.find({ author: userId });

    if (!userSnippets) {
      return res.status(400).send("users doesnt have snippets");
    }

    res.send(userSnippets);
  } catch (e) {
    res.status(500).send();
  }
};

const getSnippet = async (req, res) => {
  // console.log("h");
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) return res.status(404).send("snippet is not exist");
    res.send(snippet);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = { addSnippet, getAllSnippets, getSnippet, getUserSnippets };
