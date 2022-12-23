const Snippet = require("../models/snippet.js");

const addComment = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    if (!snippet) return res.status(404).send("snippet is not exist");
    snippet.comments.push(req.body);
    await snippet.save();
    res.send(snippet.comments[snippet.comments.length - 1]);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    if (!snippet) return res.status(404).send("snippet is not exist");

    const commentToRemove = snippet.comments.id(req.body.id);
    if (commentToRemove) {
      snippet.comments.pull(req.body.id);
      await snippet.save();
      res.send("comment removed");
    } else throw Error("comment isn't exist");
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = { addComment, deleteComment };
