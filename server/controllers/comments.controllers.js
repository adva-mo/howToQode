const Snippet = require("../models/snippet.js");

const addComment = async (req, res) => {
  const { author, title, description, answerId } = req.body;
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    if (!snippet) return res.status(404).send("snippet is not exist");
    const answer = snippet.answers.id(answerId);
    if (!answer) return res.status(404).send("answer is not exist");
    answer.comments.push({ author, title, description });
    await snippet.save();
    res.send(answer.comments[answer.comments.length - 1]);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const deleteComment = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    if (!snippet) return res.status(404).send("snippet is not exist");
    const answer = snippet.answers.id(req.body.answerId);
    if (!answer) return res.status(404).send("answer is not exist");

    const commentToRemove = answer.comments.id(req.body.id);
    if (commentToRemove) {
      answer.comments.pull(req.body.id);
      await snippet.save();
      res.send("comment removed");
    } else throw Error("comment isn't exist");
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = { addComment, deleteComment };
