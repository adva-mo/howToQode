const Snippet = require("../models/snippet.js");

const addAnswer = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    if (!snippet) return res.status(404).send("snippet is not exist");
    snippet.answers.push(req.body);
    await snippet.save();
    res.send(snippet.answers[snippet.answers.length - 1]);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const deleteAnswer = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    if (!snippet) return res.status(404).send("snippet is not exist");

    const answerToRemove = snippet.answers.id(req.body.id);
    if (answerToRemove) {
      snippet.answers.pull(req.body.id);
      await snippet.save();
      res.send("answer removed");
    } else throw Error("answer isn't exist");
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = { addAnswer, deleteAnswer };
