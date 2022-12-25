const { Schema } = require("mongoose");
const Comment = require("./Comment.js");

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
    likes: {
      type: Number,
      default: 0,
    },
    comments: [Comment],
  },
  { timestamps: true }
);

module.exports = Answer;
