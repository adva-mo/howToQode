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

const confirmAnswer = async (req, res) => {
  // console.log(req.body);
  try {
    const snippet = await Snippet.findById(req.params.snippetid);
    const answer = snippet.answers.id(req.body.answerId);

    if (req.body.userid === answer.author) {
      console.log("cant add like, user is the author");
      return;
    }
    if (snippet.author === req.body.userid) {
      answer.isHelpful = true;
      answer.likes.push(req.body.userid);
      snippet.solved = true;
      console.log(answer.author);
      const repliedUser = await User.findById(answer.author);
      if (repliedUser) {
        // throw Error("usr isnt exist anymore");
        repliedUser.solvedQuestions += 1;
        await repliedUser.save();
      }

      console.log("answer confirmed");
    } else {
      answer.likes.push(req.body.userid);
      console.log("added like to answer");
    }
    await snippet.save();
    res.send();
  } catch (e) {
    console.log(e);
  }
};

module.exports = { addAnswer, deleteAnswer, confirmAnswer };
