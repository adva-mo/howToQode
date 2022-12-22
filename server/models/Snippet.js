const { mongoose, Schema } = require("mongoose");
const Comment = require("./comment.js");
const date = new Date();

const Snippet = mongoose.model(
  "Snippet",
  new Schema({
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    solved: {
      type: Boolean,
      default: false,
    },
    comments: [Comment],
    code: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: date.toLocaleDateString(),
    },
    time: {
      type: String,
      default: date.toLocaleTimeString(),
    },
  })
);

module.exports = Snippet;
