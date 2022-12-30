const { Schema } = require("mongoose");
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
    likes: {
      type: [String],
    },
    date: {
      type: String,
      default: date.toLocaleDateString(),
    },
    time: {
      type: String,
      default: date.toLocaleTimeString(),
    },
  },
  { timestamps: true }
);

module.exports = Answer;
