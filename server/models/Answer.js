const { mongoose, Schema } = require("mongoose");
const Comment = require("./Comment.js");
const date = new Date();

const Answer = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    isHelpful: {
      type: Boolean,
      default: false,
    },
    comments: [Comment],
    date: {
      type: String,
      default: date.toLocaleDateString(),
    },
    time: {
      type: String,
      default: date.toLocaleTimeString(),
    },
  }
  //   )
);

module.exports = Answer;
