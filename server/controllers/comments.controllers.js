const Snippet = require("../models/snippet.js");

const addComment = async (req, res) => {
  console.log("in post Comment request");
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    if (!snippet) return res.status(404).send("snippet is not exist");
    snippet.comments.push(req.body);
    await snippet.save();
    res.send(snippet.comments[snippet.comments.length - 1]);
  } catch (e) {
    console.log(e.message);
    res.status(404).send(e.message);
  }
};

module.exports = addComment;
