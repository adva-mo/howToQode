const Snippet = require("../models/Snippet.js");
const User = require("../models/User.js");

const addAnswer = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    if (!snippet) return res.status(404).send("snippet is not exist");
    snippet.answers.push(req.body);
    await snippet.save();
    res.send(snippet.answers[snippet.answers.length - 1]);
  } catch (e) {
    res.status(404).send({ message: e });
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
    res.status(404).send({ message: e });
  }
};

const confirmAnswer = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    const answer = snippet.answers.id(req.body.answerId);

    if (req.body.userid === answer.author) {
      return res
        .status(401)
        .send({ message: "cant add like, user is the author" });
    }
    if (snippet.author === req.body.userid) {
      answer.isHelpful = true;
      snippet.solved = true;
      const repliedUser = await User.findById(answer.author);
      if (repliedUser) {
        repliedUser.solvedQuestions += 1;
        await repliedUser.save();
      }
      res.send("confirmed");
    }
    answer.likes.push(req.body.userid);
    await snippet.save();
    console.log("add like");
    res.send("add like");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addAnswer, deleteAnswer, confirmAnswer };
