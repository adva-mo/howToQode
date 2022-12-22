const Snippet = require("../models/snippet.js");

const addSnippet = async (req, res) => {
  console.log("post snippet request");
  try {
    const newSnippet = new Snippet(req.body);
    await newSnippet.save();
    res.send("snippet upload succsefull");
  } catch (e) {
    console.log(e.message);
    res.status(404).send(e.message);
  }
};

module.exports = addSnippet;
