const { Schema } = require("mongoose");
const date = new Date();

const Comment = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    description: {
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
  },
  { timestamps: true }
);

module.exports = Comment;
